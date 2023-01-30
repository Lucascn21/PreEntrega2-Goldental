import * as React from "react";
import Card from "@mui/material/Card";
import ItemDetail from "../ItemDetail/ItemDetail";
import ItemCount from "../ItemCount/ItemCount";

export default function Item(props) {
  return (
    <Card component="article">
      <ItemDetail itemData={props.itemData} />
      <ItemCount stock={props.itemData.stock} />
    </Card>
  );
}
