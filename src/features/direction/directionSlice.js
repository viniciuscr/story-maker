import { createSlice } from '@reduxjs/toolkit';
import { STAGE_DIRECTIONS } from '../scene/sceneSlice';
import { startNewGame } from '../../app/extraReducers';

export const directionSlice = createSlice({
  name: 'directions',
  initialState: [],
  extraReducers: (builder) => builder.addCase(startNewGame, () => []),
  reducers: {
    enqueueDirection: (state, action) => {
      return [
        { action: STAGE_DIRECTIONS.enters, actor: action.payload.affected, animations: action.payload.animation },
        ...state,
      ];
    },
    dequeueDirection: (state) => {
      return state.slice(0, state.length - 1);
    },
  },
});

export const { enqueueDirection, dequeueDirection } = directionSlice.actions;

export default directionSlice.reducer;
