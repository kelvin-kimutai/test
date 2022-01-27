import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleNavBarStyle: (state, action) => {
      state.navBarStyle = action.payload.navBarStyle;
    },
  },
});

export const { toggleNavBarStyle } = uiSlice.actions;

export default uiSlice.reducer;
