"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Input } from "./ui/input";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { useCart } from "@/context/CartContext";
import { useAI } from "@/context/AIContext";
import {
  ShoppingCart,
  Search,
  Menu,
  X,
  Filter,
  TrendingUp,
  Bot,
  ChevronDown,
  Shield,
  BookOpen,
  Zap,
} from "lucide-react";
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
  const { setIsGlobalAIOpen } = useAI();
  const [searchQuery, setSearchQuery] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchResults, setSearchResults] = useState<typeof products>([]);
  const [showResults, setShowResults] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const mobileSearchInputRef = useRef<HTMLInputElement>(null);
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
  // Keyboard shortcut for search focus
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "/" && !e.ctrlKey && !e.metaKey && !e.altKey) {
        // Check if we're not already in an input field
        const activeElement = document.activeElement;
        if (
          activeElement?.tagName !== "INPUT" &&
          activeElement?.tagName !== "TEXTAREA"
        ) {
          e.preventDefault();
          // Focus desktop search on larger screens, mobile search on smaller screens
          if (window.innerWidth >= 768) {
            searchInputRef.current?.focus();
          } else {
            mobileSearchInputRef.current?.focus();
          }
        }
      }
    };

    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

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
  }, [showResults]);  return (
    <header className="bg-gradient-to-r from-[#9333EA] via-[#A855F7] to-[#9333EA] text-white sticky top-0 z-50 shadow-2xl backdrop-blur-sm border-b border-purple-300/20">
      <div className="container mx-auto px-4 py-5">
        <div className="flex justify-between items-center">
          {/* Enhanced Petty AI Button and Logo */}
          <div className="flex items-center gap-4">
            <Button
              onClick={() => setIsGlobalAIOpen(true)}
              className="bg-white/20 hover:bg-white/30 text-white border border-white/30 hover:border-white/50 transition-all duration-300 flex items-center gap-2 hover:scale-105 shadow-lg backdrop-blur-sm"
              variant="outline"
            >
              <Bot className="w-4 h-4" />
              <span className="hidden sm:inline font-medium">Petty AI</span>
            </Button>

            <div className="logo">
              <Link href="/">
                <h1 className="indie-flower-regular text-4xl font-bold text-white cursor-pointer hover:scale-105 transition-transform duration-300 drop-shadow-lg">
                  Petty
                </h1>
              </Link>
            </div>
          </div>

          {/* Modern Search Bar - Hidden on mobile */}
          <div className="search-bar hidden md:block flex-1 max-w-2xl mx-8">
            <div className="relative" onClick={(e) => e.stopPropagation()}>
              <form onSubmit={handleSearchSubmit}>
                <div className="relative group">
                  {/* Background with glass morphism effect */}
                  <div className="absolute inset-0 bg-purple-700/30 backdrop-blur-md rounded-2xl border border-purple-500/20 shadow-md transition-all duration-300 group-focus-within:bg-purple-600/40 group-focus-within:shadow-lg group-focus-within:scale-[1.01]"></div>

                  {/* Search Icon */}
                  <Search className="absolute left-3.5 top-1/2 transform -translate-y-1/2 text-white/70 w-4 h-4 transition-colors duration-200 group-focus-within:text-white" />

                  {/* Trending Icon */}
                  <TrendingUp className="absolute left-10 top-1/2 transform -translate-y-1/2 text-white/50 w-3.5 h-3.5" />

                  {/* Search Input */}
                  <Input
                    ref={searchInputRef}
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
              </form>
              {/* Modern Search Results Dropdown */}
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
                            {" "}
                            <div className="relative w-12 h-12 rounded-xl overflow-hidden mr-3 border-2 border-gray-100 group-hover:border-purple-200 transition-colors">
                              <Image
                                src={product.images[0]}
                                alt={product.name}
                                width={48}
                                height={48}
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
                                  <span className="text-xs text-gray-500">
                                    Popular
                                  </span>
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
                        onClick={() =>
                          router.push(
                            `/products?search=${encodeURIComponent(
                              searchQuery
                            )}`
                          )
                        }
                      >
                        View all results →
                      </button>
                    </div>
                  </div>
                </Card>
              )}
            </div>
          </div>          {/* Enhanced Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link
              href="/"
              className="text-white hover:text-purple-200 transition-all duration-300 text-lg font-medium hover:scale-105 relative group"
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
            </Link>
            <div className="relative group">
              <Link
                href="/products"
                className="text-white hover:text-purple-200 transition-all duration-300 flex items-center gap-1 text-lg font-medium group-hover:scale-105"
              >
                Products
                <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
              </Link>{/* Products Dropdown */}
              <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">                <div className="p-4 space-y-2">
                  <Link
                    href="/products"
                    className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded font-medium border-b border-gray-100 mb-2"
                  >
                    🐾 All Products
                  </Link>
                  <Link
                    href="/products?category=Dog Food"
                    className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded"
                  >
                    🐕 Dog Food & Treats
                  </Link>
                  <Link
                    href="/products?category=Cat Food"
                    className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded"
                  >
                    🐱 Cat Food & Treats
                  </Link>                  <button
                    onClick={() => {
                      // Create a toast-like notification
                      const notification = document.createElement('div');
                      notification.className = 'fixed top-20 right-4 bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 transition-all duration-300 transform translate-x-0';
                      notification.innerHTML = `
                        <div class="flex items-center gap-2">
                          <span>🎾</span>
                          <span>Toys & Entertainment will be available soon!</span>
                        </div>
                      `;
                      document.body.appendChild(notification);
                      setTimeout(() => {
                        notification.style.transform = 'translateX(100%)';
                        setTimeout(() => document.body.removeChild(notification), 300);
                      }, 3000);
                    }}
                    className="block w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded cursor-pointer"
                  >
                    🎾 Toys & Entertainment
                  </button>
                  <button
                    onClick={() => {
                      const notification = document.createElement('div');
                      notification.className = 'fixed top-20 right-4 bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 transition-all duration-300 transform translate-x-0';
                      notification.innerHTML = `
                        <div class="flex items-center gap-2">
                          <span>🥣</span>
                          <span>Bowls & Feeders will be available soon!</span>
                        </div>
                      `;
                      document.body.appendChild(notification);
                      setTimeout(() => {
                        notification.style.transform = 'translateX(100%)';
                        setTimeout(() => document.body.removeChild(notification), 300);
                      }, 3000);
                    }}
                    className="block w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded cursor-pointer"
                  >
                    🥣 Bowls & Feeders
                  </button>
                  <button
                    onClick={() => {
                      const notification = document.createElement('div');
                      notification.className = 'fixed top-20 right-4 bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 transition-all duration-300 transform translate-x-0';
                      notification.innerHTML = `
                        <div class="flex items-center gap-2">
                          <span>🛏️</span>
                          <span>Beds & Comfort will be available soon!</span>
                        </div>
                      `;
                      document.body.appendChild(notification);
                      setTimeout(() => {
                        notification.style.transform = 'translateX(100%)';
                        setTimeout(() => document.body.removeChild(notification), 300);
                      }, 3000);
                    }}
                    className="block w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded cursor-pointer"
                  >
                    🛏️ Beds & Comfort
                  </button>
                  <button
                    onClick={() => {
                      const notification = document.createElement('div');
                      notification.className = 'fixed top-20 right-4 bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 transition-all duration-300 transform translate-x-0';
                      notification.innerHTML = `
                        <div class="flex items-center gap-2">
                          <span>📱</span>
                          <span>Smart Pet Tech will be available soon!</span>
                        </div>
                      `;
                      document.body.appendChild(notification);
                      setTimeout(() => {
                        notification.style.transform = 'translateX(100%)';
                        setTimeout(() => document.body.removeChild(notification), 300);
                      }, 3000);
                    }}
                    className="block w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded cursor-pointer"
                  >
                    📱 Smart Pet Tech
                  </button>
                  <button
                    onClick={() => {
                      const notification = document.createElement('div');
                      notification.className = 'fixed top-20 right-4 bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 transition-all duration-300 transform translate-x-0';
                      notification.innerHTML = `
                        <div class="flex items-center gap-2">
                          <span>✂️</span>
                          <span>Grooming & Health will be available soon!</span>
                        </div>
                      `;
                      document.body.appendChild(notification);
                      setTimeout(() => {
                        notification.style.transform = 'translateX(100%)';
                        setTimeout(() => document.body.removeChild(notification), 300);
                      }, 3000);
                    }}
                    className="block w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded cursor-pointer"
                  >
                    ✂️ Grooming & Health
                  </button>
                </div>
              </div></div>            {/* Enhanced Pet Insurance with dropdown */}
            <div className="relative group">
              <Link
                href="/insurance"
                className="text-white hover:text-purple-200 transition-all duration-300 flex items-center gap-2 text-lg font-medium group-hover:scale-105"
              >
                <div className="p-1.5 bg-white/10 rounded-lg group-hover:bg-white/20 transition-all duration-300">
                  <Shield className="w-4 h-4" />
                </div>
                Pet Insurance
                <ChevronDown className="w-3 h-3 group-hover:rotate-180 transition-transform duration-300" />
              </Link>
              
              {/* Insurance Dropdown */}
              <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-2xl border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 transform translate-y-2 group-hover:translate-y-0">
                <div className="p-6">
                  <div className="text-sm font-semibold text-gray-800 mb-4 flex items-center gap-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                      <Shield className="w-4 h-4 text-white" />
                    </div>
                    Protect Your Pet Today
                  </div>
                  
                  <div className="space-y-3">
                    <div className="p-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-100 hover:border-blue-200 transition-colors cursor-pointer">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium text-gray-800">🐕 Dog Insurance</h4>
                          <p className="text-xs text-gray-600 mt-1">Starting from ₹99/month</p>
                        </div>
                        <div className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full font-medium">
                          Popular
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-3 bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg border border-pink-100 hover:border-pink-200 transition-colors cursor-pointer">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium text-gray-800">🐱 Cat Insurance</h4>
                          <p className="text-xs text-gray-600 mt-1">Starting from ₹79/month</p>
                        </div>
                        <div className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full font-medium">
                          Best Value
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-3 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg border border-yellow-100 hover:border-yellow-200 transition-colors cursor-pointer">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium text-gray-800">🐰 Exotic Pets</h4>
                          <p className="text-xs text-gray-600 mt-1">Custom plans available</p>
                        </div>
                        <div className="bg-orange-100 text-orange-700 text-xs px-2 py-1 rounded-full font-medium">
                          New
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2.5 rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-[1.02]">
                      Get Free Quote →
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Care Guides with dropdown */}
            <div className="relative group">
              <Link
                href="/care-guides"
                className="text-white hover:text-purple-200 transition-all duration-300 flex items-center gap-2 text-lg font-medium group-hover:scale-105"
              >
                <div className="p-1.5 bg-white/10 rounded-lg group-hover:bg-white/20 transition-all duration-300">
                  <BookOpen className="w-4 h-4" />
                </div>
                Care Guides
                <ChevronDown className="w-3 h-3 group-hover:rotate-180 transition-transform duration-300" />
              </Link>
              
              {/* Care Guides Dropdown */}
              <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-xl shadow-2xl border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 transform translate-y-2 group-hover:translate-y-0">
                <div className="p-6">
                  <div className="text-sm font-semibold text-gray-800 mb-4 flex items-center gap-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-teal-600 rounded-lg flex items-center justify-center">
                      <BookOpen className="w-4 h-4 text-white" />
                    </div>
                    Expert Pet Care Tips
                  </div>
                  
                  <div className="space-y-2">
                    <Link
                      href="/care-guides?category=nutrition"
                      className="block p-3 hover:bg-gradient-to-r hover:from-green-50 hover:to-teal-50 rounded-lg transition-all duration-200 group/item"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center group-hover/item:bg-green-200 transition-colors">
                          🥗
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-800 group-hover/item:text-green-700 transition-colors">Nutrition Guide</h4>
                          <p className="text-xs text-gray-600">Healthy feeding tips</p>
                        </div>
                      </div>
                    </Link>
                    
                    <Link
                      href="/care-guides?category=training"
                      className="block p-3 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 rounded-lg transition-all duration-200 group/item"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center group-hover/item:bg-blue-200 transition-colors">
                          🎯
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-800 group-hover/item:text-blue-700 transition-colors">Training Tips</h4>
                          <p className="text-xs text-gray-600">Behavior & obedience</p>
                        </div>
                      </div>
                    </Link>
                    
                    <Link
                      href="/care-guides?category=health"
                      className="block p-3 hover:bg-gradient-to-r hover:from-red-50 hover:to-pink-50 rounded-lg transition-all duration-200 group/item"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center group-hover/item:bg-red-200 transition-colors">
                          🩺
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-800 group-hover/item:text-red-700 transition-colors">Health Care</h4>
                          <p className="text-xs text-gray-600">Preventive medicine</p>
                        </div>
                      </div>
                    </Link>
                    
                    <Link
                      href="/care-guides?category=grooming"
                      className="block p-3 hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 rounded-lg transition-all duration-200 group/item"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center group-hover/item:bg-purple-200 transition-colors">
                          ✂️
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-800 group-hover/item:text-purple-700 transition-colors">Grooming</h4>
                          <p className="text-xs text-gray-600">Beauty & hygiene</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <Link
                      href="/care-guides"
                      className="block w-full text-center bg-gradient-to-r from-green-500 to-teal-600 text-white py-2.5 rounded-lg font-medium hover:from-green-600 hover:to-teal-700 transition-all duration-300 transform hover:scale-[1.02]"
                    >
                      View All Guides →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </nav>          {/* Enhanced Auto-Refill Promo Banner */}
          <div className="hidden xl:flex items-center gap-2 bg-gradient-to-r from-green-400 to-emerald-500 text-white px-4 py-2 rounded-full text-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer">
            <Zap className="w-4 h-4 animate-pulse" />
            <span className="font-medium">Auto-Refill Available!</span>
            <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
          </div>          {/* Enhanced Cart and Profile Section */}
          <div className="flex items-center gap-4">
            {/* Enhanced Cart Icon with Badge */}
            <Link href="/cart" className="relative group">
              <div className="p-2 rounded-lg hover:bg-white/10 transition-all duration-300 group-hover:scale-110">
                <ShoppingCart className="w-6 h-6 text-white hover:text-purple-200 transition-colors" />
              </div>
              {state.totalItems > 0 && (
                <Badge className="absolute -top-1 -right-1 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs rounded-full min-w-[20px] h-5 flex items-center justify-center shadow-lg animate-pulse">
                  {state.totalItems}
                </Badge>
              )}
            </Link>

            {/* Enhanced Clerk Authentication */}
            <div className="profile hidden md:flex items-center gap-3">
              <SignedOut>
                <SignInButton mode="modal">
                  <button className="text-sm bg-white text-purple-700 px-5 py-2.5 rounded-full cursor-pointer hover:bg-gray-100 transition-all duration-300 font-medium shadow-lg hover:shadow-xl hover:scale-105">
                    Sign In
                  </button>
                </SignInButton>
                <SignUpButton mode="modal">
                  <button className="text-sm bg-gradient-to-r from-purple-600 to-purple-700 text-white px-5 py-2.5 rounded-full cursor-pointer hover:from-purple-700 hover:to-purple-800 transition-all duration-300 border border-purple-400 font-medium shadow-lg hover:shadow-xl hover:scale-105">
                    Sign Up
                  </button>
                </SignUpButton>
              </SignedOut>
              <SignedIn>
                <div className="p-1 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300">
                  <UserButton
                    appearance={{
                      elements: {
                        avatarBox: "w-8 h-8 hover:scale-110 transition-transform duration-300",
                      },
                    }}
                  />
                </div>
              </SignedIn>
            </div>            {/* Enhanced Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-white/10 transition-all duration-300 hover:scale-110"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-white transition-transform duration-300 rotate-90" />
              ) : (
                <Menu className="w-6 h-6 text-white transition-transform duration-300" />
              )}
            </button>
          </div>
        </div>
        {/* Modern Mobile Search Bar */}
        <div className="md:hidden mt-4">
          <div className="relative" onClick={(e) => e.stopPropagation()}>
            <form onSubmit={handleSearchSubmit}>
              <div className="relative group">
                {/* Background with glass morphism effect */}
                <div className="absolute inset-0 bg-purple-700/30 backdrop-blur-md rounded-2xl border border-purple-500/20 shadow-md transition-all duration-300 group-focus-within:bg-purple-600/40 group-focus-within:shadow-lg"></div>

                {/* Search Icon */}
                <Search className="absolute left-3.5 top-1/2 transform -translate-y-1/2 text-white/70 w-4 h-4 transition-colors duration-200 group-focus-within:text-white" />

                {/* Trending Icon */}
                <TrendingUp className="absolute left-10 top-1/2 transform -translate-y-1/2 text-white/50 w-3.5 h-3.5" />

                {/* Search Input */}
                <Input
                  ref={mobileSearchInputRef}
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
                          {" "}
                          <div className="relative w-10 h-10 rounded-lg overflow-hidden mr-3 border-2 border-gray-100 group-hover:border-purple-200 transition-colors">
                            <Image
                              src={product.images[0]}
                              alt={product.name}
                              width={40}
                              height={40}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-200"
                            />
                            {index < 3 && (
                              <div className="absolute -top-1 -right-1 bg-gradient-to-r from-orange-400 to-red-500 text-white text-xs px-1 py-0.5 rounded-full font-medium">
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
                                <span className="text-xs text-gray-500">
                                  Popular
                                </span>
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
              </li>              <li>
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
                  href="/insurance"
                  className="block text-lg text-white hover:text-purple-200 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Pet Insurance
                </Link>
              </li>
              <li>
                <Link
                  href="/care-guides"
                  className="block text-lg text-white hover:text-purple-200 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Care Guides
                </Link>
              </li>
              <li>
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
            </ul>{" "}
          </nav>
        )}
      </div>
    </header>
  );
}
