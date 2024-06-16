// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducer.js'
// Ensure this path is correct

const store = configureStore({
  reducer: rootReducer,
});

export default store;
