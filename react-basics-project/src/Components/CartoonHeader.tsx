import { Box, Button, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

interface addVendorProps {
    onChange: () => void;
}


export default function CartoonHeader({onChange}: addVendorProps) {
  return (
    <Box
      style={{
        backgroundColor: "#f3f3f3",
        padding: "20px",
        justifyContent: "space-between",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Typography variant="body1">Cartoon & Vendor Details</Typography>
      <Button variant="contained" style={{ backgroundColor: "#004474" }} onClick={onChange}>
        <AddIcon /> ADD VENDOR
      </Button>
    </Box>
  );
}
