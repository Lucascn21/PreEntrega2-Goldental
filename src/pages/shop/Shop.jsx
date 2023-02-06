import React from "react";
import { ItemListcontainer } from "../../components/ItemList/ItemListcontainer";
import Grid from "@mui/material/Unstable_Grid2";
export const Shop = () => {
  return (
    <Grid id="shop-main" component="main" container spacing={1} xs="auto">
      <ItemListcontainer />
    </Grid>
  );
};
