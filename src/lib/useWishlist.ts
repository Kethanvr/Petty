import { useState, useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import { products } from "./products";

export interface WishlistItem {
  id: number;
  name: string;
  price: number;
  image: string;
  addedDate: string;
}

export const useWishlist = () => {
  const { user } = useUser();
  const [wishlist, setWishlist] = useState<WishlistItem[]>([]);

  const getStorageKey = () => `petty_${user?.id}_wishlist`;

  // Load wishlist from localStorage
  useEffect(() => {
    if (user?.id) {
      const saved = localStorage.getItem(getStorageKey());
      if (saved) {
        setWishlist(JSON.parse(saved));
      }
    }
  }, [user?.id]);

  // Save to localStorage
  const saveToStorage = (newWishlist: WishlistItem[]) => {
    if (user?.id) {
      localStorage.setItem(getStorageKey(), JSON.stringify(newWishlist));
    }
  };

  // Add item to wishlist
  const addToWishlist = (productId: number) => {
    const product = products.find(p => p.id === productId);
    if (product && !wishlist.find(item => item.id === productId)) {
      const newItem: WishlistItem = {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.images[0] || "/pet-animals-hero.jpg",
        addedDate: new Date().toISOString(),
      };
      const newWishlist = [...wishlist, newItem];
      setWishlist(newWishlist);
      saveToStorage(newWishlist);
      return true;
    }
    return false;
  };

  // Remove item from wishlist
  const removeFromWishlist = (productId: number) => {
    const newWishlist = wishlist.filter(item => item.id !== productId);
    setWishlist(newWishlist);
    saveToStorage(newWishlist);
  };

  // Check if item is in wishlist
  const isInWishlist = (productId: number) => {
    return wishlist.some(item => item.id === productId);
  };

  // Toggle item in wishlist
  const toggleWishlist = (productId: number) => {
    if (isInWishlist(productId)) {
      removeFromWishlist(productId);
      return false;
    } else {
      return addToWishlist(productId);
    }
  };

  // Clear entire wishlist
  const clearWishlist = () => {
    setWishlist([]);
    if (user?.id) {
      localStorage.removeItem(getStorageKey());
    }
  };

  return {
    wishlist,
    addToWishlist,
    removeFromWishlist,
    isInWishlist,
    toggleWishlist,
    clearWishlist,
    wishlistCount: wishlist.length,
  };
};
