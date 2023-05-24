/* eslint-disable max-len */
/* eslint-disable react/button-has-type */
import React from 'react';
import {
  Wrapper, Img, Bth, Price, Detail, Icon, Count,
} from './DetailsStyled';

const Details = () => (
  <>
    <i className="ri-corner-up-left-line" />
    <Wrapper>
      <Img src="https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg" alt="" />
      <div>
        <span>Electronic</span>
        <br />
        <h4>Lorem ipsum dolor sit amet consectetur.</h4>
        <Price>$999.00</Price>
        <h5>About this product</h5>
        <Detail>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis assumenda voluptatem tempore dolor quod. Expedita, id, minus similique dolor sed adipisci aliquam natus amet doloremque delectus cupiditate? Sint, quasi, ad necessitatibus omnis quaerat tenetur corporis porro aut, natus ex ab id vel odit veniam fugiat temporibus aperiam quia rem minima!</Detail>
        <Count>
          <Icon>-</Icon>
          <span>5</span>
          <Icon>+</Icon>
        </Count>
        <Bth>Add to Cart</Bth>
      </div>
    </Wrapper>
  </>
);

export default Details;
