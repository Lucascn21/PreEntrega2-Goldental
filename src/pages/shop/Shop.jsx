import React from "react";
import { ItemListcontainer } from "../../components";
import Grid from "@mui/material/Unstable_Grid2";
export default function Shop(props) {
  return (
    <Grid  component="main" container spacing={1} xs="auto">
      <ItemListcontainer pageIndex={props.pageIndex}></ItemListcontainer>
    </Grid>
  );
}
