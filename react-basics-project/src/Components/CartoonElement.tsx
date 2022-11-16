import { Box, Grid, SelectChangeEvent } from "@mui/material";
import CartoonDropdown from "./CartoonDropdown";
import { componentProps } from "./CartoonMainComponent";
import CartoonText from "./CartoonText";

interface propsData {
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | SelectChangeEvent<string> ) => void;
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

  let CartoonTextElement = [
    {name: "FullBody", label: "Full Body", Value: (element.FullBody)},
    {name: "PreMadeBg", label: "Pre-made Bg", Value: (element.PreMadeBg)},
    {name: "PetFullBody", label: "Pet Full Body", Value: (element.PetFullBody)},
    {name: "Shoulderup", label: "Shoulder up", Value: (element.Shoulderup)},
    {name: "CustomBg", label: "Custom Bg", Value: (element.CustomBg)},
    {name: "PetShoulderup", label: "Pet Shoulder up", Value: (element.PetShoulderup)},
  ]

  

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
          {CartoonTextElement.map((element, index) => (
          <Grid item xs={2} sm={4} md={4} style={{ maxWidth: "415px" }}>
            <CartoonText
              name={element.name}
              label={element.label}
              onChange={handleChange}
              Value={element.Value}
              key={index}
            />
          </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}
