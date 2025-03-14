import { createSlice } from '@reduxjs/toolkit';

const initialState = { isVisible: false };

const visibleSlice = createSlice({
  name: 'visible',
  initialState,
  reducers: {
    setVisible(state) {
      if (state.isVisible === false) {
        state.isVisible = true;
        return;
      }

      if (state.isVisible === true) {
        state.isVisible = false;
        return;
      }
    }
  }
});

export const { setVisible } = visibleSlice.actions;
export default visibleSlice.reducer;
