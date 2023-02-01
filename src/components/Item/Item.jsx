import * as React from "react";
import Card from "@mui/material/Card";
import ItemDetailContainer from "../ItemDetail/ItemDetailContainer";
import ItemCount from "../ItemCount/ItemCount";

export default function Item({ itemData }) {
  return (
    <Card component="article">
      <ItemDetailContainer itemIdValue={itemData.itemId} />
      <ItemCount stock={itemData.stock} />
    </Card>
  );
}
