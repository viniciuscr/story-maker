import { createSlice } from "@reduxjs/toolkit";
import _set from "lodash.set";
import _get from "lodash.get";
import { startNewGame } from "../../app/store";

export const statusSlice = createSlice({
  name: "status",
  initialState: {},
  extraReducers: (builder) => builder.addCase(startNewGame, () => ({})),
  reducers: {
    setStatus: (state, action) => {
      const current = _get(state, action.payload.path);

      const newValue = isNaN(current)
        ? action.payload.value
        : current + action.payload.value;

      _set(state, action.payload.path, newValue);
      return state;
    },
  },
});

export const selectStatus = (state) => (path) =>
  path ? _get(state, `status.${path}`) : state.status;

export const { setStatus } = statusSlice.actions;

export default statusSlice.reducer;
