import { Box, TextField, Typography } from "@mui/material";
import { ChangeEvent, SetStateAction, useState } from "react";
import Operations from "./Operations";

interface valueInputProps {
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onChange1: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  operations: number | string;
  result: number | string;
  Calculations: () => void;
  
}

export default function Fields({
  onChange,
  onChange1,
  handleChange,
  operations,
  result,
  Calculations,
  
}: valueInputProps) {
  return (
    <Box margin={"30px"} display={"flex"}>
      <Box marginRight={"30px"}>
        <TextField
          id="standard-number"
          label="Value 1"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={onChange}
          variant="standard"
          onKeyUp={Calculations}
          
        />
      </Box>
      <Box marginRight={"30px"}>
        <Operations handleChange={handleChange} operations={operations} Calculations={Calculations}/>
      </Box>
      <Box marginRight={"30px"}>
        <TextField
          id="standard-number"
          label="Value 2"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="standard"
          onChange={onChange1}
          onKeyUp={Calculations}
        />
      </Box>
      <Box>
        <Typography> = {result}</Typography>
      </Box>
    </Box>
  );
}
