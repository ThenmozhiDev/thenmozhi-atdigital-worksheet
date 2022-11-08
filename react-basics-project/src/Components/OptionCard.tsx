import { Box, Button, TextField, Typography } from "@mui/material";
import { ChangeEvent, useState } from "react";
import ValuesList from "../ValuesList";

interface defaultProps {
  onChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  addValueHandler: () => void;
  addValues:  string[];
  handleChange: (i: number,
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement> ) => void;
    index: number;
    name: string;
    onChange1: () => void;
    removeValueOption: (i: number, index: number) => void;
  }

export default function OptionCard({onChange, addValueHandler,
  addValues,
  index,
 name,
 onChange1,
 removeValueOption,
  handleChange}: defaultProps) {

    
  
  return (
    <Box
      marginLeft={3}
      border="1px solid black"
      padding={2}
      width={"234px"}
      height={"420px"}
    >
    
      <Typography marginBottom="20px">
        <TextField id="standard-basic" label="Option Name" variant="standard" value={name} onChange={onChange}/>
      </Typography>
      <Typography marginBottom="20px">Options</Typography>
     
      <ValuesList handleChange={handleChange} addValueHandler={addValueHandler} addValues={addValues} index={index} onChange={(e) => removeValueOption(index, e)}/>

      <Box >
        <Button variant="contained" style={{backgroundColor: "orange", top: "20px"}} onClick={onChange1}>Remove</Button>
      </Box>
  
    </Box>
  );
}
