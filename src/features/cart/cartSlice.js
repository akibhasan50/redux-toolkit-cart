import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../cartItems";
const initialState = {
  cartItems: cartItems,
  amount: 10,
  total: 0,
  isLoading: true,
};
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
      state.amount = 0;
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },
    increaseItem: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload);
      console.log(cartItem);
      cartItem.amount = cartItem.amount + 1;
    },
    decreaseItem: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload);
      cartItem.amount = cartItem.amount - 1;
    },
    calculateTotals: (state) => {
      let amount = 0;
      let total = 0;
      state.cartItems.forEach((item) => {
        console.log(item.price);
        amount += item.amount;
        total += item.amount * item.price;
      });
      console.log(total);
      state.amount = amount;
      state.total = total.toFixed(2);
    },
  },
});
export const {
  clearCart,
  removeItem,
  increaseItem,
  decreaseItem,
  calculateTotals,
} = cartSlice.actions;
export default cartSlice.reducer;
