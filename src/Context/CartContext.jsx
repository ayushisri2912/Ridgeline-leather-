import React, { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([
    {
      id: "demo-1",
      name: "The Explorer Full-Grain Weekender Duffel",
      price: 385,
      image: "baggs.jpg", // initial demo items matching Image 1 vibe
      color: "Dark Walnut",
      size: "Standard (45L)",
      quantity: 1,
    },
    {
      id: "demo-2",
      name: "Artisan Leather Cartridge Shell Pouch",
      price: 115,
      image: "cartridge_pouch.jpg",
      color: "Cognac",
      size: "Standard",
      quantity: 1,
    },
  ]);

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [quickAddProduct, setQuickAddProduct] = useState(null);

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);

  const openQuickAdd = (product) => setQuickAddProduct(product);
  const closeQuickAdd = () => setQuickAddProduct(null);

  const addToCart = (product, selectedColor, selectedSize, qty = 1) => {
    setCartItems((prevItems) => {
      const itemColor = selectedColor || (product.colors ? product.colors[0]?.name || product.colors[0] : "Default");
      const itemSize = selectedSize || (product.sizes ? product.sizes[0] : "Standard");
      const itemId = `${product.id}-${itemColor}-${itemSize}`;

      const existingIndex = prevItems.findIndex((item) => item.id === itemId);

      if (existingIndex > -1) {
        const updated = [...prevItems];
        updated[existingIndex].quantity += qty;
        return updated;
      } else {
        return [
          ...prevItems,
          {
            id: itemId,
            productId: product.id,
            name: product.name || product.title,
            price: product.price,
            image: product.image || product.mainImage,
            color: typeof itemColor === "string" ? itemColor : itemColor.name || "Default",
            size: itemSize,
            quantity: qty,
          },
        ];
      }
    });

    closeQuickAdd();
    openCart();
  };

  const removeFromCart = (itemId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  const updateQuantity = (itemId, delta) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) => {
          if (item.id === itemId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean)
    );
  };

  const totalItemsCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const freeShippingThreshold = 150;
  const shippingProgress = Math.min(100, (subtotal / freeShippingThreshold) * 100);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        totalItemsCount,
        subtotal,
        freeShippingThreshold,
        shippingProgress,
        isCartOpen,
        openCart,
        closeCart,
        quickAddProduct,
        openQuickAdd,
        closeQuickAdd,
        addToCart,
        removeFromCart,
        updateQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
