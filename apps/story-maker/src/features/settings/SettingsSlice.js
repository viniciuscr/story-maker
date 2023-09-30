import { createSlice } from "@reduxjs/toolkit";

const SettingsSlice = createSlice({
  name: "settings",
  initialState: {
    show: true,
    manualSaves: [],
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

export const selectManualSaves = (state) => state.settings.manualSaves;

export default SettingsSlice.reducer;
