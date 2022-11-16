import { Box, Typography,TextField, Button, Grid,  } from "@mui/material";
import CartoonDropdown from "../CartoonDropdown";
import VendorOption from "./VendorOption";
import AddIcon from "@mui/icons-material/Add";


interface propsData {
    
    addOptionHandler: () => void;
    addOptions: string[];
}

export default function VendorNew({ addOptionHandler, addOptions }: propsData) {

    let Values = [
        { label: "Simpsons", value: "Simpsons" },
        { label: "One", value: "One" },
        { label: "Two", value: "Two" },
      ];
    //   let Dropdown = [
    //     {name: "Cartoon Body-Type"},
    //     {name: "Background-Type"},
    //     {name: "Pet Body-Type"}
    //   ]

    return (
        <>     
        <Grid container xs={12}>
            <Grid xs={6} >
     <CartoonDropdown label="Cartoon Body-Type" name="gcgf" Options={Values}/>
     </Grid>
     <Grid xs={6}>
     <Typography marginTop="45px" marginLeft="25px" >
          <Button variant="outlined" type="submit" onClick={addOptionHandler} style={{padding: "12px 25px"}} >
       <AddIcon /> ADD OPTION
          </Button>
        </Typography>
        </Grid>
     </Grid>
     <VendorOption addOptions={addOptions} addOptionHandler={addOptionHandler} label={"Options"}/>
    
     </>
    )
}