import * as React from "react";
import { useContext } from "react";

import { ThemeProvider, createTheme } from "@mui/material/styles";

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });
export const useColorModeContext = () => useContext(ColorModeContext);

export const ThemeContextProvider = (props) => {
  const [mode, setMode] = React.useState("dark");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    [],
    mode
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === "light"
            ? {
                // palette values for light mode
                primary: {
                  main: "#1976d2",
                },
                secondary: {
                  main: "rgb(220, 0, 78)",
                },
                background: {
                  default: "#a8a8a8",
                  paper: "#efefef",
                },
              }
            : {
                // palette values for dark mode
                primary: {
                  main: "#90caf9",
                },
                secondary: {
                  main: "#f48fb1",
                },
                background: {
                  default: "#212121",
                  paper: "#424242",
                },
              }),
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
};
