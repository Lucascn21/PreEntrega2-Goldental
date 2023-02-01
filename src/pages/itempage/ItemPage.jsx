import React from "react";
import { ItemDetailContainer } from "../../components";
import { useParams } from "react-router-dom";
import Grid from "@mui/material/Unstable_Grid2";
export default function ItemPage() {
  const { itemId } = useParams();
  return (
    <Grid component="main" container spacing={1} xs="auto">
      <ItemDetailContainer itemIdValue={itemId} />
    </Grid>
  );
}
