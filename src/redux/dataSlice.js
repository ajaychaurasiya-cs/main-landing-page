import { createSlice } from "@reduxjs/toolkit";


const itemSlice = createSlice({
  name: 'items',
  initialState: {
    list: [], // Initial array with 3 items
    payAmount:0, // Initial pay Amount 
  },
  reducers: {
    addItem: (state, action) => {
      state.list = (action.payload); // Add new item to the list
    },
    addAmount:(state, action)=> {
        state.payAmount = state.payAmount + Number(action.payload) // Add new Number to payAmount 
    },
  },
});

export const { addItem, addAmount } = itemSlice.actions;
export default itemSlice.reducer;
