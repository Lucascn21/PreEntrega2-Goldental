import * as React from "react";
import Card from "@mui/material/Card";
import ItemDetailContainer from "../ItemDetail/ItemDetailContainer";
import ItemCount from "../ItemCount/ItemCount";

export default function Item(props) {
  return (
    <Card component="article">
      <ItemDetailContainer itemData={props.itemData} />
      <ItemCount stock={props.itemData.stock} />
    </Card>
  );
}
