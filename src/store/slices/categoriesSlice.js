import { createSlice } from '@reduxjs/toolkit';

const cardsSlice = createSlice({
  name: 'cards',
  initialState: {
    cardsList: [],
  },
  reducers: {
    gettingCategories(state, action) {
      state.categoriesList = [...action.payload];
    },
    setStatus(state, action) {
      state.categoriesStatus = action.payload;
    },
  },
});

export const cardsActions = cardsSlice.actions;
export default cardsSlice;
