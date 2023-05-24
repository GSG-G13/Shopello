/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import Empty from './Empty';

import {
  CartItem,
  CartContainer,
  CartItemPrice,
  CartItemTitle,
  CartTitle,
  RemoveButton,
  Image,
  CartItemCount,
  Button,
  ClearButton,
  GlobalStyle,
} from './Style.css';

function Cart({ userId, productId }) {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetch(`/cart/${userId}`)
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
  const clearCart = () => {
    Swal.fire({
      icon: 'question',
      title: 'Confirmation',
      text: 'Are you sure you want to clear your cart?',
      showCancelButton: true,
      confirmButtonText: 'Remove',
      cancelButtonText: 'Cancel',
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`/clearCart/${userId}`, {
          method: 'DELETE',
        })
          .then((response) => response.json())
          .then((data) => {
            if (data.success) {
              Swal.fire({
                icon: 'success',
                title: 'your cart is now empty',
              });
              fetch(`/cart/${userId}`)
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
                title: 'Failed to clear cart',
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

  const handleRemoveFromCart = () => {
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
        fetch(`/rmCart/${userId}/${productId}`, {
          method: 'DELETE',
        })
          .then((response) => response.json())
          .then((data) => {
            if (data.success) {
              Swal.fire({
                icon: 'success',
                title: 'Item removed from cart',
              });
              fetch(`/cart/${userId}`)
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

  const updateCartItemQuantity = (quantity) => {
    fetch(`/cart/${userId}/${productId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ quantity }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.message);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <CartContainer>
      <GlobalStyle />
      <CartTitle>
        Cart 🛒
      </CartTitle>
      {cartItems.length === 0 ? (
        <Empty />
      ) : (
        <ul>
          {cartItems.map((item) => (
            <CartItem key={item.id}>
              <Image src={item.Image} />
              <CartItemTitle>{item.name}</CartItemTitle>
              <CartItemPrice>
                Price:
                {item.price}
              </CartItemPrice>
              <CartItemCount>
                <Button onClick={() => updateCartItemQuantity(userId, item.id, item.quantity + 1)}>
                  +
                </Button>
                {item.quantity}
                <Button onClick={() => updateCartItemQuantity(userId, item.id, item.quantity - 1)}>
                  -
                </Button>
              </CartItemCount>

              <RemoveButton
                onClick={() => handleRemoveFromCart(item.id)}
              >
                Remove from Cart
              </RemoveButton>
            </CartItem>

          ))}
          <ClearButton onClick={clearCart(userId)}>Remove All</ClearButton>
        </ul>
      )}

    </CartContainer>
  );
}

export default Cart;
