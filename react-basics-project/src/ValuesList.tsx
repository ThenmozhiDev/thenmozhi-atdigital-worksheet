import { Box, TextField, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { useState } from "react";
import { ChangeEvent } from "react";

export default function ValuesList() {
  const [addValues, setAddValues] = useState<{ Name: string }[]>([]);

  let handleChange = (
    i: number,
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    let newAddValues = [...addValues];
    newAddValues[i]["Name"] = e.target.value;
    setAddValues(newAddValues);
  };

  let addValueHandler = () => {
    setAddValues([...addValues, { Name: "" }]);
  };

  return (
    <>
      {addValues.map((element, index) => (
        <Box marginBottom="20px">
          <TextField
            id="standard-basic"
            variant="standard"
            label={"Value" + " " + (index + 1)}
            onChange={(e) => handleChange(index, e)}
          />
        </Box>
      ))}
      <Typography marginTop="30px">
        <Button variant="contained" onClick={(e) => addValueHandler()}>
          ADD VALUE
        </Button>
      </Typography>
    </>
  );
}
