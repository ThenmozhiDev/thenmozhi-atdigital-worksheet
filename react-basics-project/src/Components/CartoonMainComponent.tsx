import { Box, Button, SelectChangeEvent } from "@mui/material";
import { ChangeEvent, useState } from "react";
import CartoonDetails from "./CartoonDetails";

export interface componentProps {
  [key: string]: string;
 
}

export default function CartoonMainComponent() {
  const [addVendors, setAddVendors] = useState<componentProps[]>([
    {
      
    },
  ]);

  let handleChange = (
    i: number,
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | SelectChangeEvent<string>
  ) => {
    let newAddVendor = [...addVendors];
    newAddVendor[i][e.target.name] = e.target.value;
    setAddVendors(newAddVendor);
  };

  let addVendorHandler = () => {
    console.log("hi");
    setAddVendors([
      ...addVendors,
      {
        Vendor: "",
        Cartoon: "",
        FullBody: "",
        PreMadeBg: "",
        PetFullBody: "",
        Shoulderup: "",
        CustomBg: "",
        PetShoulderup: "",
      },
    ]);
  };

  const submitHandler = () => {
    //e.preventDefault();
    console.log(addVendors);
  };

  return (
    <>
      <CartoonDetails
        handleChange={handleChange}
        addVendors={addVendors}
        addVendorHandler={addVendorHandler}
      />
      <Box marginX={2.5} marginTop="20px">
        <Button variant="contained" type="submit" onClick={submitHandler}>
          SUBMIT
        </Button>
      </Box>
    </>
  );
}
