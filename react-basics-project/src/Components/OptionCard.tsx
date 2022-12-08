import { Box, Button, TextField, Typography } from "@mui/material";
import { ChangeEvent } from "react";
import ValuesList from "./ValuesList";

interface defaultProps {
  onChange: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  addValueHandler: () => void;
  addValues: string[];
  handleChange: (
    i: number,
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  index: number;
  name: string;
  onChange1: () => void;
  removeValueOption: (i: number) => void;
}

export default function OptionCard({
  onChange,
  addValueHandler,
  addValues,
  index,
  name,
  onChange1,
  removeValueOption,
  handleChange,
}: defaultProps) {
  return (
    <Box
      marginLeft={3}
      border="1px solid black"
      paddingX={2}
      width={"234px"}
      maxHeight="100rem"
      paddingBottom="30px"
      paddingTop="16px"
    >
      <Typography marginBottom="20px">
        <TextField
          id="standard-basic"
          label="Option Name"
          variant="standard"
          value={name}
          onChange={onChange}
          style={{minWidth: "14rem"}}
        />
      </Typography>
      <Typography marginBottom="20px">Options</Typography>

      <ValuesList
        handleChange={handleChange}
        addValueHandler={addValueHandler}
        addValues={addValues}
        index={index}
        removeValueOption={removeValueOption}
      />

      <Box>
        <Button
          variant="contained"
          style={{ backgroundColor: "orange", marginTop: "30px" }}
          onClick={onChange1}
        >
          Remove
        </Button>
      </Box>
    </Box>
  );
}
