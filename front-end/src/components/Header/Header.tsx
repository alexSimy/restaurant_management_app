import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import { logoutAction } from '../../store/login/login-actions';
import { useDispatch } from 'react-redux';
import { UnknownAction } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

export default function Header() {
  const authToken = useSelector((state: RootState) => state.login.token);

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutAction() as unknown as UnknownAction);
  };

  return (
    <header
      style={{
        position: 'sticky',
        top: '0',
        boxShadow: '#000000ab 0px 1px 20px 0px',
      }}
    >
      <Box
        style={{
          backgroundColor: '#212140DD',
          padding: '1rem',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <Typography variant='h3' component='h1'>
          <span style={{ color: '#e6ac27' }}>Client</span>
          <span style={{ color: '#fff' }}>App</span>
        </Typography>
        {authToken && (
          <Button variant='text' color='warning' onClick={handleLogout}>
            <b>Logout</b>
          </Button>
        )}
      </Box>
    </header>
  );
}
