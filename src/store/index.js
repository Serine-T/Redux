import { configureStore } from '@reduxjs/toolkit';
import cardsSlice from './slices/categoriesSlice';
import catsSlice from './slices/catsSlice';
import routesSlice from './slices/routesSlice';

const store = configureStore({
  reducer: {
    categories: cardsSlice.reducer,
    cats: catsSlice.reducer,
    routes: routesSlice.reducer,
  },
});

export default store;
