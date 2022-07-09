import React from 'react';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import './styles.scss';

// eslint-disable-next-line react/prop-types
const Main = ({ children }) => {

  return (
    <div className="main-wrapper">
      <Header />
      <Sidebar />
      <div className="component-wrapper">
        {children}
      </div>
    </div>
  );
};

export default Main;
