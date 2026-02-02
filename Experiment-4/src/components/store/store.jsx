import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./CounterReducer";

export const store = configureStore({
  reducer: {
    counter: counterReducer, // 👈 THIS NAME MATTERS
  },
});