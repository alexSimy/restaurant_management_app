import { CloseSharp } from '@mui/icons-material';
import {
  Box,
  Button,
  Container,
  Fab,
  Modal,
  Stack,
  TextField,
  ThemeProvider,
  Typography,
  createTheme,
} from '@mui/material';
import React, { useState } from 'react';
import { InsertRestaurantObj, Restaurant } from '../../types/Restaurant';
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
type AddRestaurantProp = {
  openModal: boolean;
  onModalClose: () => void;
  onSubmit: (restaurant: InsertRestaurantObj) => void;
};
export default function AddRestaurant({
  openModal,
  onModalClose,
  onSubmit,
}: AddRestaurantProp) {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const handleSumit = () => {
    onSubmit({
      name: name,
      address: address,
      phone: phone,
      email: email,
    });
  };

  return (
    <Modal
      open={openModal}
      onClose={onModalClose}
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Container
        component={'section'}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '0 !important',
        }}
        maxWidth={'sm'}
      >
        <Box
          bgcolor={'rgba(29, 35, 39, 1)'}
          sx={{
            padding: '4rem 2rem',
            borderRadius: '1rem',
            position: 'relative',
            width: '100%',
          }}
        >
          <Fab
            id='closeButton'
            size='small'
            color='default'
            onClick={onModalClose}
            sx={{ position: 'absolute', right: '1rem', top: '1rem' }}
          >
            <CloseSharp />
          </Fab>
          <Stack spacing={4}>
            <Typography color={'#fff'} component={'h3'} variant='h4'>
              Add new restaurant
            </Typography>
            <form onSubmit={handleSumit}>
              <Stack spacing={4}>
                <ThemeProvider theme={formTheme}>
                  <TextField
                    label='name'
                    variant='outlined'
                    type='text'
                    name='name'
                    placeholder='name'
                    helperText='Please enter your name'
                    color='primary'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <TextField
                    label='address'
                    variant='outlined'
                    type='text'
                    name='address'
                    placeholder='address'
                    helperText='Please enter your address'
                    color='primary'
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                  <TextField
                    label='phone'
                    variant='outlined'
                    type='text'
                    name='phone'
                    placeholder='phone'
                    helperText='Please enter your phone'
                    color='primary'
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                  <TextField
                    label='email'
                    variant='outlined'
                    type='text'
                    name='email'
                    placeholder='email'
                    helperText='Please enter your email'
                    color='primary'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <Button type='submit' variant='contained' color='secondary'>
                    Insert
                  </Button>
                </ThemeProvider>
              </Stack>
            </form>
          </Stack>
        </Box>
      </Container>
    </Modal>
  );
}
