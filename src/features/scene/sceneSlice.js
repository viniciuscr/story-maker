import { createSlice } from '@reduxjs/toolkit';
import { setDialogues } from '../dialogue/dialogueSlice';
import { startNewGame } from '../../app/extraReducers';
import { invoke } from '@tauri-apps/api/core';

export const STAGE_DIRECTIONS = { leave: 'leave', enters: 'enters' };

//TODO: move to other file
const fetchScene = async (scene) => JSON.parse(await invoke('fetch_scene', { scene }));

export const sceneSlice = createSlice({
  name: 'scene',
  initialState: {
    currentScene: {},
    onStage: [],
    settings: {},
  },

  extraReducers: (builder) =>
    builder.addCase(startNewGame, () => ({
      currentScene: {},
      onStage: [],
      settings: {},
    })),
  reducers: {
    setCurrentScene: (state, action) => {
      state.currentScene = action.payload;
      return state;
    },
    enters: (state, action) => {
      return { ...state, onStage: [...state.onStage, action.payload] };
    },
    exits: (state, action) => {
      state.onStage = state.onStage.filter((actors) => actors.name !== action.payload);
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

export const selectActorsInScene = (state) => state.scene.currentScene.actors;

export const selectStage = (state) => state.scene.currentScene.stage;

export const selectScenery = (state) => state.scene.currentScene.scenery;

export const selectSceneSettings = (state) => state.scene.currentScene.settings;

export default sceneSlice.reducer;
