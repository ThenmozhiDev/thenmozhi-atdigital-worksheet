import { Box, Button } from "@mui/material";
import { ChangeEvent, useState } from "react";
import CartoonDetails from "./CartoonDetails";

export interface componentProps {
  [key: string]: string;
  Vendor: string;
  Cartoon: string;
  FullBody: string;
  PreMadeBg: string;
  PetFullBody: string;
  Shoulderup: string;
  CustomBg: string;
  PetShoulderup: string;
}

export default function CartoonMainComponent() {
  const [addVendors, setAddVendors] = useState<componentProps[]>([
    {
      Vendor: "Turned Yellow",
      Cartoon: "Simpsons",
      FullBody: "56",
      PreMadeBg: "23",
      PetFullBody: "34",
      Shoulderup: "68",
      CustomBg: "25",
      PetShoulderup: "10",
    },
  ]);

  let handleChange = (
    i: number,
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
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
