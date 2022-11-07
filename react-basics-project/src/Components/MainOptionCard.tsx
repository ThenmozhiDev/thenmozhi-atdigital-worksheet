import { Box, Button, Typography } from "@mui/material";
import { ChangeEvent, useState } from "react";
import OptionPanel from "./OptionPanel";

export default function MainOptionCard() {
  const [addOptions, setAddOptions] = useState<{ Name: string }[]>([]);
  const [addValues, setAddValues] = useState<{ Name: string }[][]>([]);

  let handleOption = (
    i: number,
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement> 
  ) => {
    let newAddOptions = [...addOptions];
    newAddOptions[i]["Name"] = e.target.value;
    setAddOptions(newAddOptions);
  };

  let handleChange = (
      i: number,
      j:number,
      e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
      let newAddValues = [...addValues];
      newAddValues[i][j]["Name"] = e.target.value;
      setAddValues(newAddValues);
    };
    let addValueHandler = (i: number) => {
      let newAddValues = [...addValues];
      newAddValues[i]=[...addValues[i], { Name: "" }];
      setAddValues(newAddValues);
      };
  
  let addOptionHandler = () => {
    setAddOptions([...addOptions, { Name: ""}]);
    setAddValues([...addValues, []]);
  };
  const submitHandler = () => {
    //e.preventDefault();

    console.log(addOptions, addValues);
  
  };
  return (
    <>  
        <Box>
        <OptionPanel addOptionHandler={addOptionHandler} addOptions={addOptions}  handleOption={handleOption} addValueHandler={addValueHandler} addValues={addValues} handleChange={handleChange}/>    
      <Typography marginTop="30px" marginLeft="25px">
        <Button variant="contained" type="submit" onClick={submitHandler}>
          SUBMIT
        </Button>      
      </Typography>
      </Box>      
    </>
  );
}
