import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

const currencies = [
  {
    value: 'ADD',
    label: '+',
  },
  {
    value: 'SUBTRACTION',
    label: '-',
  },
  {
    value: 'MULTIPLICATION',
    label: '*',
  },
  {
    value: 'DIVISION',
    label: '/',
  },
  {
    value: 'POWER',
    label: '^',
  },
];

interface operationProps {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  operations: number | string;
}

export default function Operations({handleChange, operations}: operationProps) {
  
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
     
       <div>
        <TextField
          id="standard-select-currency"
          select
          label="Operations"
          value={operations}
          onChange={handleChange}   
          variant="standard"
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
    </Box>
  );
}