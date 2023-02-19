import * as React from "react";
import Card from "@mui/material/Card";
import { ItemDetailContainer } from "../ItemDetail/ItemDetailContainer";

export const Item = ({ itemData }) => {
  return (
    <Card>
      <ItemDetailContainer
        itemIdValue={`${itemData.book.itemName.toLowerCase()}-${
          itemData.book.itemSection
        }`}
      />
    </Card>
  );
};
