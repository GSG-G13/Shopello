import styled from 'styled-components';

export const WrapPopularSection = styled.section`
  margin-top: 20px;
  font-family: "Arial"
`;

export const WrapHeading = styled.div`
  display: flex;
  padding-left: 24px;
`;

export const HeadingText = styled.h2`
  font-size: 20px;
  margin-left: 5px;
`;

export const ListOfPopular = styled.ul`
  display: grid;
  grid-template-columns: repeat(10, 300px);
  grid-gap: 16px;
  overflow-x: auto;
  width: 100%;
  padding-top: 15px;
  padding-bottom: 25px;
  padding-left: 24px;
`;

export const PopularItem = styled.li`
  padding: 15px;
  width: 300px;
  height: 345px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
  box-shadow: 0px 8px 24px rgba(128, 128, 128, 0.15);
`;

export const PopularImage = styled.img`
  width: 100%;
  min-height: 240px;
  border-radius: 20px;
  background-color: #fff;
  object-fit: contain;
`;

export const WrapOfText = styled.div`
  width: 100%;
  height: 100%;
  padding: 16px 5px;
  padding-bottom: 0px;
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.h3`
  margin-bottom: 10px;
  font-size: 18px;
`;

export const Price = styled.span`
  font-size: 18px;
`;
