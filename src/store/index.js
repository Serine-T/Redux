import { configureStore } from '@reduxjs/toolkit';
import coursesSlice from './slices/coursesSlice.';
import routesSlice from './slices/routesSlice';

const store = configureStore({
  reducer: {
    routes: routesSlice.reducer,
    courses: coursesSlice.reducer
  },
});

export default store;
