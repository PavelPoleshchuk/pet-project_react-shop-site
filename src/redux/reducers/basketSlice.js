import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalPrice: 0,
  totalCount: 0,
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addItemToBasket: (state, action) => {
      const objectWithId = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (objectWithId) {
        objectWithId.count++;
      } else {
        state.items.push(action.payload);
      }
      state.totalPrice = state.items.reduce((acc, item) => {
        return acc + item.price * item.count;
      }, 0);
      state.totalCount = state.items.reduce((acc, item) => {
        return acc + item.count;
      }, 0);
    },
    cleanBasket: (state) => {
      state.items = [];
      state.totalPrice=0;
      state.totalCount=0;
    },
  },
});

export const { addItemToBasket, cleanBasket } = basketSlice.actions;

export default basketSlice.reducer;

// const item = {
//   id,
//   imageUrl,
//   name,
//   types: thickness[activeThickness],
//   sizes: activeDiameter,
//   price,
//   count: 1,
// };
