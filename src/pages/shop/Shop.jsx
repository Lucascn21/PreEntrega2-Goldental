import React from "react";
import { ItemListcontainer } from "../../components/ItemList/ItemListcontainer";
import Grid from "@mui/material/Unstable_Grid2";
export default function Shop() {
  return (
    <Grid component="main" container spacing={1} xs="auto">
      <ItemListcontainer />
    </Grid>
  );
}
