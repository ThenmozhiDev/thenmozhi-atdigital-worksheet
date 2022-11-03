import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import AddOptionCard from "./AddOptionCard";
import OptionCard from "./OptionCard";


export default function OptionPanel() {
  const [isShow, setIsShow] = useState(false);
  const [addOptions, setAddOptions] = useState<{ Name: string }[]>([]);

  let addOptionHandler = () => {
    setAddOptions([...addOptions,  { Name: ""}]);
}
  return (
    <Box marginY={4}>
      <Box display={"flex"}>
       {addOptions.map((element, index) => (
     <OptionCard />
))}
      <AddOptionCard />
      </Box>
      <Typography marginTop="30px" marginLeft="25px" >
        <Button variant="contained" type="submit">
          SUBMIT
        </Button>
      </Typography>
    </Box>
  );
}
