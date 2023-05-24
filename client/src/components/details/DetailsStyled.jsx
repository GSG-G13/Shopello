import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const Wrapper = styled.div`
  width: 90%;
  margin: 80px auto;
  padding: 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-family: 'Roboto', sans-serif;
  justify-content: flex-start;
  gap: 15px;

`;
export const Bth = styled.button`
  background: #2CB674;
  border-radius: 50px;
  width: 250px;
  height: 50px;
  border: #2CB674;
  color: #FFFFFF;
  margin-top: 5px;
`;
export const Price = styled.span`
  font-weight: 600;
`;
export const Detail = styled.span`
  color: #818181;
`;
export const Icon = styled.span`
  background-color: #F7F7F7;
  padding: 5px;
  border-radius: 50%;
`;
export const Count = styled.div`
  display: flex;
  gap: 6px;
  align-items: center;
  width: 12px;
  text-align: center;
`;
export const Img = styled.img`
  /* width: 90%;
  border-radius: 15px;
  margin: 0 auto; */
`;
export const NamePrice = styled.div`
  display: flex;
  gap: 10rem;
  margin-top: 1rem;
`;
