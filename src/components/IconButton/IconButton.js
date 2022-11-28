import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import './IconButton.css';

export default function IconLabelButtons({onClick = () => {}, children }) {

    return (
    <Stack direction="row" spacing={2}>
      <Button onClick={onClick} variant="outlined" aria-label="add to shopping cart" endIcon={<AddShoppingCartIcon />} color="error">
      Купить
      </Button> 
    </Stack>
  );
}