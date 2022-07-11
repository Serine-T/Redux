import { createSlice } from '@reduxjs/toolkit';

const routesSlice = createSlice({
  name: 'route',
  initialState: {
    currentRoute: '/',
  },
  reducers: {
    setRoute(state, action) {
      state.currentRoute = action.payload;
    },
  },
});

export const routesActions = routesSlice.actions;
export default routesSlice;
