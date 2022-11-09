import { Box } from "@mui/material";
import AddOptionCard from "./AddOptionCard";
import OptionCard from "./OptionCard";
import { ChangeEvent } from "react";

interface defaultProps {
  addOptionHandler: () => void;
  addOptions: { Name: string; Options: string[] }[];
  removeAddOption: (index: number) => void;
  handleOption: (
    i: number,
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  addValueHandler: (i: number) => void;
  handleChange: (
    i: number,
    j: number,
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  removeValueOption: (i: number, index: number) => void;
}

export default function OptionPanel({
  addOptionHandler,
  addOptions,
  handleOption,
  addValueHandler,
  handleChange,
  removeAddOption,
  removeValueOption,
}: defaultProps) {
  return (
    <Box marginY={4}>
      <Box display={"flex"}>
        {addOptions.map(({ Name }, index: any) => (
          <OptionCard
            key={index}
            onChange={(e) => handleOption(index, e)}
            addValueHandler={() => addValueHandler(index)}
            name={Name}
            addValues={addOptions[index]["Options"]}
            handleChange={(i, e) => handleChange(index, i, e)}
            index={index}
            onChange1={() => removeAddOption(index)}
            removeValueOption={(i) => removeValueOption(index, i)}
          />
        ))}
        <AddOptionCard onChange={addOptionHandler} />
      </Box>
    </Box>
  );
}
