import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=Poppins&display=swap');

`;
export const CartContainer = styled.div`
display:flex;
gap: 300px;
align-items:centre;
`;

export const CartTitle = styled.h1`
justify-content:center;
gap:10px;
font-size:32px;
font-weight: bold;
color: #000;
padding: 10px 20px;
border-radius: 4px;
letter-spacing: 2px;
font-family: 'Poppins', sans-serif;
    `;

export const CartItem = styled.li`
display: flex;
flex-direction: column;
align-items: center;
width: 500px;
padding: 20px;
background-color: #f2f2f2;
border-radius: 8px;
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

export const CartItemTitle = styled.h3`
  color: green;
  font-size: 18px;
`;

export const CartItemPrice = styled.p`
text-align: center;
font-size: 20px;
font-weight: bold;
margin-bottom: 5px;
`;

export const CartItemCount = styled.p`
text-align: center;
font-size: 20px;
font-weight: bold;
margin-bottom: 5px;
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
display:relative;
  background-color: #D0F0C0;
  height:25px;
  color: white;
  border: none;
  font-size: 14px;
  cursor: pointer;
  border-radius: 50px;
`;

export const EmptyContainer = styled.div`
  text-align: center;
  position:absolute;
  margin-top: 10%;

`;

export const EmptyImage = styled.img`
  width: auto;
  height: auto;
`;

export const Image = styled.img`
width: 400px;
height: 300px;
margin-bottom: 10px;
border-radius: 8px;

@media(min-width: 768px) {
    height: 400px;
  }
`;
export const ClearButton = styled.button`
 font-family: 'Poppins', sans-serif;
  height:25px;
  color: red;
  font-size: 16px;
  cursor: pointer;
  border:none;
  background-color: transparent;
`;
