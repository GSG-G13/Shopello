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

const PopularSection = (props) => {
  const { products } = props || [];
  return (
    <WrapPopularSection>
      <WrapHeading>
        <img
          src="https://gsg-fc03.github.io/shopello/assets/img/populore.svg"
          alt="img"
        />
        <HeadingText>Popular</HeadingText>
      </WrapHeading>

      <ListOfPopular>
        {products?.map((product) => (
          <PopularItem key={product.id}>
            <PopularImage src={product.image} />
            <WrapOfText>
              <div>
                <Title>{product.name}</Title>
                <Price>{product.price}</Price>
              </div>
              <img
                src="https://gsg-fc03.github.io/shopello/assets/img/cart%20with%20plus.svg"
                alt="img"
                style={{ width: '50px' }}
              />
            </WrapOfText>
          </PopularItem>
        ))}
      </ListOfPopular>
    </WrapPopularSection>
  );
};

export default PopularSection;
