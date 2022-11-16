import { Button, SelectChangeEvent, Typography } from "@mui/material";
import { ChangeEvent, useState } from "react";

import VendorElement from "./VendorElement";

export default function VendorMainComponent() {
  const [addCartoon, setAddCartoon] = useState<
    { CartoonName: string; CartoonType: string; Options: string[] }[]
  >([]);

  const addElementHandler = () => {
    setAddCartoon([
      ...addCartoon,
      { CartoonName: "", CartoonType: "", Options: [] },
    ]);
  };

  const addOptionHandler = (i: number) => {
    console.log(i);
    let addNewOption = [...addCartoon];
    addNewOption[i]["Options"] = [...addCartoon[i]["Options"], ""];
    setAddCartoon(addNewOption);
    console.log(addNewOption);
  };

  const addVendorHandler = () => {
    setAddCartoon([
      ...addCartoon,
      { CartoonName: "", CartoonType: "", Options: [] },
    ]);
  };

  const handleChange = (
    i: number,
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    let addNewCartoon = [...addCartoon];
    addNewCartoon[i]["CartoonName"] = e.target.value;
    setAddCartoon(addNewCartoon);
  };

  const submitHandler = () => {
    console.log(addCartoon);
  };

  return (
    <>
      <VendorElement
        addElementHandler={addElementHandler}
        addCartoon={addCartoon}
        addOptionHandler={addOptionHandler}
        addVendorHandler={addVendorHandler}
        handleChange={handleChange}
    
      />
      <Typography marginTop="30px" marginLeft="20px">
        <Button variant="contained" type="submit" onClick={submitHandler} style={{padding: "10px 40px"}}>
          SUBMIT
        </Button>
      </Typography>
    </>
  );
}
