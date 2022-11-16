import { Box, Button, TextField, Typography, Grid } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import CartoonDropdown from "../CartoonDropdown";
import VendorOption from "./VendorOption";
import VendorNew from "./VendorNew";
import CartoonHeader from "../CartoonHeader";
import { ChangeEvent } from "react";
interface defaultProps {
  addElementHandler: () => void;
  addCartoon: { CartoonName: string; CartoonType: string; Options: string[] }[];
  addOptionHandler: (i: number) => void;
  addVendorHandler: () => void;
  handleChange: (  i: number,
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    
  
}


export default function VendorElement({
  addElementHandler,
  addCartoon,
  addOptionHandler,
  addVendorHandler,
  handleChange,
  
}: defaultProps) {
  return (
    <>
      <CartoonHeader onChange={() => addVendorHandler()}/>
      <Box display={"flex"} marginTop={3} marginX={2.5}>
        <Grid container xs={12}>
          <Grid xs={3} display={"flex"} maxWidth="174px !important">
            <Typography marginBottom="20px">
              Cartoon Name
            </Typography>
            </Grid>
            <Grid xs={6}>
            <TextField
              id="outlined-basic"
              variant="outlined"
              style={{ minWidth: "17rem" }}
              // onChange={(e) => handleChange(index, e)}
            />
          </Grid>
        </Grid>
      </Box>

      {addCartoon.map((element: any, index: any) => (
        <Box>
          <VendorNew
            addOptionHandler={() => addOptionHandler(index)}
            addOptions={addCartoon[index]["Options"]}
          />
        </Box>
      ))}

      <Button variant="outlined" style={{margin:"15px", padding:"10px"}} onClick={() => addElementHandler()}>
        <AddIcon /> ADD ELEMENT
      </Button>
    </>
  );
}
