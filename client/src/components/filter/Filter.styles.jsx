import styled from 'styled-components';

export const WrapTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 1rem 0;
`;

export const Tag = styled.div`
  background-color: #F8F8F8;
  border-radius: 99998px;

  padding: 0.5rem 1rem;
  margin: 0.5rem;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #E8E8E8;
  }
`;

export const wrapFilter = styled.div`
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
