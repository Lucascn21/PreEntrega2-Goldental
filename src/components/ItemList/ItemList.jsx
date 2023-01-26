import React from "react";
import "./ItemListContainer.scss";
import { Item } from "../";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";

const ItemMUI = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

/*
Container component that Receives a Shop or Cart Component as a children to render
This component will be used as a Container Component in Shop and Cart.
*/
export default function ItemList(props) {
  return (
    <>
      {props.filteredItems.map((item, index) => (
        <Grid key={item.id} component="section" xs={12} md={3}>
          <ItemMUI>
            <Item itemSection={props.pageIndex} itemData={item}>
              test
            </Item>
          </ItemMUI>
        </Grid>
      ))}
    </>
  );
}
