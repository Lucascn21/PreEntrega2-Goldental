import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { Container } from "@mui/system";

export const Loading = () => {
  return (
    <Container fixed>
      <CircularProgress
        sx={{ marginTop: "25%" }}
        color="success"
        size="10rem"
      />
    </Container>
  );
};
