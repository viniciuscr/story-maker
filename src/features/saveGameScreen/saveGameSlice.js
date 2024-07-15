import { createSlice } from "@reduxjs/toolkit";

const SaveGameSlice = createSlice({
  name: "saveGameScreen",
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

export const { show, hide } = SaveGameSlice.actions;

export const selectIsShowingSaveGame = (state) => state.saveGameScreen.show;

export default SaveGameSlice.reducer;
