/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import {
  Continuer, Title, Span, DivInput, Input, Bth, Body,
} from './accountStyled';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleSignUp = () => {
    const dataSinUp = {
      email,
      password,
      username: name,
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
        if (data.success) {
          Swal.fire({
            icon: 'success',
            text: 'Sign up successful!',
          });
          navigate('/login');
        } else {
          Swal.fire({
            icon: 'error',
            text: 'Sign up failed. Please try again.',
          });
        }
      })
      .catch((error) => {
        Swal.fire({
          icon: 'error',
          text: 'An error occurred while signing up. Please try again later.',
        });
        console.error(error);
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
            id="Username"
            name="Username"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            min="5"
            max="20"
            typeof="text"
          />
        </DivInput>
        <DivInput>
          <label htmlFor="email">Email</label>
          <Input
            type="email"
            placeholder="Enter Your Email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            typeof="email"
          />
        </DivInput>
        <DivInput>
          <label htmlFor="password">Password</label>
          <Input
            type="password"
            placeholder="Enter Your Password"
            id="password"
            value={password}
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            required
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
