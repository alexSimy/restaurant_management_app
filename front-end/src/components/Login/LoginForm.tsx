import {
  Button,
  Container,
  Stack,
  TextField,
  ThemeProvider,
  Typography,
  createTheme,
} from '@mui/material';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginAction } from '../../store/login/login-actions';
import { UnknownAction } from '@reduxjs/toolkit';

const formTheme = createTheme({
  palette: {
    primary: {
      main: '#fff',
    },
  },
  typography: {
    allVariants: {
      color: 'white',
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'rgb(255 255 255)',
            },
            '&:hover fieldset': {
              borderColor: 'rgb(255 255 255 / 23%)',
            },
            '&.Mui-focused fieldset': {
              borderColor: 'rgb(255 255 255)',
            },
          },
        },
      },
    },

    MuiInputBase: {
      styleOverrides: {
        input: {
          color: 'white',
        },
      },
    },
  },
});

export default function LoginForm() {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const dispatch = useDispatch();
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    dispatch(loginAction(username, password) as unknown as UnknownAction);
  };

  return (
    <Container maxWidth='sm' style={{ padding: '6rem' }}>
      <Typography mb={4} variant='h3' component={'h2'}>
        Login
      </Typography>
      <form autoComplete='off' onSubmit={handleSubmit}>
        <Stack direction={'column'} spacing={4} justifyContent='center'>
          <ThemeProvider theme={formTheme}>
            <TextField
              label='username'
              variant='outlined'
              type='text'
              name='username'
              placeholder='username'
              helperText='Please enter your username'
              color='primary'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
              label='password'
              variant='outlined'
              type='password'
              name='password'
              placeholder='password'
              helperText='Please enter your password'
              color='primary'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button type='submit' variant='contained' color='secondary'>
              Login
            </Button>
          </ThemeProvider>
        </Stack>
      </form>
    </Container>
  );
}
