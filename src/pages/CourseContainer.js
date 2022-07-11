import React from 'react';
import Courses from '../components/Courses';
import Main from '../components/Main.js';

const CourseContainer = () => (
  <Main isStandardContainer={false}>
    <Courses />
  </Main>
);

export default CourseContainer;
