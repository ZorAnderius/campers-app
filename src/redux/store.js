import { configureStore } from '@reduxjs/toolkit';
import { vehiclesReducer } from './vehicles/slice';
import { filterReducer } from './filters/slice';

export const store = configureStore({
  reducer: {
    vehicles: vehiclesReducer,
    filter: filterReducer,
  },
});
