/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import {
  Continuer, Title, Span, DivInput, Input, Bth, Body,
} from './accountStyled';
import image from '../../img/1.png';

const SingIn = () => (
  <Body>
    <Title>Welcome, We missed you  </Title>
    <p>
      Don’t have account?
      <Span to="/singup">Create new account</Span>
    </p>
    <Continuer>
      <div>
        <img src={image} alt="" />
      </div>
      <DivInput>
        <label>Email</label>
        <Input type="email" placeholder="Enter Your Email" />
      </DivInput>
      <DivInput>
        <label>Password</label>
        <Input type="password" placeholder="Enter Your Password" />
      </DivInput>
      <DivInput class="input"><Bth>Login</Bth></DivInput>
    </Continuer>
  </Body>
);

export default SingIn;
