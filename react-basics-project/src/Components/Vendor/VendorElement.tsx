import { Box, Button, TextField, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import CartoonDropdown from "../CartoonDropdown";
import VendorOption from "./VendorOption";
import VendorNew from "./VendorNew";
import CartoonHeader from "../CartoonHeader";
interface defaultProps {
    addElementHandler: () => void;
    addCartoon: {CartoonName: "", CartoonType: "", Options: string[]}[];
    addOptionHandler: (i: number) => void;
    
}

export default function VendorElement ({addElementHandler, addCartoon,  addOptionHandler}: defaultProps) {
    return (
        <>
         <CartoonHeader />
        {addCartoon.map((element: any, index: any) => (
          <Box>
            <VendorNew addOptionHandler={() => addOptionHandler(index)} addCartoon={addCartoon}/>
     </Box>
     ))}
       
      <Button variant="outlined" onClick={() => addElementHandler()}>
        <AddIcon /> ADD ELEMENT
      </Button>
        </>
    )
}