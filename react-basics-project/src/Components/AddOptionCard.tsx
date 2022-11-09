import { Box, Button, Typography } from "@mui/material";

interface defaultProps {
  onChange: () => void;
}
export default function AddOptionCard({ onChange }: defaultProps) {
  return (
    <>
      <Box
        marginLeft={3}
        border="1px solid black"
        padding={2}
        width={"100%"}
        maxHeight="100rem"
        maxWidth={"234px"}
      >
        <Typography>
          <Button
            variant="contained"
            style={{ top: "150px", left: "50px" }}
            onClick={onChange}
          >
            ADD OPTION
          </Button>
        </Typography>
      </Box>
    </>
  );
}
