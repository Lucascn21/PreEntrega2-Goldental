import React, { useState } from "react";
import { Button, CardActions } from "@mui/material";
import { styled } from "@mui/material/styles";

const Div = styled("div")(({ theme }) => ({
  ...theme.typography.button,
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(1),
}));

export default function ItemCount({ stock }) {
  const [stockCount, setStockCount] = useState(1);
  const add = () => stockCount < stock && setStockCount(stockCount + 1);
  const remove = () => stockCount > 1 && setStockCount(stockCount - 1);
  const isStocked = (stock) => stock < 1;
  return (
    <CardActions sx={{justifyContent:'center'}}>
      <Button
        onClick={() => {
          add();
        }}
        size="small"
        color="primary"
        disabled={isStocked(stock)}

      >
        +
      </Button>
      <Div>{isStocked(stock) ? "no stock" : `${stockCount} / ${stock}`}</Div>
      <Button
        onClick={() => {
          remove();
        }}
        size="small"
        color="primary"
        disabled={isStocked(stock)}
      >
        -
      </Button>
    </CardActions>
  );
}
