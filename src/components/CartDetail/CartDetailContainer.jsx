import { useState, useEffect } from "react";
import { CartDetail } from "../CartDetail/CartDetail";

import { useCartContext } from "../../context/CartContext";

export const CartDetailContainer = () => {
  const cartContext = useCartContext();
  const [cartItemsMap, setcartItemsMap] = useState(cartContext.cart);

  useEffect(() => {
    setcartItemsMap(cartItemsMap);
  }, [cartItemsMap]);

  return <CartDetail cartItemsMap={cartItemsMap}></CartDetail>;
};
