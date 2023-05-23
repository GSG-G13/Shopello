import styled from 'styled-components';

export const CartContainer = styled.div`
display : flex;
flex_direction: column;
margin-top: 20px;
justify_content:centre;
align_items:centre;
width: 375px;
height: 745px;
left: 0px;
top: 67px;
background: #FFFFFF;
border-radius: 20px 20px 0px 0px;
`;

export const CartTitle = styled.h1`
Font family: Gilroy-Bold
Font size: 34px
Line height: 100%
Align: Left
Vertical align: Top
Fill Color Style: MainFont Color
Fill: Solid
#1D1D35
`;

export const CartItem = styled.li`
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

export const CartItemTitle = styled.h3`
left: 30.58%;
right: 29.05%;
top: 23%;
bottom: 58%;
font-family: 'Gilroy-Regular';
font-size: 16px;
line-height: 19px;
color: #1D1D35;
`;

export const CartItemPrice = styled.p`
left: 79.82%;
right: 7.34%;
top: 23%;
bottom: 57%;
font-family: 'Gilroy-Bold';
font-size: 16px;
line-height: 19px;
color: #1D1D35;
`;

export const RemoveButton = styled.button`
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
export const Button = styled.button`
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