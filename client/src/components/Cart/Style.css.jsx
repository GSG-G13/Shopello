import styled from 'styled-components';

export const CartContainer = styled.div`
  background-color: white;

  padding: 16px;
`;

export const CartTitle = styled.h1`
  color: green;
  font-size: 34px;
`;

export const CartItem = styled.li`
  background-color: white;
  border: 1px solid green;
  margin-bottom: 8px;
  padding: 8px;
`;

export const CartItemTitle = styled.h3`
  color: green;
  font-size: 18px;
`;

export const CartItemPrice = styled.p`
  color: green;
  font-size: 14px;
`;

export const RemoveButton = styled.button`
  background-color: green;
  color: white;
  border: none;
  padding: 8px 16px;
  font-size: 14px;
  cursor: pointer;
`;

export const Button = styled.button`
  background-color: green;
  color: white;
  border: none;
  padding: 8px 16px;
  font-size: 14px;
  cursor: pointer;
`;

export const EmptyContainer = styled.div`
  text-align: center;
`;

export const EmptyImage = styled.img`
  width: auto;
  height: auto;
`;
