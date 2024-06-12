import { createSlice } from "@reduxjs/toolkit";

const LoadGameSlice = createSlice({
  name: "loadGameScreen",
  initialState: {
    show: false,
  },
  reducers: {
    show: (state) => ({
      ...state,
      show: true,
    }),
    hide: (state) => ({
      ...state,
      show: false,
    }),
  },
});

export const { show, hide } = LoadGameSlice.actions;

export const selectIsShowingLoadGame = (state) => state.loadGameScreen.show;

export default LoadGameSlice.reducer;
