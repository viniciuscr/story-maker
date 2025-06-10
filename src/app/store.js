import { configureStore, createListenerMiddleware, isAnyOf } from '@reduxjs/toolkit';

import sceneReducer, { enters } from '../features/scene/sceneSlice';
import dialogueReducer, { nextDialogue, setDialogues } from '../features/dialogue/dialogueSlice';
import statusReducer, { setStatus } from '../features/status/statusSlice';
import directionReducer, { enqueuDirection, dequeueDirection } from '../features/direction/directionSlice';
import titleScreenReducer from '../features/titleScreen/titleScreenSlice';
import settingsScreenReducer from '../features/settingsScreen/settingsSlice';
import loadGameScreenReducer from '../features/loadGameScreen/loadGameSlice';
import saveManagerReducer from '../core-base/saveManager/saveManagerSlice';
import saveGameScreenReducer from '../features/saveGameScreen/saveGameSlice';

const listenerMiddleware = createListenerMiddleware();

listenerMiddleware.startListening({
  matcher: isAnyOf(setDialogues, nextDialogue),
  effect: async (_, listenerApi) => {
    const current = listenerApi.getState().dialogue?.current;

    current?.triggers?.forEach(({ effect, value }) => {
      console.debug(`Pushing trigger [${effect}]`, value);
      if (effect === 'update_status') {
        setStatus(value.value, value.path);
      }
      if (effect === 'enters') {
        listenerApi.dispatch(enqueuDirection(value.affected));
      }
    });
  },
});

listenerMiddleware.startListening({
  actionCreator: enqueuDirection,
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
