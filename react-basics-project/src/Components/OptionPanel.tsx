import { Box } from "@mui/material";
import { useState } from "react";
import AddOptionCard from "./AddOptionCard";
import OptionCard from "./OptionCard";
import { ChangeEvent } from "react";

interface defaultProps {
  addOptionHandler: () => void;
  addOptions: { Name: string }[];
  
  handleOption: (i: number,
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement> ) => void;
    addValueHandler: (i: number) => void;
    addValues: {Name: string } [][];
    handleChange: (i: number, j:number,
      e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement> ) => void;
   
  
}

export default function OptionPanel({
  addOptionHandler,
  addOptions,
  handleOption,
  addValueHandler,
  addValues,
  handleChange,


}: defaultProps) {

  
  return (
    <Box marginY={4}>
      <Box display={"flex"}>
        {addOptions.map((element: any, index: any) => (
          <OptionCard  onChange={(e) => handleOption(index, e)} addValueHandler={() => addValueHandler(index)} addValues={addValues[index]} handleChange={(i, e) => handleChange(index, i, e)} index={index} />
        ))}
        <AddOptionCard onChange={addOptionHandler} />
      </Box>
    </Box>
  );
}
