import React, { useContext, useState, createContext } from "react";

// PUBLIC_INTERFACE
const CartContext = createContext();

// Demo cart state—replace with persistent/cart API if needed
export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

  // PUBLIC_INTERFACE
  const addToCart = (item) => {
    setCart((cart) => {
      const updated = [...cart, item];
      localStorage.setItem('cart', JSON.stringify(updated));
      return updated;
    });
  };

  // PUBLIC_INTERFACE
  const removeFromCart = (id) => {
    setCart((cart) => {
      const updated = cart.filter((i) => i.id !== id);
      localStorage.setItem('cart', JSON.stringify(updated));
      return updated;
    });
  };

  // PUBLIC_INTERFACE
  const clearCart = () => {
    setCart([]);
    localStorage.removeItem('cart');
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}

// PUBLIC_INTERFACE
export function useCart() {
  return useContext(CartContext);
}
