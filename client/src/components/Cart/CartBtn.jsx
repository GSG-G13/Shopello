/* eslint-disable react/prop-types */
import React from 'react';
import Swal from 'sweetalert2';
import { Button } from './Style.css';

const AddToCart = ({ productId }) => {
  const data = {
    productId,
    quantity: 1,
  };

  const handleAddToCart = () => {
    fetch('http://localhost:4000/addCart', { // Remove the extra forward slash
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((responseData) => { // Access the response data
        if (responseData.success) { // Use responseData instead of data
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
        });
      });
  };

  return (
    <Button onClick={handleAddToCart}>Add to Cart</Button>
  );
};

export default AddToCart;
