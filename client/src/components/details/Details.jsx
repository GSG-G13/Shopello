/* eslint-disable react/button-has-type */
import React from 'react';
import {
  Wrapper, Bth, Img, NamePrice,
} from './DetailsStyled';

const Details = () => (
  <Wrapper>
    <Img src="https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg" alt="" />
    <NamePrice>
      <span className="name">Electronic</span>
      <span className="price">$55</span>
    </NamePrice>
    <h4>Lorem ipsum dolor sit amet consectetur.</h4>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero non earum quia!</p>
    <div>
      <span>
        Total:
        <span>$110</span>
      </span>
    </div>
    <div className="button-group">
      <Bth>Add to Cart</Bth>
    </div>
  </Wrapper>
);

export default Details;
