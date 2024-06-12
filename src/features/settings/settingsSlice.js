import { createSlice } from "@reduxjs/toolkit";

const SettingsSlice = createSlice({
  name: "settingsScreen",
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
    newSave: (state, action) => ({
      ...state,
      manualSaves: [...state.manualSaves, action.payload],
    }),
  },
});

export const { show, hide, newSave } = SettingsSlice.actions;

export const selectIsShowingSettingsScreen = (state) =>
  state.settingsScreen.show;

export default SettingsSlice.reducer;
