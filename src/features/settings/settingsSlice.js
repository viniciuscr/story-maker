import { createSlice } from '@reduxjs/toolkit';

const SettingsSlice = createSlice({
  name: 'settingsScreen',
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

export const { show, hide } = SettingsSlice.actions;

export const selectIsShowingSettingsScreen = (state) => state.settingsScreen.show;

export default SettingsSlice.reducer;
