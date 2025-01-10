import { createSlice } from '@reduxjs/toolkit';

const SaveManagerSlice = createSlice({
  name: 'saves',
  initialState: {
    manualSaves: [
      ...Array.from({ length: 12 }, (x, i) => ({
        saveSlot: i,
        text: 'empty',
      })),
    ],
  },
  reducers: {
    overrideSave: (state, action) => {
      state.manualSaves[action.payload.saveSlot] = action.payload;
      return state;
    },
  },
});

export const { overrideSave } = SaveManagerSlice.actions;

export const selectManualSaves = (state) => state.saves.manualSaves;

export default SaveManagerSlice.reducer;
