import React from "react";

const CartContext = React.createContext(); //Crear mi contexto
export const useCartContext = () => React.useContext(CartContext); //Me permite utilizar mi context

export const CartContextProvider = (props) => {
  const [cart, setCart] = React.useState(new Map());
  const [WidgetAmount, setWidgetAmount] = React.useState(0);

  const addToCart = (item, quantity) => {
    const newCart = cart;
    const itemsInCart = cart.get(item) || 0;
    newCart.set(item, quantity + itemsInCart);
    setCart(newCart);
  };

  const removeFromCart = (itemName) => {
    let newCart = cart;
    for (const item of newCart.entries()) {
      if (item[0].itemName === itemName) newCart.delete(item[0]);
    }
    setCart(newCart);
  };

  const setQuantityInCart = (item, quantity) => {
    const newCart = cart;
    newCart.set(item, quantity);
    setCart(newCart);
  };
  const getQuantityInCart = (item) => {
    return cart.get(item);
  };

  const emptyCart = () => {
    setWidgetAmount(0);
    setCart(new Map());
  };

  const addToWidget = (amount) => {
    setWidgetAmount(WidgetAmount + amount);
  };

  const removeFromWidget = (amount) => {
    setWidgetAmount(WidgetAmount - amount);
  };

  const getTotalPrice = () => {
    let total = 0;
    for (const itemInCart of cart) {
      total += itemInCart[0].price * itemInCart[1];
    }
    return total;
  };

  const cartAsArray = () => {
    let cartArray = [];
    for (const [item, quantity] of cart) {
      cartArray.push({ ...item, quantityInCart: quantity });
    }
    return cartArray;
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        getQuantityInCart,
        addToWidget,
        WidgetAmount,
        removeFromCart,
        removeFromWidget,
        setQuantityInCart,
        emptyCart,
        getTotalPrice,
        cartAsArray,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};
