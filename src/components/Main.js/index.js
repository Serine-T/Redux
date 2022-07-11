import React, { useEffect } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import { useDispatch } from 'react-redux';
import routeItems from '../../helpers/constants/routeItems';
import { setRoute } from '../../store/slices/routesSlice';
import Header from '../Header';
import Sidebar from '../Sidebar';
import './styles.scss';

// eslint-disable-next-line react/prop-types
const Main = ({ children, isStandardContainer }) => {
  const dispatch = useDispatch();
  const path = window.location.pathname;

  const currentRouteInfo = routeItems.find((route) => route.path === path);

  useEffect(() => {
    if (currentRouteInfo) {
      dispatch(setRoute({
        key: currentRouteInfo.key,
        title: currentRouteInfo.title,
      }));
    }
  }, []);

  return (
    <Scrollbars
      thumbSize={50}
      style={{ width: '100%', height: '100vh' }}
    >
      <div className="main-wrapper">
        <Header />
        <Sidebar />
        <div className="component-wrapper">
          {isStandardContainer && <h3 className="page-main-title">{currentRouteInfo.title}</h3>}
          {children}
        </div>
      </div>
    </Scrollbars >
  );
};

export default Main;
