import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  padding: 8px 16px;
  border: none;
  background: #2CB674;
  border-radius: 50px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  color: #fff;

  &:hover {
    background-color: #ccc;
  }
`;

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
