import { configureStore } from '@reduxjs/toolkit';
import taskReducer from "./taskslice"

// create store
const store = configureStore({
  reducer: taskReducer,
});

export default store;
