import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  merchant: { name: "Jumia Kenya", logoUrl: "/images/logos/jumia.svg" },
  expiry: new Date("February 28, 2022 00:00:00"),
  orderId: 172750,
  amount: 12496,
};

export const payment = createSlice({
  name: "payment",
  initialState,
  reducers: {
    toggleNavBarStyle: (state, action) => {
      state.navBarStyle = action.payload.navBarStyle;
    },
  },
});

export const { toggleNavBarStyle } = payment.actions;

export default payment.reducer;
