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

  const getQuantityInCart = (item) => {
    return cart.get(item);
  };

  const addToWidget = (amount) => {
    setWidgetAmount(amount + WidgetAmount);
  };

  const removeFromWidget = (amount) => {
    setWidgetAmount(WidgetAmount - amount);
  };

  const removeFromCart = (itemName) => {
    console.dir("removing " + itemName);
    let newCart = cart;
    for (const item of newCart.entries()) {
      if (item[0].itemName === itemName) newCart.delete(item[0]);
    }
    setCart(newCart);
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
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};
