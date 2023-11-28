import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sortId: 0,
  categoriesId: 0,
  selectedPage: 1,
};

export const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setSortId: (state, action) => {
      state.sortId = action.payload;
    },
    setCategoriesId: (state, action) => {
      state.categoriesId = action.payload;
    },
    setSelectedPage: (state, action) => {
      state.selectedPage = action.payload;
    },
    setAllFilters: (state, action) => {
      state.sortId = action.payload.sortId;
      state.categoriesId = Number(action.payload.categoriesId);
      state.selectedPage = Number(action.payload.selectedPage);
    },
  },
});

export const { setSortId, setCategoriesId, setSelectedPage, setAllFilters } =
  filtersSlice.actions;

export default filtersSlice.reducer;
