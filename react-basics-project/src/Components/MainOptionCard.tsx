import { Box, Button, Typography } from "@mui/material";
import { ChangeEvent, useState } from "react";
import OptionPanel from "./OptionPanel";

export default function MainOptionCard() {
  const [addOptions, setAddOptions] = useState<{ Name: string }[]>([]);

  let handleOption = (
    i: number,
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement> 
  ) => {
    let newAddOptions = [...addOptions];
    newAddOptions[i]["Name"] = e.target.value;
    setAddOptions(newAddOptions);
  };
  
  let addOptionHandler = () => {
    setAddOptions([...addOptions, { Name: "" }]);
  };
  const submitHandler = () => {
    //e.preventDefault();

    console.log(addOptions);
  
  };
  return (
    <>
    
        <Box>
        <OptionPanel addOptionHandler={addOptionHandler} addOptions={addOptions}  handleOption={handleOption}/>
      
      <Typography marginTop="30px" marginLeft="25px">
        <Button variant="contained" type="submit" onClick={submitHandler}>
          SUBMIT
        </Button>
        
      </Typography>
      </Box>
       
    </>
  );
}
