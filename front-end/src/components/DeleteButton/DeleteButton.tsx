import { Button } from '@mui/material';
import React from 'react';

type DeleteButtonProps = {
  id: number;
};

export default function DeleteButton({ id }: DeleteButtonProps) {
  return (
    <Button size='small' color='primary'>
      Remove
    </Button>
  );
}
