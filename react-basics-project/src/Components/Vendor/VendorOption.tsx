import { Box, Button, Grid, InputAdornment, TextField, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { ChangeEvent } from "react";

interface defaultProps {
    addOptionHandler: () => void;
    addOptions:  {option: string, value: string}[];
    label: string;
    optionHandler: ( i: number,
      e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
      valueHandler: ( i: number,
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}


export default function VendorOption({addOptions, addOptionHandler, label, optionHandler, valueHandler}: defaultProps) {
    return (
        <>
         {addOptions.map((Options, index: any) => (
        <Box display={"flex"} marginBottom="40px">
          <Grid  container xs={12} maxWidth={"520px !important"}>
            <Grid  alignItems={'center'}xs={3} minWidth="200px">
        <Typography marginLeft={2.5}>{label + " " + (index + 1)}</Typography>
        </Grid>
        <Grid xs={6} minWidth="190px !important">
         <TextField
           id="outlined-basic"
           variant="outlined"        
           style={{minWidth: "17rem"}}
           onChange={(e) => optionHandler(index, e)}
           value={Options.option}
          
         />
         </Grid>
         </Grid>      
         <Typography marginBottom="20px" marginRight={"30px"}> Value/Counter</Typography>  
         <TextField
          InputProps= {{startAdornment: <InputAdornment position="start">$</InputAdornment>}}
           id="outlined-basic"
           variant="outlined"        
           style={{minWidth: "14rem"}}
           onChange={(e) => valueHandler(index, e)}
           value={Options.value}
           type="number"
         />          
      </Box>
      ))}
     
      </>
    )
}