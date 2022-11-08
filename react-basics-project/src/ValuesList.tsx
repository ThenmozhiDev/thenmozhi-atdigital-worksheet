import { Box, TextField, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { useState } from "react";
import { ChangeEvent } from "react";
import CloseIcon from '@mui/icons-material/Close';

interface valueProps {
  addValueHandler: () => void;
  addValues: string[];
  handleChange: (
    i: number,
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  index: number;
  onChange: (e: any) => void;
}

export default function ValuesList({
  index,
  addValueHandler,
  addValues,
  onChange,
  handleChange,
}: valueProps) {
  return (
    <>
      {addValues.map((Options, index) => (
        <Box marginBottom="20px"  display={"flex"}>
          <TextField
            variant="standard"
            label={"Value" + " " + (index + 1)}
            onChange={(e) => handleChange(index, e)}
            key={index}
            value={Options}
          />
  <Typography marginTop={2.7} color="gray" onClick={onChange}><CloseIcon /></Typography>
        </Box>
      ))}
      <Typography marginTop="30px">
        <Button variant="contained" onClick={addValueHandler}>
          ADD VALUE
        </Button>
      </Typography>
    </>
  );
}
