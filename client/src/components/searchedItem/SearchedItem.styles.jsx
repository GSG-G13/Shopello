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
  padding: 0 1rem;
`;

export const ProductImg = styled.div`
  min-width: 80px;
  width: 80px;
  min-height: 80px;
  height: 80px;
  border-radius: 20px;
  overflow: hidden;
  margin-right: 0.5rem;

  img{
    min-width: 100%;
    width: 100%;
    min-height: 100%;
    height: 100%;
    border-radius: 20px;
  }
`;

export const ProductInfo = styled.div`
  height: 80px;
  padding: 0.5rem 0;

  p{
    height: 1.2rem;
    overflow: hidden;
    display: -webkit-box;
    --webkit-box-orient: vertical;
    --webkit-line-clamp: 1;
    margin-bottom: 0.7rem;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    line-height: 19px;
  }
  h3{
    margin: 0;
    font-size: 17px;
    font-family: 'Roboto', sans-serif;
  }
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
