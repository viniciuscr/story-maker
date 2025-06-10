import { createSlice } from '@reduxjs/toolkit';
import { STAGE_DIRECTIONS } from '../scene/sceneSlice';
import { startNewGame } from '../../app/extraReducers';

export const directionSclice = createSlice({
  name: 'directions',
  initialState: [],
  extraReducers: (builder) => builder.addCase(startNewGame, () => []),
  reducers: {
    enqueuDirection: (state, action) => {
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

export const { enqueuDirection, dequeueDirection } = directionSclice.actions;

export default directionSclice.reducer;
