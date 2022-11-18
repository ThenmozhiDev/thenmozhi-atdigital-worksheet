import { Button, Typography } from "@mui/material";
import { useState } from "react";
import HeaderComponent from "./HeaderComponent";

export interface elementProps {
  [key: string]: fieldProps;
}

export interface fieldProps {
  CartoonName: string;
  elements: {
    CartoonType: string;
    Options: { option: string; value: string }[];
  };
}

export default function MainComponent() {
  const [addVendor, setAddVendor] = useState<fieldProps[]>([]);

  // const addVendorHandler = (i: number) => {
  //   console.log(i);
  //   let addNewVendor = [...addVendor];
  //   addNewVendor[i]["CartoonName"] as string = [...addVendor[i]["CartoonName"], {}];
  //   setAddVendor(addNewVendor);
  // };

const addElementHandler = () => {

}

  const submitHandler = () => {
    console.log(addVendor);
  };
  return (
    <>
      {/* <HeaderComponent addVendorHandler={addVendorHandler} addVendor={addVendor}/> */}
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
