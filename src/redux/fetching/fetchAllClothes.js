import { createAsyncThunk } from '@reduxjs/toolkit';
import { getClothes } from '../../services/api';

export const fetchAllClothes = createAsyncThunk('clothes/fetchAllClothes', async (limit) => {
  return getClothes(limit);
});
