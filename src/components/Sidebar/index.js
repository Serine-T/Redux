import React from 'react';
import './styles.scss';
import routeItems from '../../helpers/constants/routeItems';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Sidebar = () => {
  const isCurrentRoute = useSelector(state => state.routes?.currentRoute);

  return (
    <div className="sidebar-wrapper">
      <ul className="sidebar-list-container">
        {
          routeItems.map((item) => {
            return (
              <li key={item.key} className={`${isCurrentRoute.key === item.key ? 'active-page' : ''}`}>
                <Link to={item.path}>
                  <div className="sidebar-icon">{item.icon()}</div>
                </Link>
              </li>
            );
          })
        }
      </ul >
    </div >
  );
};

export default Sidebar;
