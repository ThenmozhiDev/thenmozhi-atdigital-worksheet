import { Box, Typography, TextField, Button, Grid } from "@mui/material";
import CartoonDropdown from "../CartoonDropdown";
import VendorOption from "./VendorOption";
import AddIcon from "@mui/icons-material/Add";
import { ChangeEvent } from "react";

interface propsData {
  dropdownHandler: (e: any) => void;
  addOptionHandler: () => void;
  addOptions: { option: string; value: string }[];
  optionHandler: (
    i: number,
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  valueHandler: (
    i: number,
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

export default function VendorNew({
  addOptionHandler,
  addOptions,
  dropdownHandler,
  optionHandler,
  valueHandler,
}: propsData) {
  let Values = [
    { label: "Dropdown", value: "Dropdown" },
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
      <Grid container>
        <Grid xs={6}>
          <CartoonDropdown
            label="Cartoon Body-Type"
            name="vxcvx"
            Options={Values}
            onChange={dropdownHandler}
            
          />
          
        </Grid>
        <Grid xs={6}>
          <Typography marginTop="45px" marginLeft="25px">
            <Button
              variant="outlined"
              type="submit"
              onClick={addOptionHandler}
              style={{ padding: "12px 25px" }}
            >
              <AddIcon /> ADD OPTION
            </Button>
          </Typography>
        </Grid>
      </Grid>
      <VendorOption
        addOptions={addOptions}
        addOptionHandler={addOptionHandler}
        label={"Options"}
        optionHandler={optionHandler}
        valueHandler={valueHandler}
      />
    </>
  );
}
