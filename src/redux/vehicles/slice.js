import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import { getVehicles } from './operation';
import { STATUS } from '../../constants/constants';
import { handleFulfiled, handlePending, handleRejected } from './hendlers';

export const vehiclesSlice = createSlice({
  name: 'vehicles',
  initialState: initialState,
  reducers: {
    setPage(state, action) {
      state.page = action.payload;
    },
    addToFavourite(state, action) {
      state.favorites.push(action.payload);
    },
    removeFromFavourite(state, action) {
      const index = state.favorites.findIndex(
        camper => camper.id === action.payload.id
      );
      if (index !== -1) {
        state.favorites.splice(index, 1);
      }
    },
    resetVehicals(state) {
      return { ...initialState, favorites: state.favorites };
    },
  },
  extraReducers: builder =>
    builder
      .addCase(getVehicles.fulfilled, (state, action) => {
        state.campers.push(...action.payload.items);
        state.totalCampers = action.payload.total;
      })
      .addMatcher(action => action.type.endsWith(STATUS.pending), handlePending)
      .addMatcher(
        action => action.type.endsWith(STATUS.fulfilled),
        handleFulfiled
      )
      .addMatcher(
        action => action.type.endsWith(STATUS.rejected),
        handleRejected
      ),
});

export const { setPage, addToFavourite, removeFromFavourite, resetVehicals } =
  vehiclesSlice.actions;
export const vehiclesReducer = vehiclesSlice.reducer;
