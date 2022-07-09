import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/HomeContainer';
import routeItems from './helpers/constants/routeItems';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} exact />
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
