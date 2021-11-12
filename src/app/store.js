import { configureStore } from "@reduxjs/toolkit";

import sceneReducer from "../features/scene/sceneSlice";
import dialogueReducer from "../features/dialogue/dialogueSlice";
import statusReducer from "../features/status/statusSlice";

export default configureStore({
  reducer: {
    scene: sceneReducer,
    dialogue: dialogueReducer,
    status: statusReducer,
  },
});
