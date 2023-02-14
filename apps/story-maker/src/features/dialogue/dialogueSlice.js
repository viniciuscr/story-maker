import { createSlice } from "@reduxjs/toolkit";

export const dialogueSlice = createSlice({
  name: "dialogue",
  initialState: {
    dialogues: [],
    current: null,
  },
  reducers: {
    nextDialogue: (state) => {
      const { next } = state.current;

      state.current = state.dialogues.find(({ id }) => id === next.dialogue) ?? state.current;
      return state;
    },
    goToDialogue: (state, action) => {
      state.current = state.dialogues.find(({ id }) => id === action.payload);
      return state;
    },
    setDialogues: (state, action) => {
      state.dialogues = action.payload;
      state.current = action.payload[0];
      return state;
    },
  },
});

export const {
  nextDialogue,
  setDialogues,
  goToDialogue,
} = dialogueSlice.actions;

export const selectCurrentDialogue = (state) => state.dialogue.current;

export default dialogueSlice.reducer;
