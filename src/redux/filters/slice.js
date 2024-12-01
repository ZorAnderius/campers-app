import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';

export const filterSlice = createSlice({
  name: 'filters',
  initialState: initialState,
  reducers: {
    changeFilter(state, action) {
      state.filter = action.payload;
    },
    resetFilter() {
      return initialState;
    },
  },
});

export const { changeFilter, resetFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
