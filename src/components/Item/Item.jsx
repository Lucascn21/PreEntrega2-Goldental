import * as React from "react";
import Card from "@mui/material/Card";
import ItemDetailContainer from "../ItemDetail/ItemDetailContainer";
import ItemCount from "../ItemCount/ItemCount";

export default function Item({itemData}) {
  return (
    <Card component="article">
      <ItemDetailContainer itemData={itemData} />
      <ItemCount stock={itemData.stock} />
    </Card>
  );
}
