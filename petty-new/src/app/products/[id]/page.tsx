"use client";

import React from "react";
import { useState } from "react";
import { useParams } from "next/navigation";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getProductById, products } from "@/lib/products";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { ShoppingCart, Star, Minus, Plus } from "lucide-react";

export default function ProductPage() {
  const params = useParams();
  const productId = parseInt(params.id as string);
  const product = getProductById(productId);
  const { addToCart } = useCart();

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedAge, setSelectedAge] = useState("Adult");
  const [selectedQuantity, setSelectedQuantity] = useState("1kg");
  const [itemQuantity, setItemQuantity] = useState(1);

  if (!product) {
    notFound();
  }

  // Get suggested products (random other products)
  const suggestedProducts = products
    .filter((p) => p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    addToCart(product, itemQuantity, selectedQuantity, selectedAge);
  };

  const handleBuyNow = () => {
    addToCart(product, itemQuantity, selectedQuantity, selectedAge);
    // Navigate to cart or checkout
    window.location.href = "/cart";
  };

  return (
    <div className="min-h-screen bg-[#f0f4ff]">
      {/* Product Details Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Product Images */}
          <div className="lg:col-span-1">
            {/* Thumbnail Images */}
            <div className="flex lg:flex-col gap-2 mb-4 overflow-x-auto lg:overflow-visible">
              {product.images.map((image, index) => (
                <div
                  key={index}
                  className={`flex-shrink-0 w-16 h-16 lg:w-20 lg:h-20 rounded-lg overflow-hidden cursor-pointer border-2 transition-all ${
                    selectedImage === index
                      ? "border-[#7E22CE] shadow-md"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                  onClick={() => setSelectedImage(index)}
                >
                  <Image
                    src={image}
                    alt={`${product.name} view ${index + 1}`}
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Main Image */}
            <div className="aspect-square bg-white rounded-2xl overflow-hidden shadow-lg">
              <Image
                src={product.images[selectedImage]}
                alt={product.name}
                width={600}
                height={600}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>

          {/* Product Information */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-[#222] mb-4 leading-tight">
                {product.name}
              </h1>

              <div className="flex items-center gap-2 mb-4">
                <div className="flex text-yellow-400 text-lg">
                  {Array.from({ length: 5 }, (_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(product.rating)
                          ? "fill-current"
                          : "stroke-current fill-none"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-[#666] font-medium">
                  {product.rating}/5
                </span>
              </div>

              <div className="flex items-center gap-4 mb-6">
                <span className="text-3xl font-bold text-[#7E22CE]">
                  ₹{product.price}
                </span>
                {product.originalPrice > product.price && (
                  <>
                    <span className="text-xl text-gray-500 line-through">
                      ₹{product.originalPrice}
                    </span>
                    <Badge className="bg-red-100 text-red-600 hover:bg-red-100">
                      -{product.discount}%
                    </Badge>
                  </>
                )}
              </div>

              <p className="text-[#666] leading-relaxed mb-6">
                {product.description}
              </p>
            </div>

            {/* Age Categories */}
            <div>
              <h3 className="font-semibold text-[#222] mb-3">Age Category</h3>
              <div className="flex gap-2 flex-wrap">
                {product.ageCategories.map((age) => (
                  <Button
                    key={age}
                    variant={selectedAge === age ? "default" : "outline"}
                    className={`${
                      selectedAge === age
                        ? "bg-[#7E22CE] hover:bg-[#6b1fa3] text-white"
                        : "border-[#7E22CE] text-[#7E22CE] hover:bg-[#7E22CE] hover:text-white"
                    }`}
                    onClick={() => setSelectedAge(age)}
                  >
                    {age}
                  </Button>
                ))}
              </div>
            </div>

            {/* Quantity Options */}
            <div>
              <h3 className="font-semibold text-[#222] mb-3">Package Size</h3>
              <div className="flex gap-2 flex-wrap">
                {product.quantities.map((qty) => (
                  <label key={qty} className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="quantity"
                      value={qty}
                      checked={selectedQuantity === qty}
                      onChange={(e) => setSelectedQuantity(e.target.value)}
                      className="sr-only"
                    />
                    <div
                      className={`px-4 py-2 rounded-lg border-2 transition-all ${
                        selectedQuantity === qty
                          ? "border-[#7E22CE] bg-[#7E22CE] text-white"
                          : "border-gray-300 text-[#666] hover:border-[#7E22CE]"
                      }`}
                    >
                      {qty}
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Quantity Selector */}
            <div>
              <h3 className="font-semibold text-[#222] mb-3">Quantity</h3>
              <div className="flex items-center gap-3">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setItemQuantity(Math.max(1, itemQuantity - 1))}
                  className="border-[#7E22CE] text-[#7E22CE] hover:bg-[#7E22CE] hover:text-white"
                >
                  <Minus className="w-4 h-4" />
                </Button>
                <Input
                  type="number"
                  value={itemQuantity}
                  onChange={(e) =>
                    setItemQuantity(Math.max(1, parseInt(e.target.value) || 1))
                  }
                  className="w-20 text-center border-[#7E22CE] focus:ring-[#7E22CE]"
                  min="1"
                />
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setItemQuantity(itemQuantity + 1)}
                  className="border-[#7E22CE] text-[#7E22CE] hover:bg-[#7E22CE] hover:text-white"
                >
                  <Plus className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 pt-4">
              <Button
                onClick={handleAddToCart}
                className="flex-1 bg-[#7E22CE] hover:bg-[#6b1fa3] text-white py-3 text-lg font-semibold"
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                Add to Cart
              </Button>
              <Button
                onClick={handleBuyNow}
                variant="outline"
                className="flex-1 border-[#7E22CE] text-[#7E22CE] hover:bg-[#7E22CE] hover:text-white py-3 text-lg font-semibold"
              >
                Buy Now
              </Button>
            </div>
          </div>
        </div>

        {/* Suggested Products */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-[#222] mb-8">
            You Might Also Like
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {suggestedProducts.map((suggestedProduct) => (
              <Link
                key={suggestedProduct.id}
                href={`/products/${suggestedProduct.id}`}
              >
                <div className="product-card group cursor-pointer transform transition-all duration-200 hover:scale-105">
                  <div className="bg-white rounded-[20px] overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                    <div className="aspect-square overflow-hidden">
                      <Image
                        src={suggestedProduct.images[0]}
                        alt={suggestedProduct.name}
                        width={300}
                        height={300}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-[#222] mb-2 line-clamp-2 text-sm">
                        {suggestedProduct.name}
                      </h3>
                      <div className="flex items-center gap-2">
                        <span className="text-lg font-bold text-[#7E22CE]">
                          ₹{suggestedProduct.price}
                        </span>
                        {suggestedProduct.originalPrice >
                          suggestedProduct.price && (
                          <span className="text-sm text-gray-500 line-through">
                            ₹{suggestedProduct.originalPrice}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
