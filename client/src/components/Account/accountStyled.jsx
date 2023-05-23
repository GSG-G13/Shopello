import styled from 'styled-components';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Link } from 'react-router-dom';

export const Continuer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 20px;
  align-items: center;
  margin-top: 10px;
`;
export const Title = styled.h1`
 text-align: center;
`;
export const Span = styled(Link)`
 color: #2CB674;
 text-decoration: none;
`;
export const DivInput = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 13rem;
  align-items: flex-start;
  gap: 5px;
`;

export const Input = styled.input`
  border: 0;
  outline: 0;
  background-color: #F8F8F8;
  width: 300px;
  height: 50px;
  border-radius: 12px;
`;
export const Bth = styled.button`
  background: #2CB674;
  border-radius: 50px;
  width: 250px;
  height: 50px;
  border: #2CB674;
  color: #FFFFFF;
`;
export const Body = styled.div`
  width: 400px;
  margin:  0 auto;
  margin-top: 15px;
  text-align: center;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-content: space-around;
  justify-content: space-around;
  align-items: stretch;
`;
