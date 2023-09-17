import React from "react";
import { createContext, useState } from "react";
import { PRODUCTS } from "../products";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};

  for (let i = 1; i < PRODUCTS.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

const getTotalItems = (cartItems) => {
  let total = 0;

  for (let item in cartItems) {
    if (cartItems[item] > 0) {
      let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
      total += cartItems[item] * itemInfo.price;
    }
  }
  return total;
};

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const addToCart = (id) => {
    setCartItems((prevState) => {
      return { ...prevState, [id]: prevState[id] + 1 };
    });
  };

  const removeFromCart = (id) => {
    setCartItems((prevState) => {
      return { ...prevState, [id]: prevState[id] - 1 };
    });
  };

  const updateCart = (id, count) => {
    setCartItems((prevState) => {
      return { ...prevState, [id]: count };
    });
  };

  const contextValue = { cartItems, addToCart, removeFromCart, updateCart, getTotalItems };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
