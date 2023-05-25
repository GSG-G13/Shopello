/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import {
  Continuer, Title, Span, DivInput, Input, Bth, Body,
} from './accountStyled';
import image from '../../img/1.png';

const SingIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignIn = () => {
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
      .then(() => {
        if (data.success) {
          Swal.fire({
            icon: 'success',
            text: 'Login successful!',
          });
          navigate('/');
        } else {
          Swal.fire({
            icon: 'error',
            text: 'Login failed. Please check your credentials.',
          });
        }
      })
      .catch((error) => {
        Swal.fire({
          icon: 'error',
          text: 'An error occurred while logging in. Please try again later.',
        });
        console.error(error);
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
