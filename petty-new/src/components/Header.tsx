"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Input } from "./ui/input";
import { Badge } from "./ui/badge";
import { useCart } from "@/context/CartContext";
import { GlobalAIAssistant } from "@/components/GlobalAIAssistant";
import { ShoppingCart, Search, Menu, X, Filter, TrendingUp, Bot } from "lucide-react";
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
  const { state } = useCart();
  const [isGlobalAIOpen, setIsGlobalAIOpen] = useState(false);const [searchQuery, setSearchQuery] = useState("");
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
          </div>          {/* Modern Search Bar - Hidden on mobile */}
          <div className="search-bar hidden md:block flex-1 max-w-2xl mx-8">
            <div className="relative" onClick={(e) => e.stopPropagation()}>
              <form onSubmit={handleSearchSubmit}>
                <div className="relative group">                  {/* Background with glass morphism effect */}
                  <div className="absolute inset-0 bg-purple-700/30 backdrop-blur-md rounded-2xl border border-purple-500/20 shadow-md transition-all duration-300 group-focus-within:bg-purple-600/40 group-focus-within:shadow-lg group-focus-within:scale-[1.01]"></div>
                  
                  {/* Search Icon */}
                  <Search className="absolute left-3.5 top-1/2 transform -translate-y-1/2 text-white/70 w-4 h-4 transition-colors duration-200 group-focus-within:text-white" />
                  
                  {/* Trending Icon */}
                  <TrendingUp className="absolute left-10 top-1/2 transform -translate-y-1/2 text-white/50 w-3.5 h-3.5" />
                    {/* Search Input */}
                  <Input
                    type="text"
                    placeholder="Discover trending pet foods..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="relative z-10 pl-16 pr-16 py-3 w-full bg-transparent border-none text-white placeholder-white/80 text-sm font-medium focus:outline-none focus:ring-0 rounded-2xl"
                  />
                  
                  {/* Filter Button */}
                  <button
                    type="button"
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1.5 text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200"
                  >
                    <Filter className="w-4 h-4" />
                  </button>
                    {/* Search suggestion badge - positioned differently */}
                  {searchQuery.length > 0 && (
                    <div className="absolute right-11 top-1/2 transform -translate-y-1/2">
                      <span className="text-xs text-white bg-purple-500/60 px-1.5 py-0.5 rounded-full">
                        {searchResults.length}
                      </span>
                    </div>
                  )}
                </div>
              </form>              {/* Modern Search Results Dropdown */}
              {showResults && searchResults.length > 0 && (
                <Card className="absolute z-50 w-full mt-2 max-h-[400px] overflow-y-auto bg-white/90 backdrop-blur-lg shadow-2xl border border-purple-300/20 rounded-2xl">
                  <div className="p-2">
                    <div className="text-xs text-gray-500 mb-2 px-3 py-2 bg-gray-50 rounded-lg">
                      🔥 Trending Results
                    </div>
                    <ul className="space-y-1">
                      {searchResults.map((product, index) => (
                        <li
                          key={product.id}
                          className="px-3 py-3 hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 cursor-pointer rounded-xl transition-all duration-200 group border border-transparent hover:border-purple-100"
                          onClick={() => handleProductClick(product.id)}
                        >
                          <div className="flex items-center">
                            <div className="relative w-12 h-12 rounded-xl overflow-hidden mr-3 border-2 border-gray-100 group-hover:border-purple-200 transition-colors">
                              <img
                                src={product.images[0]}
                                alt={product.name}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-200"
                              />
                              {index < 3 && (
                                <div className="absolute -top-1 -right-1 bg-gradient-to-r from-orange-400 to-red-500 text-white text-xs px-1.5 py-0.5 rounded-full font-medium">
                                  #{index + 1}
                                </div>
                              )}
                            </div>
                            <div className="flex-1">
                              <p className="text-gray-800 text-sm font-medium truncate group-hover:text-purple-700 transition-colors">
                                {product.name}
                              </p>
                              <div className="flex items-center justify-between mt-1">
                                <p className="text-purple-600 text-sm font-semibold">
                                  ₹{product.price}
                                </p>
                                <div className="flex items-center space-x-1">
                                  <TrendingUp className="w-3 h-3 text-green-500" />
                                  <span className="text-xs text-gray-500">Popular</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-2 pt-2 border-t border-gray-100">
                      <button 
                        className="w-full text-center text-sm text-purple-600 hover:text-purple-700 font-medium py-2 rounded-lg hover:bg-purple-50 transition-colors"
                        onClick={() => router.push(`/products?search=${encodeURIComponent(searchQuery)}`)}
                      >
                        View all results →
                      </button>
                    </div>
                  </div>
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
              </li>              <li>
                <Link
                  href="/profile"
                  className="text-lg text-white hover:text-purple-200 transition-colors"
                >
                  Profile
                </Link>
              </li>
            </ul>
          </nav>          {/* Cart and Profile Section */}
          <div className="flex items-center gap-4">
            {/* AI Assistant */}
            <button
              onClick={() => setIsGlobalAIOpen(!isGlobalAIOpen)}
              className="relative p-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 group"
              title="Ask Petty AI"
            >
              <Bot className="w-5 h-5 text-white group-hover:text-purple-200 transition-colors" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white animate-pulse"></div>
            </button>

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
        </div>        {/* Modern Mobile Search Bar */}
        <div className="md:hidden mt-4">
          <div className="relative" onClick={(e) => e.stopPropagation()}>
            <form onSubmit={handleSearchSubmit}>
              <div className="relative group">                {/* Background with glass morphism effect */}
                <div className="absolute inset-0 bg-purple-700/30 backdrop-blur-md rounded-2xl border border-purple-500/20 shadow-md transition-all duration-300 group-focus-within:bg-purple-600/40 group-focus-within:shadow-lg"></div>
                
                {/* Search Icon */}
                <Search className="absolute left-3.5 top-1/2 transform -translate-y-1/2 text-white/70 w-4 h-4 transition-colors duration-200 group-focus-within:text-white" />
                
                {/* Trending Icon */}
                <TrendingUp className="absolute left-10 top-1/2 transform -translate-y-1/2 text-white/50 w-3.5 h-3.5" />
                  {/* Search Input */}
                <Input
                  type="text"
                  placeholder="Discover trending pet foods..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="relative z-10 pl-16 pr-16 py-3 w-full bg-transparent border-none text-white placeholder-white/80 text-sm font-medium focus:outline-none focus:ring-0 rounded-2xl"
                />
                
                {/* Filter Button */}
                <button
                  type="button"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1.5 text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200"
                >
                  <Filter className="w-4 h-4" />
                </button>
                  {/* Search suggestion badge - for mobile */}
                {searchQuery.length > 0 && (
                  <div className="absolute right-11 top-1/2 transform -translate-y-1/2">
                    <span className="text-xs text-white bg-purple-500/60 px-1.5 py-0.5 rounded-full">
                      {searchResults.length}
                    </span>
                  </div>
                )}
              </div>
            </form>            
            {/* Modern Mobile Search Results Dropdown */}
            {showResults && searchResults.length > 0 && (
              <Card className="absolute z-50 w-full mt-2 max-h-[350px] overflow-y-auto bg-white/90 backdrop-blur-lg shadow-2xl border border-purple-300/20 rounded-2xl">
                <div className="p-2">
                  <div className="text-xs text-gray-500 mb-2 px-3 py-2 bg-gray-50 rounded-lg">
                    🔥 Trending Results
                  </div>
                  <ul className="space-y-1">
                    {searchResults.map((product, index) => (
                      <li 
                        key={product.id}
                        className="px-3 py-3 hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 cursor-pointer rounded-xl transition-all duration-200 group border border-transparent hover:border-purple-100"
                        onClick={() => handleProductClick(product.id)}
                      >
                        <div className="flex items-center">
                          <div className="relative w-10 h-10 rounded-lg overflow-hidden mr-3 border-2 border-gray-100 group-hover:border-purple-200 transition-colors">
                            <img 
                              src={product.images[0]} 
                              alt={product.name} 
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-200" 
                            />
                            {index < 3 && (
                              <div className="absolute -top-1 -right-1 bg-gradient-to-r from-orange-400 to-red-500 text-white text-xs px-1 py-0.5 rounded-full font-medium">
                                #{index + 1}
                              </div>
                            )}
                          </div>
                          <div className="flex-1">
                            <p className="text-gray-800 text-sm font-medium truncate group-hover:text-purple-700 transition-colors">{product.name}</p>
                            <div className="flex items-center justify-between mt-1">
                              <p className="text-purple-600 text-sm font-semibold">₹{product.price}</p>
                              <div className="flex items-center space-x-1">
                                <TrendingUp className="w-3 h-3 text-green-500" />
                                <span className="text-xs text-gray-500">Popular</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
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
              </li>              <li>
                <Link
                  href="/profile"
                  className="block text-lg text-white hover:text-purple-200 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Profile
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
            </ul>          </nav>
        )}

        {/* Global AI Assistant */}
        <GlobalAIAssistant
          mode="general"
          isOpen={isGlobalAIOpen}
          onToggle={() => setIsGlobalAIOpen(!isGlobalAIOpen)}
          buttonText="Ask Petty AI"
          className="hidden" // Hide the button since we have our custom one
        />
      </div>
    </header>
  );
}
