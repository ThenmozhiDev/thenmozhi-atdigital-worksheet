import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

interface defaultProps {
    addOptionHandler: () => void;
    addOptions:  string[];
    label: string;
    
}


export default function VendorOption({addOptions, addOptionHandler, label}: defaultProps) {
    return (
        <>
         {addOptions.map((element: any, index: any) => (
        <Box display={"flex"} marginBottom="40px">
          <Grid container xs={12} maxWidth={"520px !important"}>
            <Grid xs={3} minWidth="190px">
        <Typography marginLeft={2.5}>{label + " " + (index + 1)}</Typography>
        </Grid>
        <Grid xs={6} minWidth="190px !important">
         <TextField
           id="outlined-basic"
           variant="outlined"        
           style={{minWidth: "17rem"}}
         />
         </Grid>
         </Grid>      
         <Typography marginBottom="20px" marginRight={"30px"}> Value/Counter</Typography>  
         <TextField
           id="outlined-basic"
           variant="outlined"        
           style={{minWidth: "14rem"}}
         />          
      </Box>
      ))}
     
      </>
    )
}