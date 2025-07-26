// src/context/CartContext.js
import React, { createContext, useContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    if (!item || !item.name) {
      console.warn("Invalid item passed to addToCart:", item);
      return;
    }

    setCart((prevCart) => {
      const existingItem = prevCart.find((i) => i.name === item.name);
      if (existingItem) {
        return prevCart.map((i) =>
          i.name === item.name ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        return [...prevCart, { ...item, quantity: 1, status: "Pending" }];
      }
    });
  };

  const removeFromCart = (itemName) => {
    setCart((prevCart) => prevCart.filter((item) => item.name !== itemName));
  };

  const changeStatus = (itemName) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.name === itemName
          ? {
              ...item,
              status: item.status === "Pending" ? "Done" : "Pending",
            }
          : item
      )
    );
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, changeStatus }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
