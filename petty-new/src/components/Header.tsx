"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Input } from "./ui/input";
import { Badge } from "./ui/badge";
import { useCart } from "@/context/CartContext";
import { ShoppingCart, Search, Menu, X } from "lucide-react";
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { products } from "@/lib/products";
import { Card } from "./ui/card";
import { searchProducts } from "@/lib/utils";

export default function Header() {
  const { state } = useCart();  const [searchQuery, setSearchQuery] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchResults, setSearchResults] = useState<typeof products>([]);
  const [showResults, setShowResults] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (searchQuery.trim() !== "") {
      const results = searchProducts(products, searchQuery);
      setSearchResults(results.slice(0, 5)); // Limit to 5 results for dropdown
      setShowResults(true);
    } else {
      setSearchResults([]);
      setShowResults(false);
    }
  }, [searchQuery]);
  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchQuery.trim() !== "") {
      router.push(`/products?search=${encodeURIComponent(searchQuery)}`);
      setShowResults(false);
    }
  };

  const handleProductClick = (id: number) => {
    router.push(`/products/${id}`);
    setSearchQuery("");
    setShowResults(false);
  };

  const handleOutsideClick = () => {
    setShowResults(false);
  };

  useEffect(() => {
    if (showResults) {
      document.addEventListener("click", handleOutsideClick);
    }
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [showResults]);
  return (
    <header className="bg-[#9333EA] text-white sticky top-0 z-50 shadow-lg backdrop-blur-sm">
      <div className="container mx-auto px-4 py-5">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="logo">
            <Link href="/">
              <h1 className="indie-flower-regular text-4xl font-bold text-white cursor-pointer">
                Petty
              </h1>
            </Link>
          </div>

          {/* Search Bar - Hidden on mobile */}
          <div className="search-bar hidden md:block flex-1 max-w-md mx-8">
            <div className="relative" onClick={(e) => e.stopPropagation()}>
              <form onSubmit={handleSearchSubmit}>                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input
                    type="text"
                    placeholder="Search pet foods..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 pr-4 py-2 w-full rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-300 text-black text-sm placeholder-white"
                  />
                </div>
              </form>

              {/* Search Results Dropdown */}
              {showResults && searchResults.length > 0 && (
                <Card className="absolute z-50 w-full mt-1 max-h-[300px] overflow-y-auto bg-white shadow-lg rounded-md">
                  <ul className="py-1">
                    {searchResults.map((product) => (
                      <li
                        key={product.id}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                        onClick={() => handleProductClick(product.id)}
                      >
                        <div className="flex items-center">
                          <div className="w-10 h-10 border rounded overflow-hidden mr-2">
                            <img
                              src={product.images[0]}
                              alt={product.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div>
                            <p className="text-gray-800 text-sm truncate">
                              {product.name}
                            </p>
                            <p className="text-gray-500 text-xs">
                              ₹{product.price}
                            </p>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </Card>
              )}
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:block">
            <ul className="flex gap-6 items-center">
              <li>
                <Link
                  href="/"
                  className="text-lg text-white hover:text-purple-200 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-lg text-white hover:text-purple-200 transition-colors"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-lg text-white hover:text-purple-200 transition-colors"
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-lg text-white hover:text-purple-200 transition-colors"
                >
                  Contact us
                </Link>
              </li>
              <li>
                <Link
                  href="/work-with-us"
                  className="text-lg text-white hover:text-purple-200 transition-colors"
                >
                  Work with us
                </Link>
              </li>
            </ul>
          </nav>

          {/* Cart and Profile Section */}
          <div className="flex items-center gap-4">
            {/* Cart Icon with Badge */}
            <Link href="/cart" className="relative">
              <ShoppingCart className="w-6 h-6 text-white hover:text-purple-200 transition-colors" />
              {state.totalItems > 0 && (
                <Badge className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full min-w-[20px] h-5 flex items-center justify-center">
                  {state.totalItems}
                </Badge>
              )}
            </Link>

            {/* Clerk Authentication */}
            <div className="profile hidden md:flex items-center gap-2">
              <SignedOut>
                <SignInButton mode="modal">
                  <button className="text-sm bg-white text-black px-4 py-2 rounded-full cursor-pointer hover:bg-gray-100 transition-colors">
                    Sign In
                  </button>
                </SignInButton>
                <SignUpButton mode="modal">
                  <button className="text-sm bg-purple-600 text-white px-4 py-2 rounded-full cursor-pointer hover:bg-purple-700 transition-colors border border-purple-400">
                    Sign Up
                  </button>
                </SignUpButton>
              </SignedOut>
              <SignedIn>
                <UserButton
                  appearance={{
                    elements: {
                      avatarBox: "w-8 h-8",
                    },
                  }}
                />
              </SignedIn>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-white" />
              ) : (
                <Menu className="w-6 h-6 text-white" />
              )}
            </button>
          </div>
        </div>        {/* Mobile Search Bar */}
        <div className="md:hidden mt-4">
          <div className="relative" onClick={(e) => e.stopPropagation()}>
            <form onSubmit={handleSearchSubmit}>
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search pet foods..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 w-full rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-300 text-black text-sm placeholder-white"
              />
            </form>
            
            {/* Mobile Search Results Dropdown */}
            {showResults && searchResults.length > 0 && (
              <Card className="absolute z-50 w-full mt-1 max-h-[300px] overflow-y-auto bg-white shadow-lg rounded-md">
                <ul className="py-1">
                  {searchResults.map((product) => (
                    <li 
                      key={product.id}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => handleProductClick(product.id)}
                    >
                      <div className="flex items-center">
                        <div className="w-10 h-10 border rounded overflow-hidden mr-2">
                          <img 
                            src={product.images[0]} 
                            alt={product.name} 
                            className="w-full h-full object-cover" 
                          />
                        </div>
                        <div>
                          <p className="text-gray-800 text-sm truncate">{product.name}</p>
                          <p className="text-gray-500 text-xs">₹{product.price}</p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </Card>
            )}
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4">
            <ul className="flex flex-col gap-4">
              <li>
                <Link
                  href="/"
                  className="block text-lg text-white hover:text-purple-200 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="block text-lg text-white hover:text-purple-200 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="block text-lg text-white hover:text-purple-200 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="block text-lg text-white hover:text-purple-200 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact us
                </Link>
              </li>
              <li>
                <Link
                  href="/work-with-us"
                  className="block text-lg text-white hover:text-purple-200 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Work with us
                </Link>
              </li>

              {/* Mobile Authentication */}
              <li className="pt-4 border-t border-purple-400">
                <SignedOut>
                  <div className="flex flex-col gap-2">
                    <SignInButton mode="modal">
                      <button className="text-sm bg-white text-black px-4 py-2 rounded-full cursor-pointer hover:bg-gray-100 transition-colors w-fit">
                        Sign In
                      </button>
                    </SignInButton>
                    <SignUpButton mode="modal">
                      <button className="text-sm bg-purple-600 text-white px-4 py-2 rounded-full cursor-pointer hover:bg-purple-700 transition-colors border border-purple-400 w-fit">
                        Sign Up
                      </button>
                    </SignUpButton>
                  </div>
                </SignedOut>
                <SignedIn>
                  <UserButton
                    appearance={{
                      elements: {
                        avatarBox: "w-8 h-8",
                      },
                    }}
                  />
                </SignedIn>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}
