/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/prop-types */
import React from 'react';
import './style.css';
import CartBtn from '../Cart/CartBtn';

const ProductItem = ({ product }) => {
  const {
    id, name, description, price, image, category,
  } = product;

  return (
    <div className="product-card">
      <img className="product-image" src={image} alt="product-image" />
      <h3 className="product-details">{name}</h3>
      <p>{description}</p>
      <div className="product-details">
        <p>{price}</p>
        <span>
          Category:
          {category}
        </span>
      </div>
      <CartBtn productId={id} />
    </div>
  );
};

export default ProductItem;
