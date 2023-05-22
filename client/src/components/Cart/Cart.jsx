import React, { useEffect, useState } from 'react';

import Empty from './Empty';
import {
  CartItem, CartContainer, CartItemPrice, CartItemTitle, CartTitle,
} from './Style.css';

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetch('/cart')
      .then((response) => response.json())
      .then((data) => setCartItems(data))
      .catch((error) => console.error(error));
  }, []);

  const handleRemoveFromCart = (itemId) => {
    fetch(`/cart/${itemId}`, {
      method: 'DELETE',
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          console.log('Item removed from cart');
          fetch('/cart')
            .then((response) => response.json())
            .then(() => setCartItems(data))
            .catch((error) => console.error(error));
        } else {
          console.error('Failed to remove item from cart');
        }
      })
      .catch((error) => console.error(error));
  };

  return (
    <CartContainer>
      <CartTitle>Cart</CartTitle>
      {cartItems.length === 0 ? (
        <Empty />
      ) : (
        <ul>
          {cartItems.map((item) => (
            <CartItem key={item.id}>
              <CartItemTitle>{item.name}</CartItemTitle>
              <CartItemPrice>
                Price:
                {item.price}
              </CartItemPrice>
              <RemoveButton onClick={() => handleRemoveFromCart(item.id)}>Remove from Cart</RemoveButton>
            </CartItem>
          ))}
        </ul>
      )}
    </CartContainer>
  );
}

export default Cart;
