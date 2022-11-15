import { Box, Typography,TextField, Button,  } from "@mui/material";
import CartoonDropdown from "../CartoonDropdown";
import VendorOption from "./VendorOption";
import AddIcon from "@mui/icons-material/Add";


interface propsData {
    
    addOptionHandler: () => void;
    addCartoon: {CartoonName: "", CartoonType: "", Options: string[]}[];
}

export default function VendorNew({ addOptionHandler, addCartoon }: propsData) {
    return (
        <>
          
        <Box display={"flex"}>
       <Typography marginBottom="20px"> Cartoon Name</Typography>
        <TextField
          id="outlined-basic"
          variant="outlined"        
          style={{minWidth: "14rem"}}
        />
     </Box>
     {/* <CartoonDropdown label="Cartoon Body-Type" name="gcgf"/> */}
    
    
     <VendorOption addCartoon={addCartoon} addOptionHandler={addOptionHandler} />
     </>
    )
}