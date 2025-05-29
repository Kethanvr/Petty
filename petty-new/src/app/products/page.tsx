"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { products } from "@/lib/products";
import { searchProducts } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, Filter, Grid, List } from "lucide-react";
import { useSearchParams } from "next/navigation";

export default function ProductsPage() {
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("search") || "";
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    if (searchQuery) {
      setFilteredProducts(searchProducts(products, searchQuery));
    } else {
      setFilteredProducts(products);
    }
  }, [searchQuery]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">
                {searchQuery
                  ? `Search Results: "${searchQuery}"`
                  : "Pet Food Products"}
              </h1>
              <p className="text-lg text-gray-600 max-w-2xl">
                {searchQuery
                  ? `Found ${filteredProducts.length} products matching your search`
                  : "Discover our complete collection of high-quality pet foods designed to keep your furry friends healthy and happy."}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" className="border-gray-300">
                <Filter className="w-4 h-4 mr-2" />
                Filters
              </Button>
              <Button variant="outline" size="sm" className="border-gray-300">
                <Grid className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="sm" className="border-gray-300">
                <List className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <aside className="lg:w-64 space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-4">Categories</h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        className="rounded border-gray-300"
                      />
                      <span className="text-sm text-gray-700">Dog Food</span>
                    </label>
                    <span className="text-xs text-gray-500">8</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        className="rounded border-gray-300"
                      />
                      <span className="text-sm text-gray-700">Cat Food</span>
                    </label>
                    <span className="text-xs text-gray-500">6</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        className="rounded border-gray-300"
                      />
                      <span className="text-sm text-gray-700">Treats</span>
                    </label>
                    <span className="text-xs text-gray-500">2</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-4">
                  Price Range
                </h3>
                <div className="space-y-2">
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300"
                    />
                    <span className="text-sm text-gray-700">Under ₹500</span>
                  </label>
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300"
                    />
                    <span className="text-sm text-gray-700">₹500 - ₹1000</span>
                  </label>
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300"
                    />
                    <span className="text-sm text-gray-700">Above ₹1000</span>
                  </label>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-4">Brands</h3>
                <div className="space-y-2">
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300"
                    />
                    <span className="text-sm text-gray-700">Pedigree</span>
                  </label>
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300"
                    />
                    <span className="text-sm text-gray-700">Whiskas</span>
                  </label>
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300"
                    />
                    <span className="text-sm text-gray-700">
                      Hill's Science Diet
                    </span>
                  </label>
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300"
                    />
                    <span className="text-sm text-gray-700">Petslife</span>
                  </label>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-4">
                  Customer Rating
                </h3>
                <div className="space-y-2">
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300"
                    />
                    <div className="flex items-center">
                      <div className="flex text-yellow-400 text-sm mr-2">
                        {Array.from({ length: 4 }, (_, i) => (
                          <Star key={i} className="w-3 h-3 fill-current" />
                        ))}
                        <Star className="w-3 h-3 stroke-current fill-none" />
                      </div>
                      <span className="text-sm text-gray-700">& Up</span>
                    </div>
                  </label>
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300"
                    />
                    <div className="flex items-center">
                      <div className="flex text-yellow-400 text-sm mr-2">
                        {Array.from({ length: 3 }, (_, i) => (
                          <Star key={i} className="w-3 h-3 fill-current" />
                        ))}
                        {Array.from({ length: 2 }, (_, i) => (
                          <Star
                            key={i}
                            className="w-3 h-3 stroke-current fill-none"
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-700">& Up</span>
                    </div>
                  </label>
                </div>
              </CardContent>
            </Card>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            {/* Results Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
              <div>
                <p className="text-gray-600">
                  Showing{" "}
                  <span className="font-semibold">{filteredProducts.length}</span>{" "}
                  products
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex gap-2">
                  <Badge
                    variant="secondary"
                    className="bg-[#7E22CE]/10 text-[#7E22CE] border-[#7E22CE]/20"
                  >
                    Dog Food
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-[#7E22CE]/10 text-[#7E22CE] border-[#7E22CE]/20"
                  >
                    Cat Food
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-[#7E22CE]/10 text-[#7E22CE] border-[#7E22CE]/20"
                  >
                    Treats
                  </Badge>
                </div>
                <select className="px-3 py-2 border border-gray-300 rounded-md text-sm bg-white">
                  <option>Sort by: Best Selling</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Customer Rating</option>
                  <option>Newest First</option>
                </select>
              </div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <Link key={product.id} href={`/products/${product.id}`}>
                  <Card className="group h-full hover:shadow-xl transition-all duration-300 border-gray-200 hover:border-[#7E22CE]/30 bg-white">
                    <div className="aspect-square overflow-hidden rounded-t-lg relative">
                      <Image
                        src={product.images[0]}
                        alt={product.name}
                        width={300}
                        height={300}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      {product.discount > 0 && (
                        <Badge className="absolute top-3 right-3 bg-red-500 hover:bg-red-600 text-white">
                          -{product.discount}%
                        </Badge>
                      )}
                      <div className="absolute top-3 left-3">
                        <Badge
                          variant="secondary"
                          className="bg-white/90 text-gray-700 text-xs"
                        >
                          {product.category}
                        </Badge>
                      </div>
                    </div>

                    <CardContent className="p-4">
                      <div className="mb-2">
                        <p className="text-xs text-gray-500 uppercase tracking-wide font-medium">
                          {product.brand}
                        </p>
                      </div>

                      <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 text-sm leading-tight min-h-[2.5rem]">
                        {product.name}
                      </h3>

                      {/* Rating */}
                      <div className="flex items-center mb-3">
                        <div className="flex text-yellow-400 text-sm">
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
                        <span className="text-xs text-gray-500 ml-2">
                          ({product.rating})
                        </span>
                      </div>

                      {/* Price */}
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <span className="text-lg font-bold text-[#7E22CE]">
                            ₹{product.price}
                          </span>
                          {product.originalPrice > product.price && (
                            <span className="text-sm text-gray-500 line-through">
                              ₹{product.originalPrice}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Quick Add Button */}
                      <Button className="w-full bg-[#7E22CE] hover:bg-[#6b1fa3] text-white text-sm py-2">
                        Add to Cart
                      </Button>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <Button
                variant="outline"
                className="border-[#7E22CE] text-[#7E22CE] hover:bg-[#7E22CE] hover:text-white px-8 py-3"
              >
                Load More Products
              </Button>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
