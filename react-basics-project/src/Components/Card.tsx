import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import React, { ChangeEvent } from 'react';

export default function Card() {
  const [name, setName] = useState<string>();
  const [addValues, setAddValues] = useState<{Name: string}[]>([]);
  const [addOptions, setAddOptions] = useState<{Name: string}[]>([]);

  const handleOption = (i: number, e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    let newAddOptions = [...addOptions];
    newAddOptions[i]["Name"] = e.target.value;
    setAddOptions(newAddOptions);
  };

  const addOptionHandler = () => {
    setAddOptions([...addOptions, { Name: ""}]);
  };

  const onNameHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  let handleChange = (i: number, e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement> ) => {
    let newAddValues = [...addValues];
  newAddValues[i]["Name"] = e.target.value;
    setAddValues(newAddValues);
  };

  let addValueHandler = () => {
    setAddValues([...addValues, { Name: "" }]);
  };

  const submitHandler = (event: React.SyntheticEvent) => {
    event.preventDefault();

    const optionData = {
      optionName: name,
      value: addValues,
    };
    console.log(optionData);
  };

  return (
    <Box width={"1232px"} margin={2}>
     
      <form onSubmit={submitHandler}>
        {addOptions.map((element, index) => (
          <Box>
            <Box margin={"auto"} width={"254px"} gridRow={4}>
              {index ? (
                <Box marginLeft={3} marginTop={3} border="1px solid black" padding={2}  width={"234px"}
                height={"323px"}>
                  <Typography marginBottom="20px">
                    <TextField
                      id="standard-basic"
                      label="Option Name"
                      variant="standard"
                      onChange={(e) => handleOption(index, e)}
                      value={name}
                    />
                  </Typography>

                  <Typography marginBottom="20px">Options</Typography>
                  {addValues.map((element, index) => (
                    <Box marginBottom="20px">
                 
                        <TextField
                          id="standard-basic"
                          label={"value" + " " +(index + 1) }
                          variant="standard"
                          onChange={(e) => handleChange(index, e)}
                        />
                 
                    </Box>
                  ))}
                  <Typography marginTop="30px">
                    <Button
                      variant="contained"
                      onClick={() => addValueHandler()}
                    >
                      ADD VALUE
                    </Button>
                  </Typography>
                </Box>
              ) : null}
             
            </Box>
          </Box>
        ))}
      </form>
      <Box  marginLeft={3} marginTop={3}  border="1px solid black" padding={2}  width={"234px"}
                height={"323px"}>
                <Typography marginTop="30px">
                  <Button
                    variant="contained"
                    onClick={() => addOptionHandler()}
                    style={{ top: "130px", left: "50px" }}
                  >
                    ADD OPTION
                  </Button>
                </Typography>
              </Box>
      <Typography marginTop="30px" sx={{ textAlign: "center" }}>
        <Button variant="contained" type="submit">
          SUBMIT
        </Button>
      </Typography>
    </Box>
  );
}
