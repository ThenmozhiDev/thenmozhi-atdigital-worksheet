import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

const operators = [
  {
    value: "ADD",
    label: "+",
  },
  {
    value: "SUBTRACTION",
    label: "-",
  },
  {
    value: "MULTIPLICATION",
    label: "*",
  },
  {
    value: "DIVISION",
    label: "/",
  },
  {
    value: "POWER",
    label: "^",
  },
];

interface operationProps {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  operations: number | string;
}

export default function Operations({
  handleChange,
  operations,
}: operationProps) {
  return (
    <TextField
      select
      label="Operations"
      value={operations}
      onChange={handleChange}
      variant="standard"
      sx={{ minWidth: "200px" }}
    >
      {operators.map((option) => (
        <MenuItem key={option.value} value={option.label}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  );
}
