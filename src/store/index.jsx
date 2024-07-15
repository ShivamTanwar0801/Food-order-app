import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

const ordersSlice = createSlice({
  name: "orders",
  initialState: { orders: [] },
  reducers: {
    addToOrders: (state, action) => {
      state.orders.push({
        items: action.payload.items,
        customer: action.payload.customer,
      });
    },
    replaceOrders: (state, action) => {
      state.orders = action.payload
    },
  },
});

const store = configureStore({
  reducer: { orders: ordersSlice.reducer },
});

export default store;

export const ordersAction = ordersSlice.actions;
