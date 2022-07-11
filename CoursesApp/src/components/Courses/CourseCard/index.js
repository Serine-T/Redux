/* eslint-disable react/prop-types */
import React from 'react';
import './styles.scss';

const Card = ({ name, bgColor, quantity, views }) => {
  return (
    <div className="card-container" style={{ background: `${bgColor}` }}>
      <div className="card-content">
        <h5 className="card-title">{name}</h5>
        <h6 className="lesson-quantity">{quantity} lessons</h6>
      </div>
      <div>        
        <p className="card-view">{views} views</p>
      </div>
    </div>
  );
};

export default Card;
