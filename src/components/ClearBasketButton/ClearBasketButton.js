import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Box from '@mui/material/Box';

export default function ClearBasketButton({onClick = () => {}, children }) {

    return (
    <Stack direction="row" spacing={2}>
      <Button size="small" onClick={onClick} variant="text" aria-label="add to shopping cart" color="error">
      Очистить
      </Button> 
    </Stack>
  );
}