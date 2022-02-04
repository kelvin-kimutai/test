import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  merchant: { name: "Jumia Kenya", logoUrl: "/images/logos/jumia.svg" },
  expiry: new Date("February 28, 2022 00:00:00").toJSON(),
  orderId: 172750,
  amount: 12496,
  mobileNumber: "",
};

export const payment = createSlice({
  name: "payment",
  initialState,
  reducers: {
    updateMobileNumber: (state, action) => {
      state.mobileNumber = action.payload.mobileNumber;
    },
  },
});

export const { updateMobileNumber } = payment.actions;

export default payment.reducer;
