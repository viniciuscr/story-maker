import {
  configureStore,
  createListenerMiddleware,
  isAnyOf,
} from "@reduxjs/toolkit";

import sceneReducer, { enters } from "../features/scene/sceneSlice";
import dialogueReducer, {
  nextDialogue,
  setDialogues,
} from "../features/dialogue/dialogueSlice";
import statusReducer, { setStatus } from "../features/status/statusSlice";
import directionReducer from "../features/direction/directionSlice";
import { pushDirection } from "../features/direction/directionSlice";

const listenerMiddleware = createListenerMiddleware();

listenerMiddleware.startListening({
  matcher: isAnyOf(setDialogues, nextDialogue),
  effect: async (_, listenerApi) => {
    const current = listenerApi.getState().dialogue?.current;

    current?.triggers?.forEach(({ effect, value }) => {
      console.debug(`Pushing trigger [${effect}]`, value);
      if (effect === "update_status") {
        setStatus(value.value, value.path);
      }
      if (effect === "enters") {
        listenerApi.dispatch(pushDirection(value.affected));
      }
    });
  },
});

listenerMiddleware.startListening({
  actionCreator: pushDirection,
  effect: async (action, listenerApi) => {
    console.debug(`Adding ${action.payload} to onStage`);

    listenerApi.dispatch(enters(action.payload));
  },
});

export default configureStore({
  reducer: {
    scene: sceneReducer,
    dialogue: dialogueReducer,
    status: statusReducer,
    directions: directionReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(listenerMiddleware.middleware),
});
