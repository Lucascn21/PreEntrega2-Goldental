import React from "react";

import Box from "@mui/material/Box";

import Badge from "@mui/material/Badge";

import Tooltip from "@mui/material/Tooltip";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link as RouterLink } from "react-router-dom";

function CartWidget(props) {
  return (
    <Box component={RouterLink} to="/Cart" sx={{ flexGrow: 0, color: "white" }}>
      <Tooltip title="Open cart">
        <Badge badgeContent={props.cartValue} color="error" overlap="circular">
          <ShoppingCartIcon sx={{ p: 0 }} />
        </Badge>
      </Tooltip>
    </Box>
  );
}

export default CartWidget;
