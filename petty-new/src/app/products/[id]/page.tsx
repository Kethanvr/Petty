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
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShoppingCart, Star, Minus, Plus, Heart, Share2, Truck, Shield, RotateCcw } from "lucide-react";

export default function ProductPage() {
  const params = useParams();
  const productId = parseInt(params.id as string);
  const product = getProductById(productId);
  const { addToCart } = useCart();

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedAge, setSelectedAge] = useState("Adult");
  const [selectedQuantity, setSelectedQuantity] = useState("1kg");
  const [itemQuantity, setItemQuantity] = useState(1);
  const [isFavorited, setIsFavorited] = useState(false);

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
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-3">
          <nav className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-[#7E22CE]">Home</Link>
            <span>/</span>
            <Link href="/products" className="hover:text-[#7E22CE]">Products</Link>
            <span>/</span>
            <span className="text-gray-900">{product.name}</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Product Images */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="aspect-square bg-white rounded-xl overflow-hidden shadow-lg border">
              <Image
                src={product.images[selectedImage]}
                alt={product.name}
                width={600}
                height={600}
                className="w-full h-full object-contain p-4"
                priority
              />
            </div>

            {/* Thumbnail Images */}
            <div className="flex gap-2 overflow-x-auto">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
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
                    className="w-full h-full object-contain p-1"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Information */}
          <div className="space-y-6">
            {/* Brand and Title */}
            <div>
              <p className="text-sm text-gray-600 uppercase tracking-wide font-medium mb-2">
                {product.brand}
              </p>
              <h1 className="text-3xl font-bold text-gray-900 leading-tight mb-4">
                {product.name}
              </h1>

              {/* Rating and Reviews */}
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center">
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
                  <span className="text-gray-600 font-medium ml-2">
                    {product.rating}/5
                  </span>
                </div>
                <span className="text-gray-400">|</span>
                <span className="text-sm text-gray-600">142 reviews</span>
              </div>
            </div>

            {/* Price */}
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="flex items-center gap-4 mb-2">
                <span className="text-3xl font-bold text-[#7E22CE]">
                  ₹{product.price}
                </span>
                {product.originalPrice > product.price && (
                  <>
                    <span className="text-xl text-gray-500 line-through">
                      ₹{product.originalPrice}
                    </span>
                    <Badge className="bg-red-100 text-red-600 hover:bg-red-100">
                      Save {product.discount}%
                    </Badge>
                  </>
                )}
              </div>
              <p className="text-sm text-gray-600">Inclusive of all taxes</p>
              <p className="text-sm text-green-600 font-medium">Free delivery on orders above ₹500</p>
            </div>

            {/* Product Description */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">About this product</h3>
              <p className="text-gray-700 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Age Categories */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Age Category</h3>
              <div className="flex gap-2 flex-wrap">
                {product.ageCategories.map((age) => (
                  <Button
                    key={age}
                    variant={selectedAge === age ? "default" : "outline"}
                    className={`${
                      selectedAge === age
                        ? "bg-[#7E22CE] hover:bg-[#6b1fa3] text-white"
                        : "border-gray-300 text-gray-700 hover:border-[#7E22CE] hover:text-[#7E22CE]"
                    }`}
                    onClick={() => setSelectedAge(age)}
                  >
                    {age}
                  </Button>
                ))}
              </div>
            </div>

            {/* Package Size */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Package Size</h3>
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
                          : "border-gray-300 text-gray-700 hover:border-[#7E22CE]"
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
              <h3 className="font-semibold text-gray-900 mb-3">Quantity</h3>
              <div className="flex items-center gap-3">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setItemQuantity(Math.max(1, itemQuantity - 1))}
                  className="border-gray-300 text-gray-700 hover:border-[#7E22CE] hover:text-[#7E22CE]"
                >
                  <Minus className="w-4 h-4" />
                </Button>
                <Input
                  type="number"
                  value={itemQuantity}
                  onChange={(e) =>
                    setItemQuantity(Math.max(1, parseInt(e.target.value) || 1))
                  }
                  className="w-20 text-center border-gray-300 focus:border-[#7E22CE] focus:ring-[#7E22CE]"
                  min="1"
                />
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setItemQuantity(itemQuantity + 1)}
                  className="border-gray-300 text-gray-700 hover:border-[#7E22CE] hover:text-[#7E22CE]"
                >
                  <Plus className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4 pt-6">
              <div className="flex gap-4">
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
              
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setIsFavorited(!isFavorited)}
                  className={`flex-1 ${isFavorited ? 'text-red-500 border-red-300' : 'text-gray-600 border-gray-300'}`}
                >
                  <Heart className={`w-4 h-4 mr-2 ${isFavorited ? 'fill-current' : ''}`} />
                  {isFavorited ? 'Favorited' : 'Add to Favorites'}
                </Button>
                <Button variant="outline" size="sm" className="flex-1 text-gray-600 border-gray-300">
                  <Share2 className="w-4 h-4 mr-2" />
                  Share
                </Button>
              </div>
            </div>

            {/* Delivery & Service Info */}
            <div className="border-t pt-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <Truck className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Free Delivery</p>
                    <p className="text-xs text-gray-600">On orders above ₹500</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <Shield className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Secure Payment</p>
                    <p className="text-xs text-gray-600">100% secure payments</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                    <RotateCcw className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Easy Returns</p>
                    <p className="text-xs text-gray-600">7-day return policy</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mb-16">
          <Card>
            <CardHeader>
              <CardTitle>Product Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Specifications</h4>
                  <dl className="space-y-2">
                    <div className="flex justify-between">
                      <dt className="text-gray-600">Brand:</dt>
                      <dd className="font-medium">{product.brand}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-gray-600">Category:</dt>
                      <dd className="font-medium">{product.category}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-gray-600">Age Groups:</dt>
                      <dd className="font-medium">{product.ageCategories.join(", ")}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-gray-600">Available Sizes:</dt>
                      <dd className="font-medium">{product.quantities.join(", ")}</dd>
                    </div>
                  </dl>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Nutritional Benefits</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• High-quality protein for muscle development</li>
                    <li>• Essential vitamins and minerals</li>
                    <li>• No artificial colors or preservatives</li>
                    <li>• Supports healthy digestion</li>
                    <li>• Promotes shiny coat and healthy skin</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Suggested Products */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">You Might Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {suggestedProducts.map((suggestedProduct) => (
              <Link
                key={suggestedProduct.id}
                href={`/products/${suggestedProduct.id}`}
              >
                <Card className="group h-full hover:shadow-xl transition-all duration-300 border-gray-200 hover:border-[#7E22CE]/30">
                  <div className="aspect-square overflow-hidden rounded-t-lg">
                    <Image
                      src={suggestedProduct.images[0]}
                      alt={suggestedProduct.name}
                      width={300}
                      height={300}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 text-sm">
                      {suggestedProduct.name}
                    </h3>
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-bold text-[#7E22CE]">
                        ₹{suggestedProduct.price}
                      </span>
                      {suggestedProduct.originalPrice > suggestedProduct.price && (
                        <span className="text-sm text-gray-500 line-through">
                          ₹{suggestedProduct.originalPrice}
                        </span>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
