/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import {
  Continuer, Title, Span, DivInput, Input, Bth, Body,
} from './accountStyled';

const SingUp = () => (
  <Body>
    <Title>Create Account</Title>
    <p>
      Already have an account?
      <Span to="/sining">Login</Span>
    </p>
    <Continuer>
      <DivInput>
        <label>Name</label>
        <Input type="text" placeholder="Enter Your FullName" id="Name" />
      </DivInput>
      <DivInput>
        <label htmlFor="email">Email</label>
        <Input type="email" placeholder="Enter Your Email" id="email" />
      </DivInput>
      <DivInput>
        <label htmlFor="password">Password</label>
        <Input type="password" placeholder="Enter Your Password" id="password" />
      </DivInput>
      <DivInput>
        <Bth type="submit">Get Started</Bth>
      </DivInput>
    </Continuer>
  </Body>
);

export default SingUp;
