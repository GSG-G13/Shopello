/* eslint-disable react/prop-types */
import React from 'react';
import Swal from 'sweetalert2';
import { Button } from './Style.css';

const AddToCart = ({ userId, productId, quantity }) => {
  const data = {
    userId,
    productId,
    quantity,
  };

  const handleAddToCart = () => {
    fetch('/addCart', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then(() => {
        if (data.success) {
          Swal.fire({
            icon: 'success',
            title: 'Product added to cart',
          });
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Failed to add product to cart',
          });
        }
      })
      .catch((error) => {
        console.error(error);
        Swal.fire({
          icon: 'error',
          title: 'An error occurred',
          text: error.message,
        });
      });
  };

  return (
    <Button onClick={handleAddToCart}>Add to Cart</Button>
  );
};

export default AddToCart;
