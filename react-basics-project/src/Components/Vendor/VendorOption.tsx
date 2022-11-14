import { Box, Button, TextField, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

interface defaultProps {
    addOptionHandler: () => void;
    addCartoon: {CartoonName: "", CartoonType: "", Options: string[]}[];
    
}


export default function VendorOption({addCartoon, addOptionHandler}: defaultProps) {
    return (
        <>
        <Typography marginTop="30px" marginLeft="25px">
          <Button variant="contained" type="submit" onClick={addOptionHandler}>
       <AddIcon /> ADD OPTION
          </Button>
        </Typography>
         {addCartoon.map((element: any, index: any) => (
        <Box display={"flex"}>
        <Typography marginBottom="20px"> Option 1</Typography>
         <TextField
           id="outlined-basic"
           variant="outlined"        
           style={{minWidth: "14rem"}}
         />
         <Typography marginBottom="20px"> Value/Counter</Typography>
         <TextField
           id="outlined-basic"
           variant="outlined"        
           style={{minWidth: "14rem"}}
         />
         <Typography marginBottom="20px"> Option 2</Typography>
         <TextField
           id="outlined-basic"
           variant="outlined"        
           style={{minWidth: "14rem"}}
         />
         <Typography marginBottom="20px"> Value /Counter</Typography>
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