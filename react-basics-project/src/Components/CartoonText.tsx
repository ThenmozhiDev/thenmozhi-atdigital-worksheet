import { Box, FormControl, InputAdornment, SelectChangeEvent, TextField, Typography } from "@mui/material";

interface propsData {
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  label: string;
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
        <Typography minWidth={"169px"}>{label}</Typography>
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
