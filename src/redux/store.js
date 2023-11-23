import { configureStore } from "@reduxjs/toolkit";
import sortAndCategory from "./reducers/sortAndCategorySlice";

export const store = configureStore({
  reducer: {
    sortAndCategory,
  },
});
