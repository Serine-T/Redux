import { configureStore } from '@reduxjs/toolkit';
import categoriesSlice from './slices/categoriesSlice';
import catsSlice from './slices/catsSlice';
import routesSlice from './slices/routesSlice';

const store = configureStore({
  reducer: {
    categories: categoriesSlice.reducer,
    cats: catsSlice.reducer,
    routes: routesSlice.reducer,
  },
});

export default store;
