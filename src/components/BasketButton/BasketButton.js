import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Box from '@mui/material/Box';

export default function IconLabelButtons() {

    return (
    <Stack direction="row" spacing={2}>
      <Button color="error" variant="outline" size="large" aria-label="add to shopping cart" endIcon={<AddShoppingCartIcon />}>
      Корзина
      </Button> 
    </Stack>
  );
}