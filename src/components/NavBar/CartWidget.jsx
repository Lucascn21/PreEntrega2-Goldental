import React from "react";
import Box from "@mui/material/Box";
import Badge from "@mui/material/Badge";
import Tooltip from "@mui/material/Tooltip";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link as RouterLink } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";

export const CartWidget = () => {
  const cartContext = useCartContext();
  return (
    <Box component={RouterLink} to="/Cart" sx={{ flexGrow: 0, color: "white" }}>
      <Tooltip title="Open cart">
        <Badge
          badgeContent={cartContext.WidgetAmount}
          color="error"
          overlap="circular"
        >
          <ShoppingCartIcon sx={{ p: 0 }} />
        </Badge>
      </Tooltip>
    </Box>
  );
};
