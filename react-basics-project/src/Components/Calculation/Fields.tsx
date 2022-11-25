import { Box, Stack, TextField, Typography } from "@mui/material";
import { ChangeEvent, SetStateAction, useState } from "react";
import Operations from "./Operations";

interface valueInputProps {
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onChange1: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  operations: number | string;
  result: number | string;
  value1: number | undefined;
  value2: number | undefined;
}

export default function Fields({
  onChange,
  onChange1,
  handleChange,
  operations,
  result,
  value1,
  value2,
}: valueInputProps) {
  return (
    <Stack direction="row" spacing={4} padding={4} alignItems="center">
      <TextField
        label="Value 1"
        type="number"
        onChange={onChange}
        variant="standard"
        value={value1 ?? ""}
      />

      <Operations handleChange={handleChange} operations={operations} />

      <TextField
        label="Value 2"
        type="number"
        variant="standard"
        onChange={onChange1}
        value={value2 ?? ""}
      />

      <Typography> = {result}</Typography>
    </Stack>
  );
}
