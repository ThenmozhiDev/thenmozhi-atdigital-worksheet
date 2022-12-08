import { Button, Typography } from "@mui/material";
import { useState } from "react";
import HeaderComponent from "./HeaderComponent";

export interface fieldProps {
  CartoonName: string;
  elements: {
    CartoonType: string;
    Options: { option: string; value: string }[];
  }[];
}

export default function MainComponent() {
  const [addVendor, setAddVendor] = useState<fieldProps[]>([]);

  const addVendorHandler = () => {
    setAddVendor([...addVendor, { CartoonName: "", elements: [{CartoonType: "", Options: [{option: "", value: ""}]}] }]);
  };

  const addElementHandler = (i: number) => {
    let addNewElement = [...addVendor];
    addNewElement[i]["elements"] = [
      ...addVendor[i]["elements"],
      { CartoonType: "", Options: [] },
    ];

    setAddVendor(addNewElement);
  };

  const addOptionHandler = (i: number, j: number) => {
   console.log(i,j);
    let addNewOption = [...addVendor];
    console.log( "vendor" + addVendor);
    addNewOption[i]["elements"][j]["Options"] = [
      ...addVendor[i]["elements"][j]["Options"], { option: "", value: ""},
    ];
    setAddVendor(addNewOption);
    console.log("option" + addNewOption);
  };

  const submitHandler = () => {
    console.log(addVendor);
  };
  return (
    <>
      <HeaderComponent
        addVendorHandler={addVendorHandler}
        addVendor={addVendor}
        addElementHandler={addElementHandler}
        addOptionHandler={addOptionHandler}
      />
      <Typography marginTop="30px" marginLeft="20px">
        <Button
          variant="contained"
          type="submit"
          onClick={submitHandler}
          style={{ padding: "10px 40px" }}
        >
          SUBMIT
        </Button>
      </Typography>
    </>
  );
}
