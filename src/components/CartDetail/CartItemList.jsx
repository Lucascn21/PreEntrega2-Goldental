import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
export const CartItemList = (props) => {
  function createData(itemName, itemImage, price, itemSection, quantity) {
    return { itemName, itemImage, price, itemSection, quantity };
  }

  const rows = [];

  for (const productData of props.children) {
    rows.push(
      createData(
        productData.item.itemName,
        productData.item.itemImage,
        productData.item.price,
        productData.item.itemSection,
        productData.quantity
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
            <TableCell align="right">Price&nbsp;($)</TableCell>
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
              <TableCell align="right">{row.price}</TableCell>
              <TableCell align="right">{row.itemSection}</TableCell>
              <TableCell align="right">{row.quantity}</TableCell>
              <TableCell align="right">
                <Button variant="outlined" color="error">
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
