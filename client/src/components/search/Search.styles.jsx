import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 90%;
  max-width: 500px;
  margin: 1rem auto;
  background-color: #F8F8F8;
  border-radius: 99998px;
  overflow: hidden;
  height: 40px;
  position: relative;
  line-height: 40px;
`;

export const Icon = styled.div`
  position: absolute;
  top: 20%;
  left: 5%;
  transform: translate(-50%, 0);
`;

export const Input = styled.input`
  border: none;
  outline: none;
  background-color: transparent;
  width: 100%;
  height: 100%;
  padding-left: 9%;
`;
