import { useState, useEffect } from "react";
import { CartDetail } from "../CartDetail/CartDetail";
import { CartItemList } from "../CartDetail/CartItemList";
import { useNavigate } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
export const CartDetailContainer = () => {
  const cartContext = useCartContext();
  const [cartItemsMap, setcartItemsMap] = useState(cartContext.cart);

  let elements = [];
  for (const [item, quantity] of [...cartItemsMap]) {
    elements.push({ quantity, item });

  }
  let navigate = useNavigate();
  useEffect(() => {
    getItemsInCart(setcartItemsMap, cartItemsMap, navigate);
  }, [cartItemsMap, navigate]);
  return (
    <CartDetail>
      <CartItemList>{elements.map((product) => product)}</CartItemList>
    </CartDetail>
  );
};

//Todo either navigate or render something else
const getItemsInCart = (setItem, cartItemsMap, navigate) => {
  if (!cartItemsMap) navigate("/not-found");
  setItem(cartItemsMap);
};
