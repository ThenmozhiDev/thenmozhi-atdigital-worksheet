import { Button, Typography} from "@mui/material";
import { useState } from "react";

import VendorElement from "./VendorElement";


export default function VendorMainComponent () {

    const [addCartoon, setAddCartoon] = useState<{CartoonName: "", CartoonType: "", Options: string[]}[]>([]);
   

const addElementHandler = () => {
    setAddCartoon([...addCartoon, {CartoonName: "", CartoonType: "", Options: []}]);
}

const addOptionHandler = (i: number) => {
    console.log(i);
    let addNewOption = [...addCartoon];
    
    addNewOption[i]["Options"] = [...addCartoon[i]["Options"], ""];
    setAddCartoon(addNewOption);
    console.log(addNewOption);
}

    return (
        <>
        <VendorElement  addElementHandler={addElementHandler} addCartoon={addCartoon} addOptionHandler={addOptionHandler} />
        <Typography marginTop="30px" marginLeft="25px">
          <Button variant="contained" type="submit">
            SUBMIT
          </Button>
        </Typography>
        </>
    )
}