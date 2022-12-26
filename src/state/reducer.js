import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  term: 0,
};

export const customReducer = createReducer(initialState, {
  saveInput: (state, action) => {
    state.term = action.payload;
  },
});
