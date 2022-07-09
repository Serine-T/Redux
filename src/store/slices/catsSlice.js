import { createSlice } from '@reduxjs/toolkit';
import cardsItems from '../../helpers/constants/data';

const catsSlice = createSlice({
  name: 'cats',
  initialState: {
    catsList: cardsItems,
    catsMoreList: [],
    catsStatus: 'pending',
  },
  reducers: {
    gettingCatsList(state, action) {
      state.catsList = [...action.payload];
    },
    gettingMoreCats(state, action) {
      state.catsList = [...state.catsList, ...action.payload];
    },
    setStatus(state, action) {
      state.catsStatus = action.payload;
    },
  },
});

export const catsActions = catsSlice.actions;
export default catsSlice;
