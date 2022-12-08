import { Box, Button, TextField, Typography, Grid } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import CartoonDropdown from "../CartoonDropdown";
import VendorOption from "./VendorOption";
import VendorNew from "./VendorNew";
import CartoonHeader from "../CartoonHeader";
import { ChangeEvent } from "react";
interface defaultProps {
  addElementHandler: (i: number) => void;
  addCartoon: { CartoonName: string; CartoonType: string; Options: {option: string, value: string}[]}[];
  addOptionHandler: (i: number) => void;
  onChange: (e: any) => void;
  dropdownHandler: (e: any)=> void;
    optionHandler: ( i: number,
      e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
      addVendor: {CartoonName: string, CartoonType: string, Options: {option: string, value: string}[]};
  valueHandler: ( i: number,
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    index: number;
}


export default function VendorElement({
  addElementHandler,
  addCartoon,
  addOptionHandler,
  onChange,
  dropdownHandler,
  optionHandler,
  addVendor,
  valueHandler,
 index,
}: defaultProps) {
  return (
    <>
      <Box display={"flex"} marginTop={3} marginX={2.5}>
        <Grid container xs={12}>
          <Grid xs={3} display={"flex"} maxWidth="179px !important" alignItems={"center"}>
            <Typography >
              Cartoon Name
            </Typography>
            </Grid>
            <Grid xs={6}>
            <TextField
              id="outlined-basic"
              variant="outlined"
              style={{ minWidth: "17rem" }}
               onChange={onChange}
            />
          </Grid>
        </Grid>
      </Box>

      {addCartoon.map((element: any, index: any) => (
        <Box>
          <VendorNew
            addOptionHandler={() => addOptionHandler(index)}
            addOptions={addCartoon[index]["Options"]}
            dropdownHandler={dropdownHandler}
            optionHandler={optionHandler}
            valueHandler={valueHandler}
           
          />
        </Box>
      ))}

      <Button variant="outlined" style={{margin:"15px", padding:"10px"}} onClick={() => addElementHandler(index)}>
        <AddIcon /> ADD ELEMENT
      </Button>
    </>
  );
}
