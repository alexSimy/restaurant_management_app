import { Box, Container } from '@mui/material';
import React from 'react';

type NotificationProps = {
  status: string;
  message: string;
};

export default function Notification({ status, message }: NotificationProps) {
  const color =
    status === 'error'
      ? 'linear-gradient(109.6deg, rgb(162, 2, 63) 11.2%, rgb(231, 62, 68) 53.6%, rgb(255, 129, 79) 91.1%);'
      : 'radial-gradient(circle at 10% 20%, rgb(166, 226, 229) 0%, rgb(198, 232, 221) 100.2%);';
  return (
    <Container style={{ position: 'sticky', top: '20%' }} maxWidth='sm'>
      <Box
        sx={{
          width: '100%',
          background: `${color}`,
          padding: '1rem',
          borderRadius: '1rem',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        {message}
      </Box>
    </Container>
  );
}
