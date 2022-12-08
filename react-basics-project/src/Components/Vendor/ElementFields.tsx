import { Button, Grid, Typography } from "@mui/material";
import CartoonDropdown from "../CartoonDropdown";
import AddIcon from "@mui/icons-material/Add";
import AddOption from "./AddOption";

interface optionProps {
    onChange: () => void;
    addOptions: {option: string; value: string}[];
}

export default function ElementFields({onChange, addOptions}: optionProps) {
  let Values = [
    { label: "Dropdown", value: "Dropdown" },
    { label: "One", value: "One" },
    { label: "Two", value: "Two" },
  ];
  return (
    <>
      <Grid container>
        <Grid xs={6}>
          <CartoonDropdown
            label="Cartoon Body-Type"
            name="vxcvx"
            Options={Values}
            // onChange={dropdownHandler}
          />
        </Grid>
        <Grid xs={6}>
          <Typography marginTop="45px" marginLeft="25px">
            <Button
              variant="outlined"
              type="submit"
              onClick={onChange}
              style={{ padding: "12px 25px" }}
            >
              <AddIcon /> ADD OPTION
            </Button>
          </Typography>
        </Grid>
      </Grid>
      {addOptions.map((element, index) => (
      <AddOption />
      ))}
    </>
  );
}
