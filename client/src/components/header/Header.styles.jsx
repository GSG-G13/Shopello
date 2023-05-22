import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  height: fit-content;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled(Link)`
  width: 100px;
  cursor: pointer;
  text-decoration: none;

  svg{
    width: 100px;
  }
`;

export const RightSide = styled.div`
  display: flex;
  align-items: center;
  gap: 0.7rem;

  svg{
    cursor: pointer;
  }
`;

export const CartIcon = styled.div`
  position: relative;
`;

export const Icon = styled.div``;

export const CartCount = styled.span`
  width: 17px;
  height: 17px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 12px;
  background: #2CB674;
  position: absolute;
  left: 50%;
  bottom: 50%;
  font-weight: bold;
`;

export const SignupBtn = styled.a`
  font-size: 1rem;
  color: #000;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  font-weight: 500;
  text-decoration: none;
`;
