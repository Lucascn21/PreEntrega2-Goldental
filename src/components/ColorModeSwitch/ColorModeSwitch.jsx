import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useColorModeContext } from "../../context/ColorModeContext";
import { useTheme } from "@mui/material";
export const ColorModeSwitch = () => {
  const ColorModeContext = useColorModeContext();
  const { palette } = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        color: "text.primary",
      }}
    >
      <IconButton
        sx={{ ml: 1 }}
        onClick={() => {
          ColorModeContext.toggleColorMode();
        }}
        color="inherit"
      >
        {palette.mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
    </Box>
  );
};
