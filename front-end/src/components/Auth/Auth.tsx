import LoginForm from '../Login/LoginForm';
import React, { useState } from 'react';
import RegisterForm from '../Register/RegisterForm';
import { Typography } from '@mui/material';

export default function Auth() {
  const [authState, setAuthState] = useState(false);
  return (
    <>
      {!authState && <LoginForm />}
      {authState && <RegisterForm />}
      <Typography
        variant='body1'
        component={'p'}
        style={{ cursor: 'pointer' }}
        onClick={() => {
          setAuthState((prev) => !prev);
        }}
      >
        {!authState &&
          "I you don't have an account, click here to go to Register."}
        {authState && 'I you have an account, click here to go to Login.'}
      </Typography>
    </>
  );
}
