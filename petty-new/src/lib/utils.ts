import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Product } from "./products";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function searchProducts(products: Product[], query: string): Product[] {
  if (!query || query.trim() === '') {
    return products;
  }
  
  const lowercaseQuery = query.toLowerCase().trim();
  
  return products.filter(product => {
    return (
      product.name.toLowerCase().includes(lowercaseQuery) ||
      product.brand.toLowerCase().includes(lowercaseQuery) ||
      product.category.toLowerCase().includes(lowercaseQuery) ||
      product.description.toLowerCase().includes(lowercaseQuery)
    );
  });
}
