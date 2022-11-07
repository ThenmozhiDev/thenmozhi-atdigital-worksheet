import { Box, Button, Typography } from "@mui/material";
import { ChangeEvent, useState } from "react";
import { isNamedExports } from "typescript";
import OptionPanel from "./OptionPanel";



export default function MainOptionCard() {
  const [addOptions, setAddOptions] = useState<{Name: string, Options: string[]}[]>([]);
  
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
      let newAddOptions = [...addOptions];
      newAddOptions[i]["Options"][j] = e.target.value;
      setAddOptions(newAddOptions);
    };
    let addValueHandler = (i: number) => {
      let newAddOptions = [...addOptions];
      newAddOptions[i]["Options"]=[...newAddOptions[i]["Options"], ""];
      setAddOptions(newAddOptions);
      };
  
  let addOptionHandler = () => {
    setAddOptions([...addOptions, { Name: "", Options: [] }]);
    
  };
  const submitHandler = () => {
    //e.preventDefault();

    console.log(addOptions);
  
  };
  return (
    <>  
        <Box>
        <OptionPanel addOptionHandler={addOptionHandler} addOptions={addOptions}  handleOption={handleOption} addValueHandler={addValueHandler} handleChange={handleChange}/>    
      <Typography marginTop="30px" marginLeft="25px">
        <Button variant="contained" type="submit" onClick={submitHandler}>
          SUBMIT
        </Button>      
      </Typography>
      </Box>      
    </>
  );
}
