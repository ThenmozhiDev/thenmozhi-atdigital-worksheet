import { Box, Button, Grid, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import CartoonDropdown from "./CartoonDropdown";
import CartoonText from "./CartoonText";
import { ChangeEvent, SetStateAction, useState } from "react";

interface defaultProps {
    handleChange: (i: number,
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

export default function CartoonDetails({handleChange}: defaultProps) {
  return (
    <>
      <Box
        style={{
          backgroundColor: "#f3f3f3",
          padding: "20px",
          justifyContent: "space-between",
          display: "flex",
          alignItems: "center"
        }}
      >
        <Typography variant="body1">Cartoon & Vendor Details</Typography>
        <Button variant="contained" style={{backgroundColor: "#004474"}} onClick={handleChange}>
          <AddIcon /> ADD VENDOR
        </Button>
      </Box>
     
      <Grid
        container
        xs={12}
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        <Grid item xs={6}>
          <CartoonDropdown text="Choose Vendor"/>
        </Grid>
        <Grid item xs={6}>
          <CartoonDropdown text="Choose Cartoon" />
        </Grid>
      </Grid>

      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        <Grid item xs={2} sm={4} md={4}>
          <CartoonText text="Full Body" />
        </Grid>
        <Grid item xs={2} sm={4} md={4}>
          <CartoonText text="Pre-made Bg"/>
        </Grid>
        <Grid item xs={2} sm={4} md={4}>
          <CartoonText text="Pet Full Body"/>
        </Grid>
      </Grid>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        <Grid item xs={2} sm={4} md={4}>
          <CartoonText text="Shoulder up"/>
        </Grid>
        <Grid item xs={2} sm={4} md={4}>
          <CartoonText text="Custom Bg"/>
        </Grid>
        <Grid item xs={2} sm={4} md={4}>
          <CartoonText text="Pet Shoulder up"/>
        </Grid>
      </Grid>
      
      
    </>
  );
}
