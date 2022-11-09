import { Box, Button, Typography } from "@mui/material";
import { ChangeEvent, useState } from "react";
import OptionPanel from "./OptionPanel";

export default function MainOptionCard() {
  const [addOptions, setAddOptions] = useState<
    { Name: string; Options: string[] }[]
  >([
    { Name: "Size", Options: ["Small", "Medium"] },
    { Name: "Color", Options: ["Red", "Green", "Blue"] },
    { Name: "Style", Options: [] },
  ]);

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
    j: number,
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    console.log(i, j);
    let newAddOptions = [...addOptions];
    newAddOptions[i]["Options"][j] = e.target.value;
    setAddOptions(newAddOptions);
  };
  let addValueHandler = (i: number) => {
    let newAddOptions = [...addOptions];
    newAddOptions[i]["Options"] = [...newAddOptions[i]["Options"], ""];
    setAddOptions(newAddOptions);
  };

  let addOptionHandler = () => {
    setAddOptions([...addOptions, { Name: "", Options: [] }]);
  };

  const removeAddOption = (index: number) => {
    let removeAddOption = [...addOptions];
    removeAddOption.splice(index, 1);
    setAddOptions(removeAddOption);
  };

  const removeValueOption = (i: number, index: number) => {
    console.log(i, index);
    let removeValueOption = [...addOptions];
    removeValueOption[i]["Options"].splice(index, 1);
    setAddOptions(removeValueOption);
  };
  const submitHandler = () => {
    //e.preventDefault();

    console.log(addOptions);
  };
  return (
    <>
      <Box>
        <OptionPanel
          addOptionHandler={addOptionHandler}
          addOptions={addOptions}
          handleOption={handleOption}
          addValueHandler={addValueHandler}
          handleChange={handleChange}
          removeAddOption={removeAddOption}
          removeValueOption={removeValueOption}
        />
        <Typography marginTop="30px" marginLeft="25px">
          <Button variant="contained" type="submit" onClick={submitHandler}>
            SUBMIT
          </Button>
        </Typography>
      </Box>
    </>
  );
}
