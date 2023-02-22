import React from "react";

const CartContext = React.createContext(); //Crear mi contexto
export const useCartContext = () => React.useContext(CartContext); //Me permite utilizar mi context

export const CartContextProvider = (props) => {
  const [cart, setCart] = React.useState([]);
  const [WidgetAmount, setWidgetAmount] = React.useState(0);

  const addToCart = (item, quantity) => {
    if (itemExistsInCart(item.id)) {
      const index = cart.findIndex((itemInCart) => itemInCart.id === item.id);
      const newCart = [...cart];
      newCart[index].quantityInCart += quantity;
      setCart(newCart);
    } else {
      const prodCart = {
        ...item,
        quantityInCart: quantity,
      };
      setCart([...cart, prodCart]);
    }
  };
  const itemExistsInCart = (itemId) => {
    return cart.find((itemInCart) => itemInCart.id === itemId);
  };

  const removeFromCart = (itemName) => {
    const newCart = cart.filter((item) => item.itemName !== itemName);
    setCart(newCart);
  };

  const setQuantityInCart = (item, quantity) => {
    const newCart = cart;
    newCart.set(item, quantity);
    setCart(newCart);
  };
  const getQuantityInCart = (itemId) => {
    return itemExistsInCart(itemId);
  };

  const emptyCart = () => {
    setWidgetAmount(0);
    setCart([]);
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
      total += itemInCart.price * itemInCart.quantityInCart;
    }
    return total;
  };

  const cartAsArray = () => {
    return cart;
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
