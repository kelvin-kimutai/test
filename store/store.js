import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "./uiSlice";
import paymentReducer from "./paymentSlice";

export default configureStore({
  reducer: {
    ui: uiReducer,
    payment: paymentReducer,
  },
});
