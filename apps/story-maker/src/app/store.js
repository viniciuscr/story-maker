import { configureStore, createListenerMiddleware } from "@reduxjs/toolkit";

import sceneReducer, { enters } from "../features/scene/sceneSlice";
import dialogueReducer from "../features/dialogue/dialogueSlice";
import statusReducer from "../features/status/statusSlice";

const listenerMiddleware = createListenerMiddleware()

listenerMiddleware.startListening({
  actionCreator: enters,
  effect: async (action, listenerApi) => {
  }});

export default configureStore({
  reducer: {
    scene: sceneReducer,
    dialogue: dialogueReducer,
    status: statusReducer,
  },
});
