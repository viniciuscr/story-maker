import { createSlice } from "@reduxjs/toolkit";
import { setDialogues } from "../dialogue/dialogueSlice";

export const STAGE_DIRECTIONS = { leave: "leave", enters: "enters" };

//TODO: move to other file
const fetchScene = async (scene) =>
  await (await fetch(`./data/${scene}.json`)).json();

export const sceneSlice = createSlice({
  name: "scene",
  initialState: {
    currentScene: {},
    onStage: [],
    directions:[],
    settings:{},
  },
  reducers: {
    setCurrentScene: (state, action) => {
      state.currentScene = action.payload;
      return state;
    },
    enters: (state, action) => {
      state.directions.push({
        action: STAGE_DIRECTIONS.enters,
        actor: action.payload.actor,
        animations: action.payload.animation,
      });
      state.onStage.push(action.payload);
      return state;
    },
    exits: (state, action) => {
      state.directions.push({
        action: STAGE_DIRECTIONS.leave,
        actor: action.payload.actor,
        animations: action.payload.animation,
      });
      state.onStage = state.onStage.filter(
        (actors) => actors.name !== action.payload
      );
      return state;
    },
  },
});

export const { enters, exits } = sceneSlice.actions;

export const goToScene = (scene) => async (dispatch) => {
  const { dialogue, ...fetchedScene } = await fetchScene(scene);
  dispatch(sceneSlice.actions.setCurrentScene(fetchedScene));
  dispatch(setDialogues(dialogue));
};

export const selectOnStage = (state) => state.scene.onStage;

export const selectStage = (state) => state.scene.currentScene.stage;

export const selectScenery = (state) => state.scene.currentScene.scenery;

export const selectSceneSettings = (state) => state.scene.currentScene.settings;

export default sceneSlice.reducer;
