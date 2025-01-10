import { createSlice } from '@reduxjs/toolkit';
import { STAGE_DIRECTIONS } from '../scene/sceneSlice';
import { startNewGame } from '../../app/extraReducers';

export const directionSclice = createSlice({
  name: 'directions',
  initialState: [],
  extraReducers: (builder) => builder.addCase(startNewGame, () => []),
  reducers: {
    pushDirection: (state, action) => {
      return [
        ...state,
        {
          action: STAGE_DIRECTIONS.enters,
          actor: action.payload.affected,
          animations: action.payload.animation,
        },
      ];
    },
    popDirection: (state) => {
      return state.slice(0, -1);
    },
  },
});

export const { pushDirection, popDirection } = directionSclice.actions;

export default directionSclice.reducer;
