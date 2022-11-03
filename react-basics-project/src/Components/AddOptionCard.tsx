import { Box, Button, TextField, Typography } from "@mui/material";
import { ChangeEvent, useState } from "react";
import OptionCard from "./OptionCard";
// interface defaultProps  {
//     onchange: (e: ) => void;
//   }
export default function AddOptionCard(){

    const [addOptions, setAddOptions] = useState<{Name: string}[]>([]);


     let addOptionHandler = () => {
       setAddOptions([...addOptions,  { Name: ""}]);
    }
return (
<>
 {addOptions.map((element, index) => (
     <OptionCard />
))} 
        <Box
          marginLeft={3}
          border="1px solid black"
          padding={2}
          width={"100%"}
          height={"323px"}
          maxWidth={"234px"}
        >
           
          <Typography>
            <Button
              variant="contained"
              style={{ top: "150px", left: "50px" }}
             onClick={(e)=> addOptionHandler()}
            >
              ADD OPTION
            </Button>
          </Typography>
        </Box>
        </>

        )
        }