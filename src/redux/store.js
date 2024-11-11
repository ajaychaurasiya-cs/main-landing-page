// redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import itemReducer from './dataSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    items: itemReducer,
  },
});

export default store;
