import React from "react";
import Link from "next/link";
import Image from "next/image";
import { products } from "@/lib/products";
import { Badge } from "@/components/ui/badge";

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-[#f0f4ff]">
      {/* Page Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-[#222] mb-4">
            Pet Food Products
          </h1>
          <p className="text-lg text-[#666] max-w-2xl">
            Discover our complete collection of high-quality pet foods designed
            to keep your furry friends healthy and happy.
          </p>
        </div>
      </div>

      {/* Products Grid */}
      <main className="container mx-auto px-4 py-10">
        <div className="mb-6 flex justify-between items-center">
          <p className="text-[#666]">Showing {products.length} products</p>
          <div className="flex gap-2">
            <Badge
              variant="outline"
              className="text-[#7E22CE] border-[#7E22CE]"
            >
              Dog Food
            </Badge>
            <Badge
              variant="outline"
              className="text-[#7E22CE] border-[#7E22CE]"
            >
              Cat Food
            </Badge>
            <Badge
              variant="outline"
              className="text-[#7E22CE] border-[#7E22CE]"
            >
              Dog Treats
            </Badge>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <Link key={product.id} href={`/products/${product.id}`}>
              <div className="product-card group cursor-pointer transform transition-all duration-200 hover:scale-105">
                <div className="bg-white rounded-[20px] overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                  {/* Product Image */}
                  <div className="aspect-square overflow-hidden relative">
                    <Image
                      src={product.images[0]}
                      alt={product.name}
                      width={300}
                      height={300}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    {/* Discount Badge */}
                    {product.discount > 0 && (
                      <div className="absolute top-3 right-3 bg-red-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
                        -{product.discount}%
                      </div>
                    )}
                  </div>

                  {/* Product Info */}
                  <div className="p-4">
                    <h3 className="font-semibold text-[#222] mb-2 line-clamp-2 text-sm leading-tight">
                      {product.name}
                    </h3>

                    {/* Brand */}
                    <p className="text-xs text-[#666] mb-2">{product.brand}</p>

                    {/* Rating */}
                    <div className="flex items-center mb-3">
                      <div className="flex text-yellow-400 text-sm">
                        {"★".repeat(Math.floor(product.rating))}
                        {"☆".repeat(5 - Math.floor(product.rating))}
                      </div>
                      <span className="text-xs text-[#666] ml-2">
                        {product.rating}/5
                      </span>
                    </div>

                    {/* Price */}
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-lg font-bold text-[#7E22CE]">
                        ₹{product.price}
                      </span>
                      {product.originalPrice > product.price && (
                        <span className="text-sm text-gray-500 line-through">
                          ₹{product.originalPrice}
                        </span>
                      )}
                    </div>

                    {/* Category Badge */}
                    <Badge
                      variant="secondary"
                      className="text-xs bg-[#d7b3ff] text-[#7E22CE] hover:bg-[#c9a8f5]"
                    >
                      {product.category}
                    </Badge>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Load More or Pagination could go here */}
        <div className="text-center mt-12">
          <p className="text-[#666]">
            Found {products.length} products. More coming soon!
          </p>
        </div>
      </main>
    </div>
  );
}
