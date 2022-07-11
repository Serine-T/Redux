import React from 'react';
import Cats from '../components/Cats/Cats';
import Sidebar from '../components/Sidebar/Sidebar';

const CatsContainer = () => (
  <div className="main-wrapper">
    <Sidebar />
    <Cats />
  </div>
);

export default CatsContainer;
