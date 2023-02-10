import * as React from "react";

import { Container } from "@mui/system";
import { cartItems } from "../../data/carItems";
import { ItemDetail } from "../ItemDetail/ItemDetail";

//Get Columns
const columnsValues = Object.keys(cartItems[0]);
for (const column of columnsValues) {
  console.dir(column);
}

export function CartDetail() {
  return (
    <Container>
      <ItemDetail itemData={cartItems[0]}></ItemDetail>
    </Container>
  );
}
