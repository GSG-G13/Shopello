import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import Empty from './Empty';

import {
  CartItem, CartContainer, CartItemPrice, CartItemTitle, CartTitle, RemoveButton,
} from './Style.css';

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetch('/cart')
      .then((response) => response.json())
      .then((data) => setCartItems(data))
      .catch((error) => {
        Swal.fire({
          icon: 'error',
          title: 'An error occurred',
          text: error.message,
        });
      });
  }, []);

  const handleRemoveFromCart = (itemId) => {
    Swal.fire({
      icon: 'question',
      title: 'Confirmation',
      text: 'Are you sure you want to remove this item from the cart?',
      showCancelButton: true,
      confirmButtonText: 'Remove',
      cancelButtonText: 'Cancel',
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`/cart/${itemId}`, {
          method: 'DELETE',
        })
          .then((response) => response.json())
          .then((data) => {
            if (data.success) {
              Swal.fire({
                icon: 'success',
                title: 'Item removed from cart',
              });
              fetch('/cart')
                .then((response) => response.json())
                .then(() => setCartItems(data))
                .catch((error) => {
                  console.error(error);
                  Swal.fire({
                    icon: 'error',
                    title: 'An error occurred',
                    text: error.message,
                  });
                });
            } else {
              Swal.fire({
                icon: 'error',
                title: 'Failed to remove item from cart',
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
      }
    });
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
              <RemoveButton
                onClick={() => handleRemoveFromCart(item.id)}
              >
                Remove from Cart
              </RemoveButton>
            </CartItem>
          ))}
        </ul>
      )}
    </CartContainer>
  );
}

export default Cart;
