import React from "react";
import Box from "@mui/material/Box";

import { ColorModeSwitch } from "../ColorModeSwitch/ColorModeSwitch";
export const ColorModeWidget = () => {
  return (
    <Box sx={{ flexGrow: 0, color: "white" }}>
      <ColorModeSwitch />
    </Box>
  );
};
