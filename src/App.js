import * as React from "react";
import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar/NavBar";
import { Shop, Cart, Mission, Contact, ItemPage, NotFound } from "./pages";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useMediaQuery from "@mui/material/useMediaQuery";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

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
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <Router>
          <NavBar />
          <Routes>
            <Route path="/" to="/home" element={<Shop />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
            <Route path="/mission" element={<Mission />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/item/:itemId" element={<ItemPage />}></Route>
            <Route path="category/:categoryId" element={<Shop />}></Route>
            <Route path="/not-found" element={<NotFound />}></Route>
          </Routes>
        </Router>
      </ThemeProvider>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
}
