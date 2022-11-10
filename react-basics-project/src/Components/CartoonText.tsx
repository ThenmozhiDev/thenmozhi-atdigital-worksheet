import { Box, FormControl, TextField, Typography } from "@mui/material";
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

export default function CartoonText(props: {text: string}) {
    return (
        <>
       
        <Box display={"flex"} style={{alignItems: "center"}} marginX={2.5}  marginY={2}>
        <Typography minWidth={"179px"}>{props.text}</Typography>
        <TextField id="outlined-basic" variant="outlined"  style={{maxWidth: "90px"}} value={"$"}/>
        </Box>
       
        </>
    )
}