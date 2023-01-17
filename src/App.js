import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavBar } from "./components";
import { Shop, Cart, Mission, Contact } from "./pages";

import * as React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import pages from "./data/pages";

export default function App() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? "dark" : "light",
        },
      }),
    [prefersDarkMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<Shop />}></Route>
            {pages.map((page) => (
              <Route
                key={page}
                path={page}
                element={<Shop pageIndex={page} />}
              ></Route>
            ))}
            <Route path="/cart" element={<Cart />}></Route>
            <Route path="/mission" element={<Mission />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
          </Routes>
        </Router>
      </>
    </ThemeProvider>
  );
}
