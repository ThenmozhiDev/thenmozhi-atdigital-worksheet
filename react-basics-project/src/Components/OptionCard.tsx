import { Box, TextField, Typography } from "@mui/material";
import { ChangeEvent, useState } from "react";
import ValuesList from "../ValuesList";

interface defaultProps {
  onChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  addValueHandler: () => void;
  addValues:  string[];
  handleChange: (i: number,
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement> ) => void;
    index: number;
}

export default function OptionCard({onChange, addValueHandler,
  addValues,
  index,
  handleChange}: defaultProps) {
  
  return (
    <Box
      marginLeft={3}
      border="1px solid black"
      padding={2}
      width={"234px"}
      height={"363px"}
    >
    
      <Typography marginBottom="20px">
        <TextField id="standard-basic" label="Option Name" variant="standard"  onChange={onChange}/>
      </Typography>
      <Typography marginBottom="20px">Options</Typography>
     
      <ValuesList handleChange={handleChange} addValueHandler={addValueHandler} addValues={addValues} index={index}/>
  
    </Box>
  );
}
