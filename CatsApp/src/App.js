import React from 'react';
import { useDispatch } from 'react-redux';
import './App.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/HomeContainer';
import CatsContainer from './pages/CatsContainer';
import { useEffect } from 'react';
// import { gettingCategories } from './store/actions/categoriesActions';
import { gettingCategories } from './store/slices/categoriesSlice';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(gettingCategories());
  }, [dispatch]);

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/category/:id" element={<CatsContainer />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
