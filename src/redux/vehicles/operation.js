import { createAsyncThunk } from '@reduxjs/toolkit';
import { correctionFilterValue } from '../../helpers/filter/correctionFilterValue';
import { PAGINATION } from '../../constants/constants';
import api from '../../configAPI/api';

export const getVehicles = createAsyncThunk(
  'vehicle/AllVehicles',
  async ({ page = 1, filter = {} }, thunkAPI) => {
    try {
      const response = await api.get('/campers', {
        params: {
          page,
          limit: PAGINATION.limit,
          ...correctionFilterValue(filter),
        },
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
