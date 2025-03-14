import { createSlice } from '@reduxjs/toolkit';

const initialState = { entries: [], value: 0 };

const buySlice = createSlice({
  name: 'buy',
  initialState,
  reducers: {
    add(state, action) {
      state.entries.push(action.payload);
      state.value += 1;
    },
    remove(state, action) {
      const sorted = state.entries.filter((_, index) => {
        return index !== action.payload;
      });
      state.entries = sorted;
      state.value -= 1
    }
  }
});

export const { add, remove } = buySlice.actions;
export default buySlice.reducer;
