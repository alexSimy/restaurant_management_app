import { Button } from '@mui/material';
import React from 'react';

type DeleteButtonProps = {
  id: number;
  handleClick: (id: number) => void;
};

export default function DeleteButton({ id, handleClick }: DeleteButtonProps) {
  return (
    <Button
      size='small'
      color='primary'
      onClick={() => {
        handleClick(id);
      }}
    >
      Remove
    </Button>
  );
}
