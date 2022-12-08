import {
  Box,
  Grid,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";

export default function AddOption() {
  return (
    <>
      <Box display={"flex"} marginBottom="40px">
        <Grid container xs={12} maxWidth={"520px !important"}>
          <Grid alignItems={"center"} xs={3} minWidth="200px">
            <Typography marginLeft={2.5}>
              {/* {label + " " + (index + 1)} */} Option 1
            </Typography>
          </Grid>
          <Grid xs={6} minWidth="190px !important">
            <TextField
              id="outlined-basic"
              variant="outlined"
              style={{ minWidth: "17rem" }}
              //onChange={(e) => optionHandler(index, e)}
              //value={Options.option}
            />
          </Grid>
        </Grid>
        <Typography marginBottom="20px" marginRight={"30px"}>
          {" "}
          Value/Counter
        </Typography>
        <TextField
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
          id="outlined-basic"
          variant="outlined"
          style={{ minWidth: "14rem" }}
          // onChange={(e) => valueHandler(index, e)}
          // value={Options.value}
          type="number"
        />
      </Box>
    </>
  );
}
