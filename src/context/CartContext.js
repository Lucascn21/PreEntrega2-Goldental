import React from "react";

const CartContext = React.createContext(); //Crear mi contexto
export const useCartContext = () => React.useContext(CartContext); //Me permite utilizar mi context

export const CartContextProvider = (props) => {
  const [cart, setCart] = React.useState(new Map());

  const addToCart = (itemId, quantity) => {
    const newCart = cart;
    const itemsInCart = cart.get(itemId) || 0;

    newCart.set(itemId, quantity + itemsInCart);
    setCart(newCart);
  };
  const getQuantityInCart = (itemId) => {
    return cart.get(itemId);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, getQuantityInCart }}>
      {props.children}
    </CartContext.Provider>
  );
};
