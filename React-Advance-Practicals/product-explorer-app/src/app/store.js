import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/products/productSlices.js";

export const store = configureStore({
  reducer: {
    product: productReducer,
  },
});
