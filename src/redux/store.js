import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  persistStore,
} from 'redux-persist';
import { vehiclesReducer } from './vehicles/slice';
import { filterReducer } from './filters/slice';

const persistConfig = {
  key: 'favorites',
  storage,
  whitelist: ['favorites'],
};

const persistConfigFilter = {
  key: 'filter',
  storage,
  whitelist: ['filter'],
};

export const store = configureStore({
  reducer: {
    vehicles: persistReducer(persistConfig, vehiclesReducer),
    filters: persistReducer(persistConfigFilter, filterReducer),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
