/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from 'react';
import {
  Continuer, Title, Span, DivInput, Input, Bth, Body,
} from './accountStyled';
import image from '../../img/1.png';

const SingIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    console.log('cheek');
    const data = {
      email,
      password,
    };

    fetch('http://localhost:4000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      // eslint-disable-next-line no-shadow
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <Body>
      <Title>Welcome, We missed you</Title>
      <p>
        Don’t have an account?
        <Span to="/signup">Create new account</Span>
      </p>
      <Continuer>
        <div>
          <img src={image} alt="" />
        </div>
        <DivInput>
          <label>Email</label>
          <Input
            type="email"
            placeholder="Enter Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </DivInput>
        <DivInput>
          <label>Password</label>
          <Input
            type="password"
            placeholder="Enter Your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </DivInput>
        <DivInput className="input">
          <Bth onClick={handleSignIn}>Login</Bth>
        </DivInput>
      </Continuer>
    </Body>
  );
};

export default SingIn;
