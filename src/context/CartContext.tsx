"use client";
import React, { createContext, useContext, useState, useCallback } from "react";

export interface Product {
  id: number;
  name: string;
  priceUSD: number;
  priceBOB: number;
  image: string;
  rating: number;
}

export interface CartItem extends Product {
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  currency: "USD" | "BOB";
  isOpen: boolean;
  addItem: (product: Product) => void;
  removeItem: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  toggleCurrency: () => void;
  openCart: () => void;
  closeCart: () => void;
  total: number;
  itemCount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [currency, setCurrency] = useState<"USD" | "BOB">("USD");
  const [isOpen, setIsOpen] = useState(false);

  const addItem = useCallback((product: Product) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.id === product.id);
      if (existing) {
        return prev.map((i) =>
          i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsOpen(true);
  }, []);

  const removeItem = useCallback((id: number) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
  }, []);

  const updateQuantity = useCallback((id: number, quantity: number) => {
    if (quantity <= 0) {
      setItems((prev) => prev.filter((i) => i.id !== id));
    } else {
      setItems((prev) =>
        prev.map((i) => (i.id === id ? { ...i, quantity } : i))
      );
    }
  }, []);

  const toggleCurrency = useCallback(() => {
    setCurrency((prev) => (prev === "USD" ? "BOB" : "USD"));
  }, []);

  const total = items.reduce((sum, item) => {
    const price = currency === "USD" ? item.priceUSD : item.priceBOB;
    return sum + price * item.quantity;
  }, 0);

  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        currency,
        isOpen,
        addItem,
        removeItem,
        updateQuantity,
        toggleCurrency,
        openCart: () => setIsOpen(true),
        closeCart: () => setIsOpen(false),
        total,
        itemCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within CartProvider");
  return context;
}
