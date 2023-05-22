import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Empty from './Empty';

const CartContainer = styled.div`
  margin-top: 20px;
  position: absolute;
width: 375px;
height: 745px;
left: 0px;
top: 67px;
background: #FFFFFF;
border-radius: 20px 20px 0px 0px;
`;

const CartTitle = styled.h1`
  font-size: 24px;
  margin-bottom: 10px;
`;

const CartItem = styled.li`
position: absolute;
left: 0%;
right: 0%;
top: 0%;
bottom: 0%;
background: #FFFFFF;
box-shadow: 0px 8px 24px rgba(128, 128, 128, 0.15);
border-radius: 20px; 
margin-bottom: 10px;
`;

const CartItemTitle = styled.h3`
left: 30.58%;
right: 29.05%;
top: 23%;
bottom: 58%;
font-family: 'Gilroy-Regular';
font-size: 16px;
line-height: 19px;
color: #1D1D35;
`;

const CartItemPrice = styled.p`

left: 79.82%;
right: 7.34%;
top: 23%;
bottom: 57%;
font-family: 'Gilroy-Bold';
font-size: 16px;
line-height: 19px;
color: #1D1D35;
`;

const RemoveButton = styled.button`
left: 81.35%;
right: 7.34%;
top: 69%;
bottom: 19%;
font-family: 'Gilroy-Regular';
font-size: 10px;
line-height: 12px;
text-decoration-line: underline;
color: #FA6161;
`;

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
