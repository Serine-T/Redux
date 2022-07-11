import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { API_LINK } from '../../helpers/constants';
import axios from 'axios';

export const gettingCategories = createAsyncThunk(
  'categories/gettingCategories',
  async (thunkAPI) => {
    try {
      const resp = await axios(`${API_LINK}/categories`);

      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('something went wrong');
    }
  }
);

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    categoriesList: [],
    categoriesStatus: '',
  },
  reducers: {
    gettingCategories(state, action) {
      state.categoriesList = [...action.payload];
    },
    setStatus(state, action) {
      state.categoriesStatus = action.payload;
    },
  },
  extraReducers: {
    [gettingCategories.pending]: (state) => {
      state.categoriesStatus = 'pending';
    },
    [gettingCategories.fulfilled]: (state, { payload }) => {
      state.categoriesStatus = 'success';
      state.categoriesList = payload;
    },
    [gettingCategories.rejected]: (state) => state.categoriesStatus = 'error',
  }
});

export const categoriesActions = categoriesSlice.actions;
export default categoriesSlice;
