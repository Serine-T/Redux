import React from 'react';
import cardsItems from '../../helpers/constants/data';
import Card from '../Card/Card';
import './styles.scss';

const Courses = () => {
  return (
    <div className="courses-page-container">
      <div className="courses-page-top">
        <h3 className="page-title">Courses</h3>
        <div className="filter-btn-container">
          <button className="filter-btn active">Popular</button>
          <button className="filter-btn">Favorite</button>
          <button className="filter-btn">New</button>
        </div>
      </div>
      <div>
        {cardsItems.map((card) => {
          return (
            <div key={card.id}>
              <Card {...card} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Courses;
