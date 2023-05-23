import styled from 'styled-components';

export const WrapTags = styled.div`
  margin-top: 15px;
  height: 50px;
  padding-left: 24px;

  @media only screen and (min-width: 650px) {
    display: flex;
    justify-content: space-around;
    width: 100%;
  }
`;

export const Tags = styled.ul`
  display: flex;
  overflow-x: auto;
  position: relative;
  cursor: pointer;
  
  @media only screen and (min-width: 650px) {
    margin-top: 15px;
    height: 50px;
  }
  &.active {
    cursor: grab;
  }
`;

export const TagsListItem = styled.li`
  margin-right: 15px;
  height: 50px;
  display: flex;
  align-items: center;
  text-align: center;
  padding: 0px 20px;
  border-radius: 20px;

  &:nth-last-of-type(4) {
    background-color: #fff6ed;
  }

  &:nth-last-of-type(3) {
    background-color: #edf7ff;
  }

  &:nth-last-of-type(2) {
    background-color: #fffbe1;
  }

  &:nth-last-of-type(1) {
    background-color: #ece9f6;
  }

  &:hover {
    background-color: #fff;
    border: solid 1px #e8e8e8;
    font-family: "Gilroy-Bold";
  }
`;

// const Tag = styled.div`
//   background-color: #F8F8F8;
//   border-radius: 99998px;

//   padding: 0.5rem 1rem;
//   margin: 0.5rem;
//   cursor: pointer;
//   transition: all 0.3s ease-in-out;

//   &:hover {
//     background-color: #E8E8E8;
//   }
// `;

// export const wrapFilter = styled.div`
//   width: 90%;
//   max-width: 500px;
//   margin: 1rem auto;
//   background-color: #F8F8F8;
//   border-radius: 99998px;
//   overflow: hidden;
//   height: 40px;
//   position: relative;
//   line-height: 40px;
// `;
