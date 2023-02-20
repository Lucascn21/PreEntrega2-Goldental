import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { useCartContext } from "../../context/CartContext";
import { toast } from "react-toastify";
export const CartItemList = (props) => {
  const cartContext = useCartContext();
  const rows = [];
  function createData(
    itemName,
    itemImage,
    price,
    itemSection,
    quantity,
    itemId
  ) {
    return { itemName, itemImage, price, itemSection, quantity, itemId };
  }

  for (const productData of props.children) {
    rows.push(
      createData(
        productData.item.itemName,
        productData.item.itemImage,
        productData.item.price,
        productData.item.itemSection,
        productData.quantity,
        productData.item.itemId
      )
    );
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Image</TableCell>
            <TableCell align="right">Unit Price&nbsp;($)</TableCell>
            <TableCell align="right">Total Price&nbsp;($)</TableCell>
            <TableCell align="right">Type</TableCell>
            <TableCell align="right">Quantity</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.itemName}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.itemName}
              </TableCell>
              <TableCell align="right">{row.itemImage}</TableCell>
              <TableCell align="right">&nbsp;${new Intl.NumberFormat("de-DE").format(row.price)}</TableCell>
              <TableCell align="right">&nbsp;${new Intl.NumberFormat("de-DE").format(row.price*row.quantity)}</TableCell>
              <TableCell align="right">{row.itemSection}</TableCell>
              <TableCell align="right">{row.quantity}</TableCell>
              <TableCell align="right">
                <Button
                  onClick={() => {
                    cartContext.removeFromCart(row.itemName);
                    cartContext.removeFromWidget(row.quantity);
                    toast.info(
                      `🦄 removed ${row.quantity} products from cart!`,
                      {
                        position: "top-center",
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                      }
                    );
                  }}
                  variant="outlined"
                  color="error"
                >
                  Remove
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
