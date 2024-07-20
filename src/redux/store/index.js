import { configureStore } from '@reduxjs/toolkit';
import reducers from "../reducer";
import { apiSlice } from '../reducer/api/apiSlice';


const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools:true,
});

export default store;