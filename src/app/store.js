import { configureStore } from '@reduxjs/toolkit';
import userDetailSlice from '../features/redux/slices/userDetailSlice';

export const store = configureStore({
  reducer: {
    app: userDetailSlice,
  },
});
