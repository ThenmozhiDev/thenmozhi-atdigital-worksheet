import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ElementFields from "./ElementFields";

interface vendorprops {
  onChange: () => void;
  addElement: {
    CartoonType: string;
    Options: { option: string; value: string }[];
  }[];
  addOptionHandler: (i: number, j: number) => void;
}

export default function AddElement({
  onChange,
  addElement,
  addOptionHandler,
}: vendorprops) {
  return (
    <>
      <Box display={"flex"} marginTop={3} marginX={2.5}>
        <Grid container xs={12}>
          <Grid
            xs={3}
            display={"flex"}
            maxWidth="179px !important"
            alignItems={"center"}
          >
            <Typography>Cartoon Name</Typography>
          </Grid>
          <Grid xs={6}>
            <TextField
              id="outlined-basic"
              variant="outlined"
              style={{ minWidth: "17rem" }}
              //    onChange={onChange}
            />
          </Grid>
        </Grid>
      </Box>
      {addElement.map((element: any, index: any) => (
        <ElementFields
          onChange={() => addOptionHandler(index, element)}
          addOptions={addElement[index]["Options"]}
        />
      ))}
      <Button
        variant="outlined"
        style={{ margin: "15px", padding: "10px" }}
        onClick={onChange}
      >
        <AddIcon /> ADD ELEMENT
      </Button>
    </>
  );
}
