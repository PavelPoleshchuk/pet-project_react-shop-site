import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sortId: 0,
  categoriesId: 0,
};

export const sortAndCategorySlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setSortId: (state, action) => {
      state.sortId = action.payload;
    },
    setCategoriesId: (state, action) => {
      state.categoriesId = action.payload;
    },
  },
});

export const { setSortId, setCategoriesId } = sortAndCategorySlice.actions;

export default sortAndCategorySlice.reducer;


