import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: initialState,
  reducers: {
    changeFilter(state, action) {
      return (state = action.payload);
    },
    resetFilter() {
      return initialState;
    },
  },
});

export const { changeFilter, resetFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
