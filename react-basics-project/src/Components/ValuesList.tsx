import { Box, TextField, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { ChangeEvent } from "react";
import CloseIcon from "@mui/icons-material/Close";

interface valueProps {
  addValueHandler: () => void;
  addValues: string[];
  handleChange: (
    i: number,
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  index: number;
  removeValueOption: (i: number) => void;
}

export default function ValuesList({
  index,
  addValueHandler,
  addValues,
  removeValueOption,
  handleChange,
}: valueProps) {
  return (
    <>
      {addValues.map((Options, index) => (
        <Box marginBottom="20px" display={"flex"}>
          <TextField
            variant="standard"
            label={"Value" + " " + (index + 1)}
            onChange={(e) => handleChange(index, e)}
            key={index}
            value={Options}
            style={{ minWidth: "13rem"}}
          />
          <Typography
            marginTop={2.7}
            color="gray"
            onClick={() => removeValueOption(index)}
          >
            <CloseIcon />
          </Typography>
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
