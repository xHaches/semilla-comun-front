import { createSlice } from "@reduxjs/toolkit";

export interface counterState {
  counter: number;
}

const initialState: counterState = {
  counter: 10,
};

export const incidentsSlice = createSlice({
  name: "incidencias",
  initialState,
  reducers: {
    updateCounter: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.counter = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateCounter } = incidentsSlice.actions;

export default incidentsSlice.reducer;
