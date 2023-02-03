import React from "react";
import { ItemListcontainer } from "../../components/ItemList/ItemListcontainer";
import Grid from "@mui/material/Unstable_Grid2";
export const Shop = () => {
  return (
    <Grid component="main" container spacing={1} xs="auto">
      <ItemListcontainer />
    </Grid>
  );
}
