import { configureStore } from "@reduxjs/toolkit";
import filters from "./reducers/filtersSlice";
import basket from "./reducers/basketSlice";

export const store = configureStore({
  reducer: {
    filters,
    basket,
  },
});
