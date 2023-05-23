/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from 'react';
import {
  Continuer, Title, Span, DivInput, Input, Bth, Body,
} from './accountStyled';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleSignUp = () => {
    console.log('cheek');
    const dataSinUp = {
      email,
      password,
      name,
    };

    fetch('http://localhost:4000/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataSinUp),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <Body>
      <Title>Create Account</Title>
      <p>
        Already have an account?
        <Span to="/login">Login</Span>
      </p>
      <Continuer>
        <DivInput>
          <label htmlFor="name">Name</label>
          <Input
            type="text"
            placeholder="Enter Your FullName"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </DivInput>
        <DivInput>
          <label htmlFor="email">Email</label>
          <Input
            type="email"
            placeholder="Enter Your Email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </DivInput>
        <DivInput>
          <label htmlFor="password">Password</label>
          <Input
            type="password"
            placeholder="Enter Your Password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </DivInput>
        <DivInput>
          <Bth type="submit" onClick={handleSignUp}>Get Started</Bth>
        </DivInput>
      </Continuer>
    </Body>
  );
};

export default SignUp;
