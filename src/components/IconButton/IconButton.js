import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { createTheme } from '@mui/material/styles';
import { purple } from '@mui/material/colors';



export default function IconLabelButtons() {

    return (
    <Stack direction="row" spacing={2}>
      <Button variant="text" aria-label="add to shopping cart" endIcon={<AddShoppingCartIcon />}>
        Купить
      </Button> 
    </Stack>
  );
}