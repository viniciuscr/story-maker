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
    toggle: (state) => {
      state.show = !state.show;
    },
  },
});

export const { show, hide, toggle } = TitleScreenSlice.actions;
export const selectIsShowingTitleScreen = (state) => state.titleScreen.show;
export default TitleScreenSlice.reducer;
