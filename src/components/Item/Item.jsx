import * as React from "react";
import Card from "@mui/material/Card";
import { ItemDetailContainer } from "../ItemDetail/ItemDetailContainer";

export const Item = ({ itemData }) => {
  return (
    <Card component="article">
      <ItemDetailContainer itemIdValue={itemData.itemId} />
    </Card>
  );
};
