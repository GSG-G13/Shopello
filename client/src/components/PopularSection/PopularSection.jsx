import React from 'react';
import {
  ListOfPopular,
  WrapPopularSection,
  WrapHeading,
  HeadingText,
  PopularImage,
  Title,
  WrapOfText,
  Price,
  PopularItem,
} from './PopularSection.styles';

const PopularSection = () => (
  <WrapPopularSection>
    <WrapHeading>
      <img
        src="https://gsg-fc03.github.io/shopello/assets/img/populore.svg"
        alt="img"
      />
      <HeadingText>Popular</HeadingText>
    </WrapHeading>

    <ListOfPopular>
      <PopularItem>
        <PopularImage src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" />
        <WrapOfText>
          <div>
            <Title>title</Title>
            <Price>$ 109.95</Price>
          </div>
          <img
            src="https://gsg-fc03.github.io/shopello/assets/img/cart%20with%20plus.svg"
            alt="img"
            style={{ width: '50px' }}
          />
        </WrapOfText>
      </PopularItem>
    </ListOfPopular>
  </WrapPopularSection>
);
export default PopularSection;
