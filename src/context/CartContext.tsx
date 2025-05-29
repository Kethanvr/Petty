"use client";

import React, { createContext, useContext, useReducer, useEffect } from "react";
import { Product } from "../lib/products";

export interface CartItem {
  product: Product;
  quantity: number;
  selectedQuantity: string;
  selectedAge: string;
}

interface CartState {
  items: CartItem[];
  totalItems: number;
  totalPrice: number;
}

type CartAction =
  | {
      type: "ADD_TO_CART";
      payload: {
        product: Product;
        quantity: number;
        selectedQuantity: string;
        selectedAge: string;
      };
    }
  | { type: "REMOVE_FROM_CART"; payload: { productId: number } }
  | {
      type: "UPDATE_QUANTITY";
      payload: { productId: number; quantity: number };
    }
  | { type: "CLEAR_CART" }
  | { type: "LOAD_CART"; payload: CartState };

const initialState: CartState = {
  items: [],
  totalItems: 0,
  totalPrice: 0,
};

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const { product, quantity, selectedQuantity, selectedAge } =
        action.payload;
      const existingItem = state.items.find(
        (item) =>
          item.product.id === product.id &&
          item.selectedQuantity === selectedQuantity &&
          item.selectedAge === selectedAge
      );

      let updatedItems;
      if (existingItem) {
        updatedItems = state.items.map((item) =>
          item.product.id === product.id &&
          item.selectedQuantity === selectedQuantity &&
          item.selectedAge === selectedAge
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        updatedItems = [
          ...state.items,
          { product, quantity, selectedQuantity, selectedAge },
        ];
      }

      const totalItems = updatedItems.reduce(
        (sum, item) => sum + item.quantity,
        0
      );
      const totalPrice = updatedItems.reduce(
        (sum, item) => sum + item.product.price * item.quantity,
        0
      );

      return {
        items: updatedItems,
        totalItems,
        totalPrice,
      };
    }

    case "REMOVE_FROM_CART": {
      const updatedItems = state.items.filter(
        (item) => item.product.id !== action.payload.productId
      );
      const totalItems = updatedItems.reduce(
        (sum, item) => sum + item.quantity,
        0
      );
      const totalPrice = updatedItems.reduce(
        (sum, item) => sum + item.product.price * item.quantity,
        0
      );

      return {
        items: updatedItems,
        totalItems,
        totalPrice,
      };
    }

    case "UPDATE_QUANTITY": {
      const { productId, quantity } = action.payload;
      let updatedItems;

      if (quantity <= 0) {
        updatedItems = state.items.filter(
          (item) => item.product.id !== productId
        );
      } else {
        updatedItems = state.items.map((item) =>
          item.product.id === productId ? { ...item, quantity } : item
        );
      }

      const totalItems = updatedItems.reduce(
        (sum, item) => sum + item.quantity,
        0
      );
      const totalPrice = updatedItems.reduce(
        (sum, item) => sum + item.product.price * item.quantity,
        0
      );

      return {
        items: updatedItems,
        totalItems,
        totalPrice,
      };
    }

    case "CLEAR_CART":
      return initialState;

    case "LOAD_CART":
      return action.payload;

    default:
      return state;
  }
};

interface CartContextType {
  state: CartState;
  addToCart: (
    product: Product,
    quantity: number,
    selectedQuantity: string,
    selectedAge: string
  ) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem("petty-cart");
    if (savedCart) {
      try {
        const cartData = JSON.parse(savedCart);
        dispatch({ type: "LOAD_CART", payload: cartData });
      } catch (error) {
        console.error("Error loading cart from localStorage:", error);
      }
    }
  }, []);

  // Save cart to localStorage whenever state changes
  useEffect(() => {
    localStorage.setItem("petty-cart", JSON.stringify(state));
  }, [state]);

  const addToCart = (
    product: Product,
    quantity: number,
    selectedQuantity: string,
    selectedAge: string
  ) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: { product, quantity, selectedQuantity, selectedAge },
    });
  };

  const removeFromCart = (productId: number) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: { productId } });
  };

  const updateQuantity = (productId: number, quantity: number) => {
    dispatch({ type: "UPDATE_QUANTITY", payload: { productId, quantity } });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  return (
    <CartContext.Provider
      value={{ state, addToCart, removeFromCart, updateQuantity, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
