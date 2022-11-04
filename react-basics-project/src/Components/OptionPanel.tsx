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
  
}

export default function OptionPanel({
  addOptionHandler,
  addOptions,
  handleOption,

}: defaultProps) {

  
  return (
    <Box marginY={4}>
      <Box display={"flex"}>
        {addOptions.map((element: any, index: any) => (
          <OptionCard  onChange={(e) => handleOption(index, e)}/>
        ))}
        <AddOptionCard onChange={addOptionHandler} />
      </Box>
    </Box>
  );
}
