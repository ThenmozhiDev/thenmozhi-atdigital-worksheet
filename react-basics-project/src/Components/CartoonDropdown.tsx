import {
  Box,
  FormControl,
  Grid,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { OperationCanceledException } from "typescript";

interface defaultProps {
  onChange?: (e: any) => void;
  label: any;
  Value?: string;
  name: string;
  Options: { label: string; value: string }[];
}

export default function CartoonDropdown({
  onChange,
  label,
  Value,
  name,
  Options,
}: defaultProps) {
  return (
    <>
      <FormControl fullWidth>
        <Box display="flex" marginX={2.5} marginY={5}>
          <Grid container xs={12} style={{ alignItems: "center" }}>
            <Grid xs={3}>
              <Typography
                id="demo-simple-select-label"
                style={{ alignItems: "center" }}
              >
                {label}
              </Typography>
            </Grid>
            <Grid xs={6}>
              <Select
                id="demo-simple-select"
                style={{ minWidth: "270px" }}
                onChange={onChange}
                value={Value}
                name={name}
              >
                {Options.map((Option) => (
                  <MenuItem value={Option.value}>{Option.label}</MenuItem>
                ))}
              </Select>
            </Grid>
          </Grid>
        </Box>
      </FormControl>
    </>
  );
}
