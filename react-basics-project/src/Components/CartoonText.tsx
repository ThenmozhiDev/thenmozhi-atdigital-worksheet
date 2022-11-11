import { Box, FormControl, TextField, Typography } from "@mui/material";
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

interface propsData {
    onChange: (e: any) => void;
    props: any;
    Value: string | Number;
}

export default function CartoonText({props, onChange, Value}: propsData ) {
    return (
        <>
        <Box display={"flex"} style={{alignItems: "center"}} marginX={2.5}  marginY={2} >
        <Typography minWidth={"179px"}>{props}</Typography>
        <TextField id="outlined-basic" variant="outlined"  style={{maxWidth: "90px"}} onChange={onChange} value={"$" }/>
        </Box>     
        </>
    )
}