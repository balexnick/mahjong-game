import { configureStore } from '@reduxjs/toolkit';
import appReducer from './appReducer/reducer';

export const store = configureStore({
  reducer: appReducer,
});
