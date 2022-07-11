import { createSlice } from '@reduxjs/toolkit';

const coursesSlice = createSlice({
  name: 'course',
  initialState: {
    coursesList: [],
    flitersList: ['all', 'popular', 'favorite', 'new'],
    filterBy: 'all'
  },
  reducers: {
    setFilterBy(state, { payload }) {
      state.filterBy = payload;
    },
    setCoursesList(state, { payload }) {
      if (payload.filterBy === 'popular') {
        const popularCoursesList = [...payload.list]?.filter((course) => course.views > 1206);
        state.coursesList = popularCoursesList;
      } else if (payload.filterBy === 'favorite') {
        const favoriteCoursesList = payload.list?.filter(course => course.isFavorite);
        state.coursesList = favoriteCoursesList;
      } else if (payload.filterBy === 'new') {
        const newCoursesList = payload.list?.filter(course => course.isNew);
        state.coursesList = newCoursesList;
      } else {
        state.coursesList = payload.list;
      }
    }
  }
});

export const { setFilterBy, setCoursesList } = coursesSlice.actions;
export default coursesSlice;
