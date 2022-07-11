import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_LINK } from '../../helpers/constants';
// import { API_LINK } from '../../helpers/constants';

export const gettingCats = createAsyncThunk(
  'cats/gettingCats',
  async (info, thunkAPI) => {
    try {
      const { id, page } = info;
      const resp = await axios(`${API_LINK}/images/search?limit=10&page=${page}&category_ids=${id}`);

      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('something went wrong');
    }
  }
);

export const gettingMoreCats = createAsyncThunk(
  'cats/gettingCats',
  async (info, thunkAPI) => {
    try {
      const { id, page } = info;
      const resp = await axios(`${API_LINK}/images/search?limit=10&page=${page}&category_ids=${id}`);

      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('something went wrong');
    }
  }
);

const catsSlice = createSlice({
  name: 'cats',
  initialState: {
    catsList: [],
    catsStatus: 'pending',
  },
  reducers: {
    setStatus(state, action) {
      state.catsStatus = action.payload;
    },
    resetState(state) {
      state.catsList = [];
    }
  },
  extraReducers: {
    [gettingCats.pending]: (state) => {
      state.catsStatus = 'pending';
    },
    [gettingCats.fulfilled]: (state, { payload }) => {
      state.catsStatus = 'success';
      state.catsList = payload;
    },
    [gettingCats.rejected]: (state) => state.catsStatus = 'error',
    [gettingMoreCats.fulfilled]: (state, { payload }) => {
      state.catsStatus = 'success';
      state.catsList = [...state.catsList, ...payload];
    },
  }
});

export const catsActions = catsSlice.actions;
export default catsSlice;
