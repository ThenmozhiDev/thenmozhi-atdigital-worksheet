import { Box, TextField, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { useState } from "react";
import { ChangeEvent } from "react";

interface valueProps {
  addValueHandler: () => void;
  addValues: { Name: string }[];
  handleChange: (
    i: number,
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  index: number;
}

export default function ValuesList({
  index,
  addValueHandler,
  addValues,
  handleChange,
}: valueProps) {
  return (
    <>
      {addValues.map((element, index) => (
        <Box marginBottom="20px" key={index}>
          <TextField
            variant="standard"
            label={"Value" + " " + (index + 1)}
            onChange={(e) => handleChange(index, e)}
          />
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
