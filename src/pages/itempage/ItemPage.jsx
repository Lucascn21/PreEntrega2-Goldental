import React from "react";
import { ItemDetailContainer } from "../../components";
import { useParams } from "react-router-dom";
import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";

const ItemMUI = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  justifyContent: "center",
}));

export default function ItemPage(props) {
  const { itemId } = useParams();
  return (
    <Container maxWidth="sm">
      <Grid
        sx={{ alignItems: "center", justifyContent: "center" }}
        component="main"
        container
        spacing={1}
        xs="auto"
      >
        <Grid xs={12}>
          <ItemMUI>
            <ItemDetailContainer itemIdValue={itemId} />
          </ItemMUI>
        </Grid>
      </Grid>
    </Container>
  );
}
