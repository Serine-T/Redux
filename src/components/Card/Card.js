/* eslint-disable react/prop-types */
import React from 'react';
import './styles.scss';

const Card = ({  description, title, price}) => {
  return (
    <div className="card-container">
      <h6>{description}</h6>
      <p>{title}</p>
      <p>{price} $</p>
    </div>
  );
};

export default Card;
