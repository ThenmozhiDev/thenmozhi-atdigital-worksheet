import { Box, TextField, Typography } from "@mui/material";
import { ChangeEvent, SetStateAction, useState } from "react";
import Operations from "./Operations";

export default function Fields() {

    const [values, setValues] = useState<{value1: string, value2: string}[]>([]);

const value1Handler = (i: number,  e: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    let valueone = [...values];
    valueone[i]["value1"] = e.target.value;
    setValues(valueone);
}

const value2Handler = (i: number,  e: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> ) => {
    let valuetwo = [...values];
    valuetwo[i]["value2"] = e.target.value;
    setValues(valuetwo);
}
    return (
        <Box margin={"30px"} display={"flex"}>
            <Box marginRight={"30px"}>
        <TextField
          id="standard-number"
          label="Value 1"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={(e) => value1Handler(index, e)}
          variant="standard"
          
        />
        </Box>
        <Box marginRight={"30px"}><Operations /></Box>
        <Box marginRight={"30px"}>
       <TextField
          id="standard-number"
          label="Value 2"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="standard"
         onChange={(e) => value2Handler(index, e)}
        />
        </Box>
        <Box>
            <Typography> = </Typography>
        </Box>
        </Box>
    )
}