/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import Swal from 'sweetalert2';
import { Button } from './Style.css';

function AddToCart({ userId, productId }) {
  const handleAddToCart = () => {
    fetch(`/addCart/${userId}/${productId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ productId }),

      quantity: 1,

    })
      .then((response) => response.json())
      .then((data) => {
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
}

AddToCart.propTypes = {
  productId: PropTypes.number.isRequired,
};

export default AddToCart;
