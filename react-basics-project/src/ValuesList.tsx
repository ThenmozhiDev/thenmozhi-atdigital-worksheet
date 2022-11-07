import { Box, TextField, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { useState } from "react";
import { ChangeEvent } from "react";

interface valueProps {
  
  onChange1: () => void;
  addValues: {Name: string } [];
  handleChange: (i: number,
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement> ) => void;
   
}

export default function ValuesList({handleChange, onChange1, addValues}: valueProps) {
  // const [addValues, setAddValues] = useState<{ Name: string }[]>([]);

  // let handleChange = (
  //   i: number,
  //   e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  // ) => {
  //   let newAddValues = [...addValues];
  //   newAddValues[i]["Name"] = e.target.value;
  //   setAddValues(newAddValues);
  // };

  // let addValueHandler = () => {
  //   setAddValues([...addValues, { Name: "" }]);
  // };
  

  return (
    <>
      {addValues.map((element, index) => ( 
        <Box marginBottom="20px">
          <TextField
            variant="standard"
            label={"Value" + " " + (index + 1)}
            onChange={(e)=> (handleChange(index, e))}
            
          />
        </Box>
      ))} 
      <Typography marginTop="30px">
        <Button variant="contained" onClick={onChange1}>
          ADD VALUE
        </Button>
      </Typography>
    </>
  );
}
