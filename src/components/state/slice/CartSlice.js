import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  amount: 0,
  total: 0
}

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state, action) => {
      state.amount = state.amount + 1;
      const cartItem = state.cartItems.find(
        (cartItem) => cartItem.id === action.payload.id
      );
      cartItem ? (cartItem.amount = cartItem.amount + 1) : state.cartItems.push({...action.payload, amount: 1})
    },
    remove: (state, action) => {
      state.cartItems.map(cartItem => {
        if(cartItem.id === action.payload.id) {
          state.cartItems = state.cartItems.filter(item => item.id !== cartItem.id)
          state.amount = state.amount - cartItem.amount;
        }
      })
    },
    increase: (state, action) => {
    state.amount = state.amount + 1;
    const itemIndex = state.cartItems.findIndex(cartItem => cartItem.id === action.payload.id);
    state.cartItems[itemIndex].amount += 1;
    state.cartItems[itemIndex].total = state.cartItems[itemIndex].amount * state.cartItems[itemIndex].price;
    let total = 0;
    state.cartItems.forEach(item => total += item.total);
    state.total = total;
    },
    decrease: (state, action) => {
      const itemIndex = state.cartItems.findIndex(cartItem => cartItem.id === action.payload.id);
      state.cartItems[itemIndex].amount > 0 && 
      state.cartItems[itemIndex].amount -- && 
      state.amount-- ;   
      state.cartItems[itemIndex].total = state.cartItems[itemIndex].amount * state.cartItems[itemIndex].price;
      let total = 0;
      state.cartItems.forEach(item => total += item.total);
      state.total = total;   
    }
  }
})

export const {add, remove, increase, decrease} = CartSlice.actions;

export default CartSlice.reducer;