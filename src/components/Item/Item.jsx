import * as React from "react";
import Card from "@mui/material/Card";
import { ItemDetailContainer } from "../ItemDetail/ItemDetailContainer";

export const Item = ({ itemID }) => {
  return (
    <Card>
      <ItemDetailContainer itemID={itemID} />
    </Card>
  );
};
