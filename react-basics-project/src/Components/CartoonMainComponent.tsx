import { Box, Button } from "@mui/material";
import { ChangeEvent, useState } from "react";
import CartoonDetails from "./CartoonDetails";



export default function CartoonMainComponent() {
  const [addVendors, setAddVendors] = useState<
     {[key: string]: string
     }[]
  >([
     {
      Vendor: "",
      Cartoon: "",
      FullBody: "" ,
      PreMadeBg: "",
      PetFullBody: "",
      Shoulderup: "",
      CustomBg: "",
      PetShoulderup: "",
    },
  ]);

  
  let handleChange = (
    i: number,
    
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    let newAddVendor = [...addVendors];
    newAddVendor[i][e.target.name as string] = e.target.value;
    setAddVendors(newAddVendor);
    console.log(newAddVendor);
    console.log(i);
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
