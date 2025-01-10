import { createSlice } from '@reduxjs/toolkit';

const TitleScreenSlice = createSlice({
  name: 'titleScreen',
  initialState: {
    show: true,
  },
  reducers: {
    show: (state) => {
      state.show = true;
    },
    hide: (state) => {
      state.show = false;
    },
  },
});

export const { show, hide } = TitleScreenSlice.actions;
export const selectIsShowingTitleScreen = (state) => state.titleScreen.show;
export default TitleScreenSlice.reducer;
