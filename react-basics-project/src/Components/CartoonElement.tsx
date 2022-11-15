import { Box, Grid } from "@mui/material";
import CartoonDropdown from "./CartoonDropdown";
import { componentProps } from "./CartoonMainComponent";
import CartoonText from "./CartoonText";

interface propsData {
  handleChange: (e: any) => void;
  element: componentProps;
}

export default function CartoonElement({ handleChange, element }: propsData) {
  let Options = [
    { label: "Turned Yellow", value: "Turned Yellow" },
    { label: "White", value: "White" },
    { label: "Blue", value: "blue" },
  ];
  let Values = [
    { label: "Simpsons", value: "Simpsons" },
    { label: "One", value: "One" },
    { label: "Two", value: "Two" },
  ];
  return (
    <>
      <Box>
        <Grid
          container
          xs={12}
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        >
          <Grid item xs={6}>
            <CartoonDropdown
              name={"Vendor"}
              label={"Choose Vendor"}
              onChange={handleChange}
              Value={element.Vendor}
              Options={Options}
             
            />
          </Grid>
          <Grid item xs={6}>
            <CartoonDropdown
              name={"Cartoon"}
              label={"Choose Cartoon"}
              onChange={handleChange}
              Value={element.Cartoon}
              Options={Values}
            />
          </Grid>
        </Grid>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <Grid item xs={2} sm={4} md={4} style={{ maxWidth: "415px" }}>
            <CartoonText
              name={"FullBody"}
              label="FullBody"
              onChange={handleChange}
              Value={element.FullBody}
            />
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <CartoonText
              name={"PreMadeBg"}
              label="Pre-made Bg"
              onChange={handleChange}
              Value={element.PreMadeBg}
            />
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <CartoonText
              name={"PetFullBody"}
              label="Pet Full Body"
              onChange={handleChange}
              Value={element.PetFullBody}
            />
          </Grid>
        </Grid>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <Grid item xs={2} sm={4} md={4} style={{ maxWidth: "415px" }}>
            <CartoonText
              name={"Shoulderup"}
              label="Shoulder up"
              onChange={handleChange}
              Value={element.Shoulderup}
            />
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <CartoonText
              name={"CustomBg"}
              label="Custom Bg"
              onChange={handleChange}
              Value={element.CustomBg}
            />
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <CartoonText
              name={"PetShoulderup"}
              label="Pet Shoulder up"
              onChange={handleChange}
              Value={element.PetShoulderup}
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
