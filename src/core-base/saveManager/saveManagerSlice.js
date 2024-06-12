import { createSlice } from "@reduxjs/toolkit";

const SaveManagerSlice = createSlice({
  name: "saves",
  initialState: {
    manualSaves: [],
  },
  reducers: {
    saveNew: (state, action) => ({
      ...state,
      manualSaves: [...state.manualSaves, action.payload],
    }),
    saveOverride: (state, action) => {
      state.manualSaves[action.payload.savePostion] = action.payload.save;
      return state;
    },
  },
});

export const { saveNew, saveOverride } = SaveManagerSlice.actions;

export const selectManualSaves = (state) => state.settings.manualSaves;

export default SaveManagerSlice.reducer;
