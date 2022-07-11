import { createSlice } from '@reduxjs/toolkit';

const routesSlice = createSlice({
  name: 'routes',
  initialState: {
    currentRoute: {
      key: '',
      title: '',
    }
  },
  reducers: {
    setRoute(state, { payload }) {
      state.currentRoute = payload;
    },
  },
});

export const { setRoute } = routesSlice.actions;
export default routesSlice;
