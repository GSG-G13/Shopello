import React from 'react';
import { Button } from './Style.css';

function AddToCart({ itemId }) {
  const handleAddToCart = () => {
    fetch(`/addToCart/${itemId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ itemId }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          console.log('Product added to cart');
        } else {
          console.error('Failed to add product to cart');
        }
      })
      .catch((error) => console.error(error));
  };

  return (
    <Button onClick={handleAddToCart}>Add to Cart</Button>
  );
}

export default AddToCart;
