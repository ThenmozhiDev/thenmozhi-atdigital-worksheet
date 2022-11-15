import { Box, FormControl, InputAdornment, TextField, Typography } from "@mui/material";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

interface propsData {
  onChange: (e: any) => void;
  label: any;
  name: string;
  Value?: string;
}

export default function CartoonText({ label, onChange, name, Value }: propsData) {
  return (
    <>
      <Box
        display={"flex"}
        style={{ alignItems: "center" }}
        marginX={2.5}
        marginY={2}
      >
        <Typography minWidth={"179px"}>{label}</Typography>
        <TextField
          InputProps= {{startAdornment: <InputAdornment position="start">$</InputAdornment>}}
          type="number"
          id="outlined-basic"
          variant="outlined"
          style={{ maxWidth: "150px" }}
          onChange={onChange}
          name={name}
          value={Value}
        />
      </Box>
    </>
  );
}
