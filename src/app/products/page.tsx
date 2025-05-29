"use client";

import React, { useState, useEffect, useCallback, useMemo, Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import { products, Product } from "@/lib/products";
import { searchProducts } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GlobalAIAssistant } from "@/components/GlobalAIAssistant";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/lib/useWishlist";
import { Star, Filter, Grid, List, Heart, Eye, ShoppingCart, Zap, Award, Truck, X, ChevronLeft, ChevronRight, Menu } from "lucide-react";
import { useSearchParams } from "next/navigation";

function ProductsContent() {
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("search") || "";
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);
  const [isProductsAIOpen, setIsProductsAIOpen] = useState(false);
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  
  // Quick View Modal state
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
    // Filter states
  const [filters, setFilters] = useState({
    categories: [] as string[],
    priceRanges: [] as string[],
    brands: [] as string[],
    ratings: [] as number[],
    petTypes: [] as string[],
    specialFeatures: [] as string[],
    targetLife: [] as string[],
    inStock: false,
  });

  const [sortBy, setSortBy] = useState("bestSelling");

  // Get unique values for filters
  const uniqueCategories = [...new Set(products.map(p => p.category))];
  const uniqueBrands = [...new Set(products.map(p => p.brand))];
  const uniquePetTypes = [...new Set(products.map(p => p.petType))];
  const uniqueSpecialFeatures = [...new Set(products.flatMap(p => p.specialFeatures))];
  const uniqueTargetLife = [...new Set(products.flatMap(p => p.targetLife))];
  const priceRanges = useMemo(() => [
    { label: "Under ₹500", min: 0, max: 500 },
    { label: "₹500 - ₹1000", min: 500, max: 1000 },
    { label: "₹1000 - ₹2000", min: 1000, max: 2000 },
    { label: "Above ₹2000", min: 2000, max: Infinity },
  ], []);
  // Filter function
  const applyFilters = useCallback(() => {
    let filtered = products;

    // Search filter
    if (searchQuery) {
      filtered = searchProducts(filtered, searchQuery);
    }

    // Category filter
    if (filters.categories.length > 0) {
      filtered = filtered.filter(p => filters.categories.includes(p.category));
    }

    // Brand filter
    if (filters.brands.length > 0) {
      filtered = filtered.filter(p => filters.brands.includes(p.brand));
    }

    // Pet type filter
    if (filters.petTypes.length > 0) {
      filtered = filtered.filter(p => filters.petTypes.includes(p.petType));
    }

    // Price range filter
    if (filters.priceRanges.length > 0) {
      filtered = filtered.filter(p => {
        return filters.priceRanges.some(range => {
          const priceRange = priceRanges.find(pr => pr.label === range);
          if (priceRange) {
            return p.price >= priceRange.min && p.price < priceRange.max;
          }
          return false;
        });
      });
    }

    // Rating filter
    if (filters.ratings.length > 0) {
      filtered = filtered.filter(p => filters.ratings.some(rating => p.rating >= rating));
    }

    // Special features filter
    if (filters.specialFeatures.length > 0) {
      filtered = filtered.filter(p => 
        filters.specialFeatures.some(feature => p.specialFeatures.includes(feature))
      );
    }

    // Target life filter
    if (filters.targetLife.length > 0) {
      filtered = filtered.filter(p => 
        filters.targetLife.some(life => p.targetLife.includes(life))
      );
    }

    // Stock filter
    if (filters.inStock) {
      filtered = filtered.filter(p => p.inStock);
    }

    // Apply sorting
    switch (sortBy) {
      case "priceLowToHigh":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "priceHighToLow":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case "newest":
        filtered.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        break;
      case "alphabetical":
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default: // bestSelling
        filtered.sort((a, b) => (b.isBestSeller ? 1 : 0) - (a.isBestSeller ? 1 : 0));
    }    setFilteredProducts(filtered);
  }, [searchQuery, filters, sortBy, priceRanges]);
  useEffect(() => {
    applyFilters();
  }, [applyFilters]);
  const handleFilterChange = (
    filterType: keyof typeof filters, 
    value: string | number | boolean
  ) => {
    setFilters(prev => {
      if (filterType === 'inStock') {
        return { ...prev, [filterType]: value as boolean };
      }
      
      const currentValues = prev[filterType] as (string | number)[];
      const newValues = currentValues.includes(value as string | number)
        ? currentValues.filter(item => item !== value)
        : [...currentValues, value as string | number];
      
      return { ...prev, [filterType]: newValues };
    });
  };
  const clearAllFilters = () => {
    setFilters({
      categories: [],
      priceRanges: [],
      brands: [],
      ratings: [],
      petTypes: [],
      specialFeatures: [],
      targetLife: [],
      inStock: false,
    });
  };
  // Quick View Functions
  const openQuickView = (product: Product) => {
    setQuickViewProduct(product);
    setCurrentImageIndex(0);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };

  const closeQuickView = () => {
    setQuickViewProduct(null);
    setCurrentImageIndex(0);
    document.body.style.overflow = 'unset'; // Restore scrolling
  };

  const nextImage = () => {
    if (quickViewProduct && currentImageIndex < quickViewProduct.images.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  const prevImage = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50/30">      {/* Page Header */}
      <div className="bg-white/80 backdrop-blur-sm shadow-sm border-b">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-purple-700 bg-clip-text text-transparent mb-2">
                {searchQuery
                  ? `Search Results: "${searchQuery}"`
                  : "Pet Food Products"}
              </h1>
              <p className="text-lg text-gray-600 max-w-2xl">
                {searchQuery
                  ? `Found ${filteredProducts.length} products matching your search`
                  : "Discover our complete collection of premium pet foods designed to keep your furry friends healthy and happy."}
              </p>            </div>
            
            {/* Mobile-friendly AI Assistant and Controls */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              {/* Products AI Assistant */}
              <GlobalAIAssistant
                mode="products"
                context={filteredProducts}
                isOpen={isProductsAIOpen}
                onToggle={() => setIsProductsAIOpen(!isProductsAIOpen)}
                buttonText="Ask AI About Products"
                className="w-full sm:w-auto"
              />
                <div className="hidden sm:flex items-center gap-2">
                <Button variant="outline" size="sm" className="border-purple-200 hover:bg-purple-50 hover:border-purple-300 transition-all">
                  <Filter className="w-4 h-4 mr-2" />
                  Filters
                </Button>              <Button 
                variant={viewMode === "grid" ? "default" : "outline"} 
                size="sm" 
                className={viewMode === "grid" ? "bg-purple-600 hover:bg-purple-700" : "border-purple-200 hover:bg-purple-50"}
                onClick={() => setViewMode("grid")}
              >
                <Grid className="w-4 h-4" />
              </Button>
              <Button 
                variant={viewMode === "list" ? "default" : "outline"} 
                size="sm" 
                className={viewMode === "list" ? "bg-purple-600 hover:bg-purple-700" : "border-purple-200 hover:bg-purple-50"}
                onClick={() => setViewMode("list")}
              >
                <List className="w-4 h-4" />
              </Button>
              </div>
            </div>
          </div>
        </div>
      </div>      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Mobile Filter Button - More prominent */}
          <div className="lg:hidden mb-6">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-purple-100">
              <Button
                onClick={() => setIsMobileFiltersOpen(true)}
                className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white py-3 text-base font-medium"
              >
                <Menu className="w-5 h-5 mr-3" />
                Filters & Sort
                {(Object.values(filters).flat().length + (filters.inStock ? 1 : 0)) > 0 && (
                  <span className="ml-2 bg-white/20 text-white text-sm px-2 py-1 rounded-full">
                    {Object.values(filters).flat().length + (filters.inStock ? 1 : 0)} active
                  </span>
                )}
              </Button>
            </div>
          </div>          {/* Desktop Sidebar Filters - Completely hidden on mobile */}
          <aside className="desktop-filters hidden lg:block lg:w-64 space-y-6">
            {/* Filter Header */}
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-900">Filters</h2>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={clearAllFilters}
                className="text-purple-600 hover:text-purple-700 hover:bg-purple-50"
              >
                Clear All
              </Button>
            </div>

            {/* Categories */}
            <Card className="border-purple-100 shadow-lg bg-white/90 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                  <Filter className="w-4 h-4 mr-2 text-purple-600" />
                  Categories
                </h3>
                <div className="space-y-3">
                  {uniqueCategories.map((category) => {
                    const count = products.filter(p => p.category === category).length;
                    return (
                      <div key={category} className="flex items-center justify-between group">
                        <label className="flex items-center space-x-3 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={filters.categories.includes(category)}
                            onChange={() => handleFilterChange('categories', category)}
                            className="rounded border-purple-200 text-purple-600 focus:ring-purple-500"
                          />
                          <span className="text-sm text-gray-700 group-hover:text-purple-700 transition-colors">
                            {category}
                          </span>
                        </label>
                        <Badge variant="secondary" className="bg-purple-100 text-purple-700 text-xs">
                          {count}
                        </Badge>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Pet Types */}
            <Card className="border-purple-100 shadow-lg bg-white/90 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                  <Heart className="w-4 h-4 mr-2 text-purple-600" />
                  Pet Types
                </h3>
                <div className="space-y-3">
                  {uniquePetTypes.map((petType) => {
                    const count = products.filter(p => p.petType === petType).length;
                    return (
                      <div key={petType} className="flex items-center justify-between group">
                        <label className="flex items-center space-x-3 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={filters.petTypes.includes(petType)}
                            onChange={() => handleFilterChange('petTypes', petType)}
                            className="rounded border-purple-200 text-purple-600 focus:ring-purple-500"
                          />
                          <span className="text-sm text-gray-700 group-hover:text-purple-700 transition-colors">
                            {petType}
                          </span>
                        </label>
                        <Badge variant="secondary" className="bg-purple-100 text-purple-700 text-xs">
                          {count}
                        </Badge>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Price Range */}
            <Card className="border-purple-100 shadow-lg bg-white/90 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                  <Zap className="w-4 h-4 mr-2 text-purple-600" />
                  Price Range
                </h3>
                <div className="space-y-3">
                  {priceRanges.map((range) => {
                    const count = products.filter(p => p.price >= range.min && p.price < range.max).length;
                    return (
                      <div key={range.label} className="flex items-center justify-between group">
                        <label className="flex items-center space-x-3 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={filters.priceRanges.includes(range.label)}
                            onChange={() => handleFilterChange('priceRanges', range.label)}
                            className="rounded border-purple-200 text-purple-600 focus:ring-purple-500"
                          />
                          <span className="text-sm text-gray-700 group-hover:text-purple-700 transition-colors">
                            {range.label}
                          </span>
                        </label>
                        <Badge variant="secondary" className="bg-purple-100 text-purple-700 text-xs">
                          {count}
                        </Badge>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Brands */}
            <Card className="border-purple-100 shadow-lg bg-white/90 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                  <Award className="w-4 h-4 mr-2 text-purple-600" />
                  Brands
                </h3>
                <div className="space-y-3 max-h-48 overflow-y-auto">
                  {uniqueBrands.map((brand) => {
                    const count = products.filter(p => p.brand === brand).length;
                    return (
                      <div key={brand} className="flex items-center justify-between group">
                        <label className="flex items-center space-x-3 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={filters.brands.includes(brand)}
                            onChange={() => handleFilterChange('brands', brand)}
                            className="rounded border-purple-200 text-purple-600 focus:ring-purple-500"
                          />
                          <span className="text-sm text-gray-700 group-hover:text-purple-700 transition-colors">
                            {brand}
                          </span>
                        </label>
                        <Badge variant="secondary" className="bg-purple-100 text-purple-700 text-xs">
                          {count}
                        </Badge>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Customer Rating */}
            <Card className="border-purple-100 shadow-lg bg-white/90 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                  <Star className="w-4 h-4 mr-2 text-purple-600" />
                  Customer Rating
                </h3>
                <div className="space-y-3">
                  {[4, 3, 2].map((rating) => {
                    const count = products.filter(p => p.rating >= rating).length;
                    return (
                      <div key={rating} className="flex items-center justify-between group">
                        <label className="flex items-center space-x-3 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={filters.ratings.includes(rating)}
                            onChange={() => handleFilterChange('ratings', rating)}
                            className="rounded border-purple-200 text-purple-600 focus:ring-purple-500"
                          />
                          <div className="flex items-center">
                            <div className="flex text-yellow-400 text-sm mr-2">
                              {Array.from({ length: rating }, (_, i) => (
                                <Star key={i} className="w-3 h-3 fill-current" />
                              ))}
                              {Array.from({ length: 5 - rating }, (_, i) => (
                                <Star key={i} className="w-3 h-3 stroke-current fill-none" />
                              ))}
                            </div>
                            <span className="text-sm text-gray-700 group-hover:text-purple-700 transition-colors">
                              & Up
                            </span>
                          </div>
                        </label>
                        <Badge variant="secondary" className="bg-purple-100 text-purple-700 text-xs">
                          {count}
                        </Badge>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Special Features */}
            <Card className="border-purple-100 shadow-lg bg-white/90 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                  <Zap className="w-4 h-4 mr-2 text-purple-600" />
                  Special Features
                </h3>
                <div className="space-y-3 max-h-48 overflow-y-auto">
                  {uniqueSpecialFeatures.map((feature) => {
                    const count = products.filter(p => p.specialFeatures.includes(feature)).length;
                    return (
                      <div key={feature} className="flex items-center justify-between group">
                        <label className="flex items-center space-x-3 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={filters.specialFeatures.includes(feature)}
                            onChange={() => handleFilterChange('specialFeatures', feature)}
                            className="rounded border-purple-200 text-purple-600 focus:ring-purple-500"
                          />
                          <span className="text-sm text-gray-700 group-hover:text-purple-700 transition-colors">
                            {feature}
                          </span>
                        </label>
                        <Badge variant="secondary" className="bg-purple-100 text-purple-700 text-xs">
                          {count}
                        </Badge>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Life Stage */}
            <Card className="border-purple-100 shadow-lg bg-white/90 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                  <Award className="w-4 h-4 mr-2 text-purple-600" />
                  Life Stage
                </h3>
                <div className="space-y-3">
                  {uniqueTargetLife.map((life) => {
                    const count = products.filter(p => p.targetLife.includes(life)).length;
                    return (
                      <div key={life} className="flex items-center justify-between group">
                        <label className="flex items-center space-x-3 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={filters.targetLife.includes(life)}
                            onChange={() => handleFilterChange('targetLife', life)}
                            className="rounded border-purple-200 text-purple-600 focus:ring-purple-500"
                          />
                          <span className="text-sm text-gray-700 group-hover:text-purple-700 transition-colors">
                            {life}
                          </span>
                        </label>
                        <Badge variant="secondary" className="bg-purple-100 text-purple-700 text-xs">
                          {count}
                        </Badge>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Availability */}
            <Card className="border-purple-100 shadow-lg bg-white/90 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                  <Truck className="w-4 h-4 mr-2 text-purple-600" />
                  Availability
                </h3>
                <div className="space-y-3">
                  <label className="flex items-center space-x-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={filters.inStock}
                      onChange={(e) => handleFilterChange('inStock', e.target.checked)}
                      className="rounded border-purple-200 text-purple-600 focus:ring-purple-500"
                    />
                    <span className="text-sm text-gray-700 group-hover:text-purple-700 transition-colors">
                      In Stock Only
                    </span>
                  </label>
                </div>
              </CardContent>
            </Card>
          </aside>

          {/* Main Content */}
          <main className="flex-1">            {/* Results Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
              <div className="bg-white/70 backdrop-blur-sm rounded-lg px-4 py-2 border border-purple-100">
                <p className="text-gray-600">
                  Showing{" "}
                  <span className="font-semibold text-purple-700">{filteredProducts.length}</span>{" "}                  products
                </p>
              </div>              <div className="flex items-center gap-4">
                <select 
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-2 border border-purple-200 rounded-lg text-sm bg-white/90 backdrop-blur-sm hover:border-purple-300 focus:border-purple-500 focus:outline-none transition-all"
                  suppressHydrationWarning={true}
                >
                  <option value="bestSelling">Sort by: Best Selling</option>
                  <option value="priceLowToHigh">Price: Low to High</option>
                  <option value="priceHighToLow">Price: High to Low</option>
                  <option value="rating">Customer Rating</option>
                  <option value="newest">Newest First</option>
                  <option value="alphabetical">Alphabetical</option>
                </select>
              </div>
            </div>

            {/* Active Filters */}
            {(filters.categories.length > 0 || filters.brands.length > 0 || filters.priceRanges.length > 0 || 
              filters.ratings.length > 0 || filters.petTypes.length > 0 || filters.specialFeatures.length > 0 || 
              filters.targetLife.length > 0 || filters.inStock) && (
              <div className="mb-6">
                <div className="flex flex-wrap gap-2 items-center">
                  <span className="text-sm text-gray-600 font-medium">Active Filters:</span>
                  
                  {filters.categories.map(category => (
                    <Badge key={category} variant="secondary" className="bg-purple-100 text-purple-700 border-purple-200">
                      Category: {category}
                      <button 
                        onClick={() => handleFilterChange('categories', category)}
                        className="ml-1 hover:text-purple-900"
                      >
                        ×
                      </button>
                    </Badge>
                  ))}
                  
                  {filters.brands.map(brand => (
                    <Badge key={brand} variant="secondary" className="bg-blue-100 text-blue-700 border-blue-200">
                      Brand: {brand}
                      <button 
                        onClick={() => handleFilterChange('brands', brand)}
                        className="ml-1 hover:text-blue-900"
                      >
                        ×
                      </button>
                    </Badge>
                  ))}
                  
                  {filters.priceRanges.map(range => (
                    <Badge key={range} variant="secondary" className="bg-green-100 text-green-700 border-green-200">
                      Price: {range}
                      <button 
                        onClick={() => handleFilterChange('priceRanges', range)}
                        className="ml-1 hover:text-green-900"
                      >
                        ×
                      </button>
                    </Badge>
                  ))}
                  
                  {filters.petTypes.map(petType => (
                    <Badge key={petType} variant="secondary" className="bg-pink-100 text-pink-700 border-pink-200">
                      Pet: {petType}
                      <button 
                        onClick={() => handleFilterChange('petTypes', petType)}
                        className="ml-1 hover:text-pink-900"
                      >
                        ×
                      </button>
                    </Badge>
                  ))}
                  
                  {filters.specialFeatures.map(feature => (
                    <Badge key={feature} variant="secondary" className="bg-yellow-100 text-yellow-700 border-yellow-200">
                      Feature: {feature}
                      <button 
                        onClick={() => handleFilterChange('specialFeatures', feature)}
                        className="ml-1 hover:text-yellow-900"
                      >
                        ×
                      </button>
                    </Badge>
                  ))}
                  
                  {filters.targetLife.map(life => (
                    <Badge key={life} variant="secondary" className="bg-orange-100 text-orange-700 border-orange-200">
                      Life Stage: {life}
                      <button 
                        onClick={() => handleFilterChange('targetLife', life)}
                        className="ml-1 hover:text-orange-900"
                      >
                        ×
                      </button>
                    </Badge>
                  ))}
                  
                  {filters.ratings.map(rating => (
                    <Badge key={rating} variant="secondary" className="bg-indigo-100 text-indigo-700 border-indigo-200">
                      Rating: {rating}+ stars
                      <button 
                        onClick={() => handleFilterChange('ratings', rating)}
                        className="ml-1 hover:text-indigo-900"
                      >
                        ×
                      </button>
                    </Badge>
                  ))}
                  
                  {filters.inStock && (
                    <Badge variant="secondary" className="bg-teal-100 text-teal-700 border-teal-200">
                      In Stock Only
                      <button 
                        onClick={() => handleFilterChange('inStock', false)}
                        className="ml-1 hover:text-teal-900"
                      >
                        ×
                      </button>
                    </Badge>
                  )}
                  
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={clearAllFilters}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    Clear All
                  </Button>
                </div>
              </div>
            )}{/* Products Grid */}
            <div className={`grid gap-6 ${
              viewMode === "grid" 
                ? "grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4" 
                : "grid-cols-1"
            }`}>
              {filteredProducts.map((product, index) => (
                <div
                  key={product.id}
                  className="group relative"
                  onMouseEnter={() => setHoveredProduct(product.id)}
                  onMouseLeave={() => setHoveredProduct(null)}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Card className="h-full hover:shadow-2xl transition-all duration-500 border-purple-100 hover:border-purple-200 bg-white/80 backdrop-blur-sm group-hover:scale-[1.02] transform-gpu overflow-hidden">
                    {/* Product Image Container */}
                    <div className="aspect-square overflow-hidden relative bg-gradient-to-br from-gray-50 to-purple-50/50">
                      <Link href={`/products/${product.id}`}>
                        <Image
                          src={product.images[0]}
                          alt={product.name}
                          width={400}
                          height={400}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                      </Link>
                      
                      {/* Overlay Actions */}
                      <div className={`absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-3 ${
                        hoveredProduct === product.id ? 'pointer-events-auto' : 'pointer-events-none'
                      }`}>                        <Button 
                          size="sm" 
                          className="bg-white/90 text-gray-800 hover:bg-white border-0 shadow-lg backdrop-blur-sm"
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            openQuickView(product);
                          }}
                          suppressHydrationWarning={true}
                        >
                          <Eye className="w-4 h-4 mr-1" />
                          Quick View
                        </Button>                        <Button 
                          size="sm" 
                          className={`${isInWishlist(product.id) ? "bg-red-500 text-white" : "bg-white/90 text-gray-800"} hover:bg-white hover:text-red-500 border-0 shadow-lg backdrop-blur-sm`}
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            if (isInWishlist(product.id)) {
                              removeFromWishlist(product.id);
                            } else {
                              addToWishlist(product.id);
                            }
                          }}
                          suppressHydrationWarning={true}
                        >
                          <Heart className={`w-4 h-4 ${isInWishlist(product.id) ? "fill-white" : ""}`} />
                        </Button>
                      </div>
                      
                      {/* Badges */}
                      <div className="absolute top-3 left-3 flex flex-col gap-2">
                        <Badge
                          variant="secondary"
                          className="bg-white/95 text-gray-700 text-xs shadow-lg backdrop-blur-sm border-0"
                        >
                          {product.category}
                        </Badge>
                        {product.isBestSeller && (
                          <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs shadow-lg border-0">
                            <Award className="w-3 h-3 mr-1" />
                            Best Seller
                          </Badge>
                        )}
                        {product.isNew && (
                          <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs shadow-lg border-0">
                            <Zap className="w-3 h-3 mr-1" />
                            New
                          </Badge>
                        )}
                      </div>
                      
                      {product.discount > 0 && (
                        <Badge className="absolute top-3 right-3 bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white shadow-lg border-0">
                          -{product.discount}%
                        </Badge>
                      )}
                      
                      {/* Stock Status */}
                      {!product.inStock && (
                        <div className="absolute inset-0 bg-gray-900/50 flex items-center justify-center">
                          <Badge variant="destructive" className="text-sm px-4 py-2">
                            Out of Stock
                          </Badge>
                        </div>
                      )}
                    </div>

                    <CardContent className="p-5">
                      {/* Brand */}
                      <div className="mb-2">
                        <p className="text-xs text-purple-600 uppercase tracking-wide font-semibold">
                          {product.brand}
                        </p>
                      </div>

                      {/* Product Name */}
                      <Link href={`/products/${product.id}`}>
                        <h3 className="font-semibold text-gray-900 mb-3 line-clamp-2 text-sm leading-tight min-h-[2.5rem] group-hover:text-purple-700 transition-colors">
                          {product.name}
                        </h3>
                      </Link>

                      {/* Special Features */}
                      {product.specialFeatures && product.specialFeatures.length > 0 && (
                        <div className="flex flex-wrap gap-1 mb-3">
                          {product.specialFeatures.slice(0, 2).map((feature, idx) => (
                            <Badge
                              key={idx}
                              variant="outline"
                              className="text-xs px-2 py-0.5 border-purple-200 text-purple-700 bg-purple-50"
                            >
                              {feature}
                            </Badge>
                          ))}
                        </div>
                      )}

                      {/* Rating */}
                      <div className="flex items-center mb-3">
                        <div className="flex text-yellow-400 text-sm mr-2">
                          {Array.from({ length: 5 }, (_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < Math.floor(product.rating)
                                  ? "fill-current"
                                  : "stroke-current fill-none"
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-xs text-gray-500 mr-2">
                          ({product.rating})
                        </span>
                        {product.inStock && (
                          <div className="ml-auto flex items-center text-xs text-green-600">
                            <Truck className="w-3 h-3 mr-1" />
                            Fast Delivery
                          </div>
                        )}
                      </div>

                      {/* Price */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                          <span className="text-lg font-bold bg-gradient-to-r from-purple-600 to-purple-700 bg-clip-text text-transparent">
                            ₹{product.price}
                          </span>
                          {product.originalPrice > product.price && (
                            <span className="text-sm text-gray-500 line-through">
                              ₹{product.originalPrice}
                            </span>
                          )}
                        </div>
                        {product.weight && (
                          <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                            {product.weight}
                          </span>
                        )}
                      </div>                      {/* Add to Cart Button */}
                      <Button 
                        className={`w-full text-sm py-2.5 transition-all duration-300 ${
                          product.inStock
                            ? "bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white shadow-lg hover:shadow-xl"
                            : "bg-gray-300 text-gray-500 cursor-not-allowed"
                        }`}
                        disabled={!product.inStock}
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          // Add default values since we don't have selections in the product listing
                          if (product.inStock) {
                            addToCart(product, 1, "1kg", "Adult");
                          }
                        }}
                        suppressHydrationWarning={true}
                      >
                        <ShoppingCart className="w-4 h-4 mr-2" />
                        {product.inStock ? "Add to Cart" : "Out of Stock"}
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>            {/* Load More */}
            <div className="text-center mt-16">
              <div className="inline-flex flex-col items-center gap-4">
                <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-purple-300 to-transparent"></div>                <Button
                  variant="outline"
                  className="border-2 border-purple-200 text-purple-700 hover:bg-purple-600 hover:text-white hover:border-purple-600 px-8 py-3 text-sm font-semibold transition-all duration-300 shadow-lg hover:shadow-xl bg-white/80 backdrop-blur-sm"
                  suppressHydrationWarning={true}
                >
                  Load More Products
                  <Zap className="w-4 h-4 ml-2" />
                </Button>
                <p className="text-xs text-gray-500 max-w-md">
                  Discover more amazing products for your furry friends
                </p>
              </div>
            </div>
          </main>        </div>
          {/* Floating Action Button for Quick Filter (Mobile) */}
        <div className="fixed bottom-6 right-6 lg:hidden z-20">
          <Button
            size="lg"
            className="rounded-full w-14 h-14 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 shadow-2xl border-0"
            suppressHydrationWarning={true}
          >
            <Filter className="w-6 h-6" />
          </Button>
        </div>{/* Quick View Modal */}
        {quickViewProduct && (
          <div 
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeQuickView}
          >
            <div 
              className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden animate-fadeInUp"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900">{quickViewProduct.name}</h2>                <Button
                  variant="ghost"
                  size="sm"
                  onClick={closeQuickView}
                  className="text-gray-500 hover:text-gray-700 rounded-full"
                  suppressHydrationWarning={true}
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>

              <div className="flex flex-col lg:flex-row">
                {/* Image Gallery */}
                <div className="lg:w-1/2 p-6">
                  <div className="relative bg-gray-50 rounded-xl overflow-hidden mb-4 group">
                    <div className="aspect-square relative">
                      <Image
                        src={quickViewProduct.images[currentImageIndex]}
                        alt={quickViewProduct.name}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      
                      {/* Navigation Arrows */}
                      {quickViewProduct.images.length > 1 && (                        <>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity"
                            onClick={prevImage}
                            disabled={currentImageIndex === 0}
                            suppressHydrationWarning={true}
                          >
                            <ChevronLeft className="w-4 h-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity"
                            onClick={nextImage}
                            disabled={currentImageIndex === quickViewProduct.images.length - 1}
                            suppressHydrationWarning={true}
                          >
                            <ChevronRight className="w-4 h-4" />
                          </Button>
                        </>
                      )}
                    </div>
                  </div>

                  {/* Thumbnail Gallery */}
                  {quickViewProduct.images.length > 1 && (
                    <div className="flex gap-2 overflow-x-auto">
                      {quickViewProduct.images.map((image: string, index: number) => (                        <button
                          key={index}
                          onClick={() => goToImage(index)}
                          className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                            currentImageIndex === index
                              ? 'border-purple-500 scale-105'
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                          suppressHydrationWarning={true}
                        >
                          <Image
                            src={image}
                            alt={`${quickViewProduct.name} ${index + 1}`}
                            width={64}
                            height={64}
                            className="w-full h-full object-cover"
                          />
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Product Details */}
                <div className="lg:w-1/2 p-6 lg:border-l border-gray-100">
                  <div className="space-y-4">
                    {/* Price and Rating */}
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <div className="flex items-center gap-3">
                          <span className="text-3xl font-bold text-gray-900">₹{quickViewProduct.price}</span>
                          {quickViewProduct.originalPrice > quickViewProduct.price && (
                            <span className="text-lg text-gray-500 line-through">₹{quickViewProduct.originalPrice}</span>
                          )}
                        </div>
                        {quickViewProduct.discount > 0 && (
                          <Badge className="bg-red-100 text-red-700 border-red-200">
                            {quickViewProduct.discount}% OFF
                          </Badge>
                        )}
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                        <span className="font-semibold">{quickViewProduct.rating}</span>
                      </div>
                    </div>

                    {/* Product Info */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <Badge variant="outline">{quickViewProduct.category}</Badge>
                        <Badge variant="outline">{quickViewProduct.brand}</Badge>
                        <Badge variant="outline">{quickViewProduct.petType}</Badge>
                      </div>

                      {/* Special Features */}
                      {quickViewProduct.specialFeatures.length > 0 && (
                        <div>
                          <h4 className="font-semibold text-gray-700 mb-2">Special Features:</h4>
                          <div className="flex flex-wrap gap-2">
                            {quickViewProduct.specialFeatures.map((feature: string, index: number) => (
                              <Badge key={index} variant="secondary" className="text-xs">
                                <Zap className="w-3 h-3 mr-1" />
                                {feature}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Description */}
                      <div>
                        <h4 className="font-semibold text-gray-700 mb-2">Description:</h4>
                        <p className="text-gray-600 leading-relaxed">{quickViewProduct.description}</p>
                      </div>

                      {/* Stock Status */}
                      <div className="flex items-center gap-2">
                        <div className={`w-3 h-3 rounded-full ${quickViewProduct.inStock ? 'bg-green-500' : 'bg-red-500'}`} />
                        <span className={`font-medium ${quickViewProduct.inStock ? 'text-green-700' : 'text-red-700'}`}>
                          {quickViewProduct.inStock ? 'In Stock' : 'Out of Stock'}
                        </span>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3 pt-4">                      <Link href={`/products/${quickViewProduct.id}`} className="flex-1">
                        <Button 
                          className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white border-0"
                          suppressHydrationWarning={true}
                        >
                          <Eye className="w-4 h-4 mr-2" />
                          View Details
                        </Button>
                      </Link><Button
                        variant="outline"
                        className="px-6 border-purple-200 text-purple-700 hover:bg-purple-50"
                        disabled={!quickViewProduct.inStock}
                        suppressHydrationWarning={true}
                      >
                        <ShoppingCart className="w-4 h-4 mr-2" />
                        Add to Cart
                      </Button>                    </div>
                  </div>
                </div>              </div>
            </div>
          </div>
        )}        {/* Mobile Filters Sidebar */}
        {isMobileFiltersOpen && (
          <div className="fixed inset-0 z-50 lg:hidden">
            {/* Backdrop */}
            <div 
              className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
              onClick={() => setIsMobileFiltersOpen(false)}
            />
              {/* Filter Sidebar - Slide from left */}
            <div className="absolute left-0 top-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl overflow-y-auto transform transition-transform duration-300 ease-in-out translate-x-0">
              {/* Header */}
              <div className="sticky top-0 z-10 p-4 border-b bg-gradient-to-r from-purple-600 to-purple-700 text-white">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Filter className="w-5 h-5" />
                    <h2 className="text-lg font-semibold">Filters & Sort</h2>
                  </div>
                  <Button
                    onClick={() => setIsMobileFiltersOpen(false)}
                    variant="ghost"
                    size="sm"
                    className="text-white hover:bg-white/20"
                  >
                    <X className="w-5 h-5" />
                  </Button>
                </div>
              </div>
              <div className="p-4 space-y-6">
                {/* Quick Actions */}
                <div className="flex justify-between items-center bg-purple-50 p-3 rounded-lg">
                  <span className="text-sm text-purple-700 font-medium">
                    {Object.values(filters).flat().length + (filters.inStock ? 1 : 0)} filters active
                  </span>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={clearAllFilters}
                    className="text-purple-600 hover:text-purple-700 hover:bg-purple-100"
                  >
                    Clear All
                  </Button>
                </div>

                {/* Sort Section */}
                <Card className="border-purple-100 shadow-sm">
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <Filter className="w-4 h-4 mr-2 text-purple-600" />
                      Sort Products
                    </h3>
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="w-full p-3 border border-purple-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white text-gray-700 text-base"
                    >
                      <option value="bestSelling">Best Selling</option>
                      <option value="priceLowToHigh">Price: Low to High</option>
                      <option value="priceHighToLow">Price: High to Low</option>
                      <option value="rating">Highest Rated</option>
                      <option value="newest">Newest First</option>
                      <option value="alphabetical">A-Z</option>
                    </select>
                  </CardContent>
                </Card>

                {/* Stock Filter */}
                <Card className="border-purple-100 shadow-sm">
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <Truck className="w-4 h-4 mr-2 text-purple-600" />
                      Availability
                    </h3>
                    <label className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={filters.inStock}
                        onChange={() => handleFilterChange('inStock', !filters.inStock)}
                        className="w-4 h-4 rounded border-purple-200 text-purple-600 focus:ring-purple-500"
                      />
                      <span className="text-sm text-gray-700">In Stock Only</span>
                    </label>
                  </CardContent>
                </Card>                {/* Categories */}
                <Card className="border-purple-100 shadow-sm">
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <Filter className="w-4 h-4 mr-2 text-purple-600" />
                      Categories
                    </h3>
                    <div className="space-y-2 max-h-48 overflow-y-auto">
                      {uniqueCategories.map((category) => {
                        const count = products.filter(p => p.category === category).length;
                        return (
                          <div key={category} className="flex items-center justify-between py-1">
                            <label className="flex items-center space-x-2 cursor-pointer flex-1">
                              <input
                                type="checkbox"
                                checked={filters.categories.includes(category)}
                                onChange={() => handleFilterChange('categories', category)}
                                className="w-4 h-4 rounded border-purple-200 text-purple-600 focus:ring-purple-500"
                              />
                              <span className="text-sm text-gray-700 flex-1">
                                {category}
                              </span>
                            </label>
                            <Badge variant="secondary" className="bg-purple-100 text-purple-700 text-xs ml-2">
                              {count}
                            </Badge>
                          </div>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>                {/* Pet Types */}
                <Card className="border-purple-100 shadow-sm">
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <Heart className="w-4 h-4 mr-2 text-purple-600" />
                      Pet Types
                    </h3>
                    <div className="space-y-2 max-h-48 overflow-y-auto">
                      {uniquePetTypes.map((petType) => {
                        const count = products.filter(p => p.petType === petType).length;
                        return (
                          <div key={petType} className="flex items-center justify-between py-1">
                            <label className="flex items-center space-x-2 cursor-pointer flex-1">
                              <input
                                type="checkbox"
                                checked={filters.petTypes.includes(petType)}
                                onChange={() => handleFilterChange('petTypes', petType)}
                                className="w-4 h-4 rounded border-purple-200 text-purple-600 focus:ring-purple-500"
                              />
                              <span className="text-sm text-gray-700 flex-1">
                                {petType}
                              </span>
                            </label>
                            <Badge variant="secondary" className="bg-purple-100 text-purple-700 text-xs ml-2">
                              {count}
                            </Badge>
                          </div>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>

                {/* Price Ranges */}
                <Card className="border-purple-100 shadow-sm">
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <Zap className="w-4 h-4 mr-2 text-purple-600" />
                      Price Range
                    </h3>
                    <div className="space-y-2">
                      {priceRanges.map((range) => {
                        const count = products.filter(p => 
                          p.price >= range.min && p.price <= range.max
                        ).length;
                        return (
                          <div key={range.label} className="flex items-center justify-between py-1">
                            <label className="flex items-center space-x-2 cursor-pointer flex-1">
                              <input
                                type="checkbox"
                                checked={filters.priceRanges.includes(range.label)}
                                onChange={() => handleFilterChange('priceRanges', range.label)}
                                className="w-4 h-4 rounded border-purple-200 text-purple-600 focus:ring-purple-500"
                              />
                              <span className="text-sm text-gray-700 flex-1">
                                {range.label}
                              </span>
                            </label>
                            <Badge variant="secondary" className="bg-purple-100 text-purple-700 text-xs ml-2">
                              {count}
                            </Badge>
                          </div>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>

                {/* Brands */}
                <Card className="border-purple-100 shadow-sm">
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <Award className="w-4 h-4 mr-2 text-purple-600" />
                      Brands
                    </h3>
                    <div className="space-y-2 max-h-48 overflow-y-auto">
                      {uniqueBrands.map((brand) => {
                        const count = products.filter(p => p.brand === brand).length;
                        return (
                          <div key={brand} className="flex items-center justify-between py-1">
                            <label className="flex items-center space-x-2 cursor-pointer flex-1">
                              <input
                                type="checkbox"
                                checked={filters.brands.includes(brand)}
                                onChange={() => handleFilterChange('brands', brand)}
                                className="w-4 h-4 rounded border-purple-200 text-purple-600 focus:ring-purple-500"
                              />
                              <span className="text-sm text-gray-700 flex-1">
                                {brand}
                              </span>
                            </label>
                            <Badge variant="secondary" className="bg-purple-100 text-purple-700 text-xs ml-2">
                              {count}
                            </Badge>
                          </div>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>

                {/* Ratings */}
                <Card className="border-purple-100 shadow-sm">
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <Star className="w-4 h-4 mr-2 text-purple-600" />
                      Minimum Rating
                    </h3>
                    <div className="space-y-2">
                      {[5, 4, 3, 2, 1].map((rating) => {
                        const count = products.filter(p => p.rating >= rating).length;
                        return (
                          <div key={rating} className="flex items-center justify-between py-1">
                            <label className="flex items-center space-x-2 cursor-pointer flex-1">
                              <input
                                type="checkbox"
                                checked={filters.ratings.includes(rating)}
                                onChange={() => handleFilterChange('ratings', rating)}
                                className="w-4 h-4 rounded border-purple-200 text-purple-600 focus:ring-purple-500"
                              />
                              <div className="flex items-center space-x-1 flex-1">
                                {[...Array(rating)].map((_, i) => (
                                  <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                                ))}
                                <span className="text-sm text-gray-700 ml-1">& up</span>
                              </div>
                            </label>
                            <Badge variant="secondary" className="bg-purple-100 text-purple-700 text-xs ml-2">
                              {count}
                            </Badge>
                          </div>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>

                {/* Special Features */}
                <Card className="border-purple-100 shadow-sm">
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <Zap className="w-4 h-4 mr-2 text-purple-600" />
                      Special Features
                    </h3>
                    <div className="space-y-2 max-h-48 overflow-y-auto">
                      {uniqueSpecialFeatures.map((feature) => {
                        const count = products.filter(p => p.specialFeatures.includes(feature)).length;
                        return (
                          <div key={feature} className="flex items-center justify-between py-1">
                            <label className="flex items-center space-x-2 cursor-pointer flex-1">
                              <input
                                type="checkbox"
                                checked={filters.specialFeatures.includes(feature)}
                                onChange={() => handleFilterChange('specialFeatures', feature)}
                                className="w-4 h-4 rounded border-purple-200 text-purple-600 focus:ring-purple-500"
                              />
                              <span className="text-sm text-gray-700 flex-1">
                                {feature}
                              </span>
                            </label>
                            <Badge variant="secondary" className="bg-purple-100 text-purple-700 text-xs ml-2">
                              {count}
                            </Badge>
                          </div>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>

                {/* Target Life Stage */}
                <Card className="border-purple-100 shadow-sm">
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <Heart className="w-4 h-4 mr-2 text-purple-600" />
                      Life Stage
                    </h3>
                    <div className="space-y-2 max-h-48 overflow-y-auto">
                      {uniqueTargetLife.map((life) => {
                        const count = products.filter(p => p.targetLife.includes(life)).length;
                        return (
                          <div key={life} className="flex items-center justify-between py-1">
                            <label className="flex items-center space-x-2 cursor-pointer flex-1">
                              <input
                                type="checkbox"
                                checked={filters.targetLife.includes(life)}
                                onChange={() => handleFilterChange('targetLife', life)}
                                className="w-4 h-4 rounded border-purple-200 text-purple-600 focus:ring-purple-500"
                              />
                              <span className="text-sm text-gray-700 flex-1">
                                {life}
                              </span>
                            </label>
                            <Badge variant="secondary" className="bg-purple-100 text-purple-700 text-xs ml-2">
                              {count}
                            </Badge>
                          </div>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>

                {/* Apply Button */}
                <Button
                  onClick={() => setIsMobileFiltersOpen(false)}
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3"
                >
                  Apply Filters ({filteredProducts.length} products)
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<div>Loading products...</div>}>
      <ProductsContent />
    </Suspense>
  );
}
