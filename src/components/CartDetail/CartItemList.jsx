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
import { Checkout } from "../Checkout/Checkout";
import Link from "@mui/material/Link";
export const CartItemList = () => {
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

  for (const productData of cartContext.cart) {
    rows.push(
      createData(
        productData.itemName,
        productData.itemImage,
        productData.price,
        productData.itemSection,
        productData.quantityInCart,
        productData.itemId
      )
    );
  }

  return (
    <>
      <TableContainer sx={{ marginTop: "2rem" }} component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Image</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Unit Price</TableCell>
              <TableCell>Total Price</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Quantity</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
         
            {rows.map((row) => (
              <TableRow
                key={row.itemName}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>
                  <img
                    width={"100rem"}
                    height={"100rem"}
                    src={row.itemImage}
                    alt={row.itemName}
                  />
                </TableCell>
                <TableCell component="th">{row.itemName}</TableCell>
                <TableCell>
                  &nbsp;${new Intl.NumberFormat("de-DE").format(row.price)}
                </TableCell>
                <TableCell>
                  &nbsp;$
                  {new Intl.NumberFormat("de-DE").format(
                    row.price * row.quantity
                  )}
                </TableCell>
                <TableCell>{row.itemSection}</TableCell>
                <TableCell>{row.quantity}</TableCell>
                <TableCell>
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
            <TableRow>
              <TableCell colSpan={2}>Total</TableCell>
              <TableCell align="right">
                &nbsp;$
                {new Intl.NumberFormat("de-DE").format(
                  cartContext.getTotalPrice()
                )}
              </TableCell>

              <TableCell colSpan={2} align="right">
                {cartContext.WidgetAmount} Items
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <Checkout></Checkout>
      <Link href="/" underline="hover" color="primary">
        {"Back to shopping"}
      </Link>
    </>
  );
};
