import { Box, Button } from "@mui/material";
import { ChangeEvent, useState } from "react";
import CartoonDetails from "./CartoonDetails";

export default function CartoonMainComponent() {

    const [addVendors, setAddVendors] = useState<{Name: string}[]>([]);

    let handleChange = ( i: number,
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    let newAddVendor = [...addVendors];
    newAddVendor[i]["Name"] = e.target.value;
    setAddVendors(newAddVendor);
  };

  let addVendorHandler = () => {
    setAddVendors([...addVendors, { Name: ""}])
  }

  const submitHandler = () => {
    //e.preventDefault();

    console.log(addVendors);
  };

    return(
        <>
        <CartoonDetails handleChange={handleChange} />
        <Box marginX={2.5} marginTop="20px">
      <Button variant="contained" type="submit" onClick={submitHandler}>SUBMIT</Button>
      </Box>
        </>
    )
}