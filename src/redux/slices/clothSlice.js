import { createSlice } from '@reduxjs/toolkit';
import { fetchAllClothes } from '../fetching/fetchAllClothes';

const initialState = {
  entries: [],
  isLoading: false,
  error: null
};

export const clothSlice = createSlice({
  name: 'clothes',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllClothes.fulfilled, (state, action) => {
        state.entries = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchAllClothes.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchAllClothes.rejected, (state) => {
        state.error = 'Sorry, but we can not load the Shop /:';
        state.isLoading = false;
      });
  }
});
