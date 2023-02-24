import * as React from "react";
import Card from "@mui/material/Card";
import { ItemDetailContainer } from "../ItemDetail/ItemDetailContainer";

export const Item = ({ itemID }) => {
  return (
    <Card
      sx={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <ItemDetailContainer itemID={itemID} />
    </Card>
  );
};
