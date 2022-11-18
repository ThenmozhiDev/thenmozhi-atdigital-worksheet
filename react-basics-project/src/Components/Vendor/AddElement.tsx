import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

export default function AddElement() {
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
      <Button variant="outlined" style={{ margin: "15px", padding: "10px" }}>
        <AddIcon /> ADD ELEMENT
      </Button>
    </>
  );
}
