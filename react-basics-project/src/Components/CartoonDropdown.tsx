import {
  Box,
  FormControl,
  Grid,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from "react";



export default function CartoonDropdown(props: { text: string  }, ) {
  return (
    <>
      <FormControl fullWidth >
        <Box display="flex" marginX={2.5} marginY={5}>
          <Grid container xs={12} style={{alignItems: "center"}}>
            <Grid xs={3}>
              <Typography id="demo-simple-select-label"  style={{ alignItems: "center" }}>
           {props.text}
              </Typography>
            </Grid>
            <Grid xs={6}>
              <Select id="demo-simple-select" style={{minWidth: "270px"}} >
                <MenuItem value={"Turned Yellow"}>Turned Yellow</MenuItem>
                <MenuItem value={"Twenty"}>Twenty</MenuItem>
                <MenuItem value={"Thirty"}>Thirty</MenuItem>
              </Select>
            </Grid>
          </Grid>
        </Box>
      </FormControl>
    </>
  );
}
