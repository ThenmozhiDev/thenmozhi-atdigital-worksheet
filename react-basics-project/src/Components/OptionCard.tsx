import { Box, TextField, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import React from "react";
import ValuesList from "../ValuesList";
import AddButton from "../ValuesList";



export default function OptionCard() {
  return (
    <Box
      marginLeft={3}
      border="1px solid black"
      padding={2}
      width={"234px"}
      height={"323px"}
    >
      <Typography marginBottom="20px">
        <TextField id="standard-basic" label="Option Name" variant="standard" />
      </Typography>
      <Typography marginBottom="20px">Options</Typography>
      <ValuesList />
    </Box>
  );
}
