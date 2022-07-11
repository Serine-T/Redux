import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import routeItems from './helpers/constants/routeItems';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate replace to="/courses" />} />
          
          {
            routeItems.map((route) => {
              return (
                <Route
                  key={route.key}
                  path={route.path}
                  element={route.component}
                />
              );
            })
          }
        </Routes>
      </Router>
    </div>
  );
}

export default App;
