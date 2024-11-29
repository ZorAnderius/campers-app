import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { correctionFilterValue } from '../../helpers/filter/correctionFilterValue';

axios.defaults.baseURL = 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io';

export const getVehicles = createAsyncThunk(
  'vehicle/AllVehicles',
  async ({ page = 1, limit = 4, filter = {} }, thunkAPI) => {
    try {
      const response = await axios.get('/campers', {
        params: {
          page,
          limit,
          ...correctionFilterValue(filter),
        },
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
