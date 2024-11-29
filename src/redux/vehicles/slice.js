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
    resetVehicals() {
      return initialState;
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

export const { setPage, resetVehicals } = vehiclesSlice.actions;
export const vehiclesReducer = vehiclesSlice.reducer;
