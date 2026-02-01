import { configureStore, createListenerMiddleware, isAnyOf } from '@reduxjs/toolkit';

import sceneReducer, { enters } from '../features/scene/sceneSlice';
import dialogueReducer, { nextDialogue, setDialogues } from '../features/dialogue/dialogueSlice';
import statusReducer, { setStatus } from '../features/status/statusSlice';
import directionReducer, { enqueueDirection, dequeueDirection } from '../features/direction/directionSlice';
import titleScreenReducer from '../features/titleScreen/titleScreenSlice';
import settingsScreenReducer from '../features/settingsScreen/settingsSlice';
import loadGameScreenReducer from '../features/loadGameScreen/loadGameSlice';
import saveManagerReducer from '../core-base/saveManager/saveManagerSlice';
import saveGameScreenReducer from '../features/saveGameScreen/saveGameSlice';

const listenerMiddleware = createListenerMiddleware();

const processTriggers = (triggers, listenerApi, context = 'unknown') => {
  if (!triggers) return;

  triggers.forEach(({ effect, value, when }) => {
    console.debug(`Processing ${context} trigger [${effect}]`, value);

    if (effect === 'update_status') {
      listenerApi.dispatch(setStatus({ path: value.path, value: value.value }));
    }
    if (effect === 'enters') {
      listenerApi.dispatch(enqueueDirection(value.affected));
    }
  });
};

listenerMiddleware.startListening({
  matcher: isAnyOf(setDialogues, nextDialogue),
  effect: async (action, listenerApi) => {
    const current = listenerApi.getState().dialogue?.current;
    const actionType = action.type;

    console.debug(`Processing dialogue triggers for: ${actionType}`);

    current?.triggers?.forEach(({ effect, value, when }) => {
      // Process triggers based on 'when' property
      if (actionType === 'dialogue/setDialogues' && when === 'before') {
        processTriggers([{ effect, value }], listenerApi, `'before' dialogue`);
      }

      if (actionType === 'dialogue/nextDialogue' && (!when || when === 'after')) {
        processTriggers([{ effect, value }], listenerApi, `'after' dialogue`);
      }
    });
  },
});

listenerMiddleware.startListening({
  type: 'dialogue/processChoiceTriggers',
  effect: async (action, listenerApi) => {
    console.debug('Processing choice triggers');
    processTriggers(action.payload, listenerApi, 'choice');
  },
});

listenerMiddleware.startListening({
  actionCreator: enqueueDirection,
  effect: async (action, listenerApi) => {
    //TODO: soon we will have more complex logic, with different actions
    console.debug(`Adding ${action.payload} to onStage`);
    //TODO: instead of dispaching directly, we should  triggers actions that will animate and dispatch
    listenerApi.dispatch(enters(action.payload));

    listenerApi.dispatch(dequeueDirection());
  },
});

const store = configureStore({
  reducer: {
    scene: sceneReducer,
    dialogue: dialogueReducer,
    status: statusReducer,
    directions: directionReducer,
    titleScreen: titleScreenReducer,
    settingsScreen: settingsScreenReducer,
    loadGameScreen: loadGameScreenReducer,
    saveGameScreen: saveGameScreenReducer,
    saves: saveManagerReducer,
  },
  preloadedState: {
    ...JSON.parse(localStorage.getItem('autosave')),
    titleScreen: { show: true },
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(listenerMiddleware.middleware),
});

store.subscribe(() => {
  const state = store.getState();
  //TODO move autosave to constant
  localStorage.setItem('autosave', JSON.stringify(state));
});

export default store;
