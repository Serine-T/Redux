import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import coursesData from '../../helpers/constants/data';
import { setFilterBy, setCoursesList } from '../../store/slices/coursesSlice.';
import Card from './CourseCard';
import './styles.scss';

const Courses = () => {
  const dispatch = useDispatch();
  const {
    coursesList, flitersList, filterBy } = useSelector((state) => state.courses);

  useEffect(() => {
    dispatch(setCoursesList({
      filterBy,
      list: coursesData,
    }));
  }, [filterBy]);

  return (
    <div className="courses-page-container">
      <div className="courses-page-top">
        <h3 className="page-main-title">Courses</h3>
        <div className="filter-btn-container">
          {flitersList.map((filter) => (
            <button
              key={filter}
              className={`${filterBy === filter ? 'active ' : ''}filter-btn`}
              onClick={() => { dispatch(setFilterBy(filter)); }}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>
      <div>
        {coursesList.map((card) => {
          return (
            <div key={card.id}>
              <Card {...card} />
            </div>
          );
        })}
      </div>
    </div >
  );
};

export default Courses;
