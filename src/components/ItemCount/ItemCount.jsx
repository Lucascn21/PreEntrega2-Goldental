import React, { useState } from "react";
import { Button, CardActions } from "@mui/material";
import { styled } from "@mui/material/styles";

import { toast } from "react-toastify";

const Div = styled("div")(({ theme }) => ({
  ...theme.typography.button,
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(1),
}));

export const ItemCount = ({ stock, onAdd }) => {
  const [stockCount, setStockCount] = useState(1);
  const add = () => stockCount < stock && setStockCount(stockCount + 1);
  const remove = () => stockCount > 1 && setStockCount(stockCount - 1);
  const isStocked = (stock) => stock < 1;
  const isStockEnough = (stock) => stock - stockCount < 0;
  const isEqualAboveStock = (value, stock) => value >= stock;
  const cantRemove = (stockCount) => stockCount === 1;
  const addToCart = () => {
    onAdd(stockCount);
    toast.success(`🦄 added ${stockCount} products to cart!`, {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };
  return (
    <CardActions sx={{ flexWrap: "wrap", justifyContent: "center" }}>
      <Button
        onClick={() => {
          add();
        }}
        size="small"
        color="primary"
        disabled={isStocked(stock) || isEqualAboveStock(stockCount, stock)}
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
        disabled={isStocked(stock) || cantRemove(stockCount, stock)}
      >
        -
      </Button>
      <Button
        onClick={() => {
          addToCart(stockCount);
        }}
        sx={{ flex: "auto", width: "100%" }}
        size="large"
        color="primary"
        disabled={isStocked(stock) || isStockEnough(stock)}
      >
        Add to cart
      </Button>
    </CardActions>
  );
};
