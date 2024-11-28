import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import { getVehicles } from './operation';

export const vehiclesSlice = createSlice({
  name: 'vehicles',
  initialState: initialState,
  extraReducers: builder =>
    builder
      .addCase(getVehicles.fulfilled, (state, action) => {
        state.campers.push(...action.payload.items);
        state.totalCampers = action.payload.total;
      })
      .addCase(getVehicles.pending, state => {
        state.campers = [];
      }),
});

export const vehiclesReducer = vehiclesSlice.reducer;
