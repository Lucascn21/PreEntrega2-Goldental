import { useState, useEffect } from "react";
import { CartDetail } from "../CartDetail/CartDetail";
import { CartItemList } from "../CartDetail/CartItemList";
import { useCartContext } from "../../context/CartContext";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
export const CartDetailContainer = () => {
  const cartContext = useCartContext();
  const [cartItemsMap, setcartItemsMap] = useState(cartContext.cart);

  let elements = [];
  for (const [item, quantity] of [...cartItemsMap]) {
    elements.push({ quantity, item });
  }
  useEffect(() => {
    getItemsInCart(setcartItemsMap, cartItemsMap);
  }, [cartItemsMap]);
  return (
    <CartDetail>
      {!cartItemsMap.size ? (
        <Container maxWidth="sm">
          <Box sx={{ marginTop: "2rem", height: "100vh" }}>
            <Typography variant="h3" gutterBottom>
              Your cart is empty!
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Lets go back and find some great books for you to read.
            </Typography>
            <Typography variant="body1" gutterBottom>
              Books are the best! we can’t imagine a life without reading. Not
              only is reading imperative in this day and age, but it’s also
              entertaining. We hope our passion for books shows and helps you on
              your journey to a reading adventure.
            </Typography>
            <Typography variant="overline" display="block" gutterBottom>
              <Link href="/" underline="hover" color="primary">
                {"Back to shopping"}
              </Link>
            </Typography>
          </Box>
        </Container>
      ) : (
        <CartItemList>{elements.map((product) => product)}</CartItemList>
      )}
    </CartDetail>
  );
};

//Todo either navigate or render something else
const getItemsInCart = (setItem, cartItemsMap) => {
  setItem(cartItemsMap);
};
