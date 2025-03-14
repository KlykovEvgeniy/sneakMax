import { configureStore } from '@reduxjs/toolkit';
import { clothSlice } from './slices/clothSlice';
import visibleSlice from './slices/visible';
import buySlice from './slices/buy';

export const store = configureStore({
  reducer: {
    products: clothSlice.reducer,
    buy: buySlice,
    isVisible: visibleSlice,
  }
});
