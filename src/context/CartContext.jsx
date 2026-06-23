import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    try { return JSON.parse(localStorage.getItem('iqra_cart')) || []; }
    catch { return []; }
  });

  useEffect(() => {
    localStorage.setItem('iqra_cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === product.id && i.categoryId === product.categoryId);
      if (existing) return prev.map(i =>
        i.id === product.id && i.categoryId === product.categoryId
          ? { ...i, qty: i.qty + 1 } : i
      );
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const removeFromCart = (id, categoryId) =>
    setCart(prev => prev.filter(i => !(i.id === id && i.categoryId === categoryId)));

  const updateQty = (id, categoryId, qty) => {
    if (qty < 1) return removeFromCart(id, categoryId);
    setCart(prev => prev.map(i =>
      i.id === id && i.categoryId === categoryId ? { ...i, qty } : i
    ));
  };

  const clearCart = () => setCart([]);

  const totalItems = cart.reduce((sum, i) => sum + i.qty, 0);
  const totalPrice = cart.reduce((sum, i) => {
    const num = parseFloat(i.price.replace(/[₹,]/g, ''));
    return sum + (isNaN(num) ? 0 : num * i.qty);
  }, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQty, clearCart, totalItems, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
};
