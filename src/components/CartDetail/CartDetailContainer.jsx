import { CartDetail } from "../CartDetail/CartDetail";

import { useCartContext } from "../../context/CartContext";

export const CartDetailContainer = () => {
  const { cart } = useCartContext();
  return <CartDetail cartItemsTotal={cart.length}></CartDetail>;
};
