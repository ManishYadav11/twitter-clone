import { configureStore } from '@reduxjs/toolkit';
import userSlice from './userSlice'; // Only import userSlice once

const store = configureStore({
  reducer: {
    user: userSlice,
  },
});

export default store;
