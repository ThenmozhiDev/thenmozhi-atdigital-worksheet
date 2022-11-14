import { Box, Grid } from "@mui/material";
import CartoonDropdown from "./CartoonDropdown";
import CartoonText from "./CartoonText";

interface propsData {
  handleChange: (e: any) => void;
  element: {
    Vendor: string;
    Cartoon: string;
    FullBody: string ;
    PreMadeBg: string ;
    PetFullBody: string;
    Shoulderup: string;
    CustomBg: string;
    PetShoulderup: string;
  };
 
}

export default function CartoonElement({ handleChange, element }: propsData) {
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
              props={"Choose Vendor"}
              onChange={handleChange}
              Vendor={element.Vendor}
            />
          </Grid>
          <Grid item xs={6}>
            <CartoonDropdown
             name={"Cartoon"}
              props={"Choose Cartoon"}
              onChange={handleChange}
              Vendor={element.Cartoon}
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
            name={"Full Body"}
              props="FullBody"
              onChange={handleChange}
              Value={element.FullBody}
            />
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <CartoonText
            name={"PremadeBg"}
              props="Pre-made Bg"
              onChange={handleChange}
              Value={element.PreMadeBg}
            />
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <CartoonText
            name={"PetFullBody"}
              props="Pet Full Body"
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
            name={"shoulderup"}
              props="Shoulder up"
              onChange={handleChange}
              Value={element.Shoulderup}
            />
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <CartoonText
            name={"CustonBg"}
              props="Custom Bg"
              onChange={handleChange}
              Value={element.CustomBg}
            />
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <CartoonText
            name={"Pershoulderup"}
              props="Pet Shoulder up"
              onChange={handleChange}
              Value={element.PetShoulderup}
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
