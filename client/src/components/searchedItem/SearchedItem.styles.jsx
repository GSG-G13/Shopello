import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 85%;
  max-width: 400px;
  margin: 1rem auto;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0px 8px 24px rgba(128, 128, 128, 0.15);
  height: 100px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const ProductImg = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 20px;
  overflow: hidden;

  img{
    width: 80px;
    height: 80px;
    border-radius: 20px;
    object-fit: cover;
  }
`;

export const ProductInfo = styled.div`
  height: 80px;
  padding: 0.5rem 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const CartIcon = styled.div`
  margin-left: auto;
  background: #F2FCF5;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
