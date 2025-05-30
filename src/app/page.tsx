"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getFeaturedProducts } from "@/lib/products";
import { Star, Shield, Truck, Headphones, Award, Bot, Brain, MessageCircle, Search, ShoppingCart, Zap } from "lucide-react";

export default function HomePage() {
  const featuredProducts = getFeaturedProducts();

  // Auto-focus search bar on home page load
  useEffect(() => {
    // Small delay to ensure the header is fully rendered
    const timer = setTimeout(() => {
      // Look for the search input in desktop view first
      const desktopSearchInput = document.querySelector('input[placeholder*="Discover trending pet foods"]') as HTMLInputElement;
      if (desktopSearchInput && window.innerWidth >= 768) {
        desktopSearchInput.focus();
      }
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#7E22CE] to-[#9333EA] text-white">
        <div className="container mx-auto px-4 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Premium Pet Food at{" "}
                <span className="text-yellow-300">Affordable Prices</span>
              </h1>
              <p className="text-xl text-purple-100 leading-relaxed">
                When it comes to buying food for your pets, it's always
                difficult to find high quality at a reasonable price. Petty
                bridges this gap with premium nutrition your pets deserve.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/products">
                  <Button className="bg-white text-[#7E22CE] hover:bg-gray-100 text-lg px-8 py-4 rounded-xl font-semibold">
                    Shop Now
                  </Button>
                </Link>
                <Link href="/about">
                  <Button
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-[#7E22CE] text-lg px-8 py-4 rounded-xl font-semibold"
                  >
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>

            {/* Hero Image - Replaced grid cards with single image */}
            <div className="flex justify-center items-center">
              <div className="relative w-full h-[450px] rounded-lg overflow-hidden shadow-xl">
                <Image 
                  src="/pet-animals-hero.jpg" 
                  fill
                  alt="Premium Pet Food and Pet Care Collection" 
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#7E22CE]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-[#7E22CE]" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Free Delivery
              </h3>
              <p className="text-gray-600 text-sm">On orders above ₹500</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#7E22CE]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-[#7E22CE]" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Quality Assured
              </h3>
              <p className="text-gray-600 text-sm">100% genuine products</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#7E22CE]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Headphones className="w-8 h-8 text-[#7E22CE]" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">24/7 Support</h3>
              <p className="text-gray-600 text-sm">Expert pet care advice</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#7E22CE]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-[#7E22CE]" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Best Prices</h3>
              <p className="text-gray-600 text-sm">
                Unbeatable value guaranteed
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Introducing Petty AI Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 via-white to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-100 to-purple-200 px-6 py-3 rounded-full mb-6">
              <Bot className="w-6 h-6 text-purple-600" />
              <span className="text-purple-700 font-semibold">Introducing Petty AI</span>
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Meet Your AI Pet Care Assistant
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Revolutionary artificial intelligence technology that transforms how you care for your pets. 
              Get instant expert advice, personalized recommendations, and 24/7 support tailored to your furry friend's unique needs.
            </p>
          </div>

          {/* Main AI Features Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8 mb-16">
            <Card className="group hover:shadow-2xl transition-all duration-300 border-purple-100 hover:border-purple-300 bg-white">
              <CardContent className="p-8 text-center h-full">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <MessageCircle className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">General Pet Care</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Get instant answers to all your pet care questions. From feeding schedules and grooming tips 
                  to health concerns and behavioral advice - Petty AI is your 24/7 veterinary consultant.
                </p>
                <div className="space-y-2 text-sm text-purple-600">
                  <div className="flex items-center gap-2">
                    <Zap className="w-4 h-4" />
                    <span>Instant expert responses</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4" />
                    <span>Veterinary-backed advice</span>
                  </div>
                </div>
              </CardContent>
            </Card>
 <Card className="group hover:shadow-2xl transition-all duration-300 border-purple-100 hover:border-purple-300 bg-white">
              <CardContent className="p-8 text-center h-full">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Quick View</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Get a quick overview of any product without leaving your current page. 
                  View detailed specifications, images, and reviews in an instant popup modal.
                </p>
                <div className="space-y-2 text-sm text-orange-600">
                  <div className="flex items-center gap-2">
                    <Zap className="w-4 h-4" />
                    <span>Instant product preview</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Search className="w-4 h-4" />
                    <span>No page navigation needed</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="group hover:shadow-2xl transition-all duration-300 border-purple-100 hover:border-purple-300 bg-white">
              <CardContent className="p-8 text-center h-full">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Search className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Smart Product Finder</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Discover the perfect products for your pet with AI-powered recommendations. 
                  Our intelligent system analyzes your pet's breed, age, health conditions, and dietary needs.
                </p>
                <div className="space-y-2 text-sm text-blue-600">
                  <div className="flex items-center gap-2">
                    <Brain className="w-4 h-4" />
                    <span>Personalized recommendations</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Search className="w-4 h-4" />
                    <span>Intelligent product matching</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 border-purple-100 hover:border-purple-300 bg-white">
              <CardContent className="p-8 text-center h-full">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <ShoppingCart className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Cart Optimization</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Let AI optimize your shopping cart for maximum value and nutrition. 
                  Get suggestions for complementary products and money-saving bundle deals.
                </p>
                <div className="space-y-2 text-sm text-green-600">
                  <div className="flex items-center gap-2">
                    <ShoppingCart className="w-4 h-4" />
                    <span>Smart bundle suggestions</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4" />
                    <span>Maximum value optimization</span>
                  </div>
                </div>
              </CardContent>
            </Card>

           
          </div>

          {/* Revolutionizing Pet Care with AI */}
          <div className="bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800 rounded-[30px] p-8 md:p-12 text-white mb-16">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-3 bg-white/20 px-6 py-3 rounded-full mb-6">
                <Bot className="w-6 h-6 text-white" />
                <span className="text-white font-semibold">Meet Petty AI</span>
              </div>
              <h2 className="text-4xl font-bold mb-6">Revolutionizing Pet Care with AI</h2>
              <p className="text-xl text-purple-100 max-w-3xl mx-auto leading-relaxed">
                Petty AI is more than just a chatbot - it's your intelligent pet care companion, 
                designed to provide expert guidance and personalized recommendations for your furry friends.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              <Card className="bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Brain className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Intelligent Analysis</h3>
                  <p className="text-purple-100 text-sm leading-relaxed">
                    Advanced AI algorithms analyze your pet's needs and provide tailored nutrition advice 
                    based on breed, age, health conditions, and dietary preferences.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Search className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Smart Discovery</h3>
                  <p className="text-purple-100 text-sm leading-relaxed">
                    Find the perfect products instantly with AI-powered search and comparison features 
                    that understand ingredient benefits and nutritional values.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <MessageCircle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">24/7 Support</h3>
                  <p className="text-purple-100 text-sm leading-relaxed">
                    Get instant answers to your pet care questions any time of day. 
                    From feeding schedules to health concerns, Petty AI is always ready to help.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-6">How Petty AI Helps You</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                      <Zap className="w-4 h-4 text-yellow-300" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Instant Nutrition Guidance</h4>
                      <p className="text-purple-100 text-sm">Get immediate advice on feeding schedules, portion sizes, and dietary requirements.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                      <Shield className="w-4 h-4 text-green-300" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Health & Wellness Tips</h4>
                      <p className="text-purple-100 text-sm">Receive expert advice on maintaining your pet's health and preventing common issues.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                      <Search className="w-4 h-4 text-blue-300" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Product Recommendations</h4>
                      <p className="text-purple-100 text-sm">Discover products perfectly suited to your pet's specific needs and preferences.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <div className="relative">
                  <div className="w-64 h-64 mx-auto bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20">
                    <Bot className="w-24 h-24 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center animate-bounce">
                    <span className="text-2xl">🧠</span>
                  </div>
                  <div className="absolute -bottom-2 -left-2 w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center animate-pulse">
                    <span className="text-xl">💡</span>
                  </div>
                </div>
                
                <h4 className="text-xl font-bold mt-6 mb-2">Always Learning, Always Improving</h4>
                <p className="text-purple-100 text-sm">
                  Our AI continuously learns from the latest veterinary research and user feedback 
                  to provide you with the most accurate and up-to-date pet care information.
                </p>
              </div>
            </div>
          </div>

         
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Featured Products
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our most popular pet food products, carefully selected
              for quality and nutrition
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {featuredProducts.slice(0, 4).map((product) => (
              <Link key={product.id} href={`/products/${product.id}`}>
                <Card className="group h-full hover:shadow-xl transition-all duration-300 border-gray-200 hover:border-[#7E22CE]/30">
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
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 text-sm leading-tight">
                      {product.name}
                    </h3>
                    <p className="text-xs text-gray-500 mb-2">
                      {product.brand}
                    </p>

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

                    <div className="flex items-center justify-between">
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
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link href="/products">
              <Button className="bg-[#7E22CE] hover:bg-[#6b1fa3] text-white px-8 py-3 rounded-xl text-lg font-semibold">
                View All Products
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Shop by Category
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover premium nutrition tailored for every type of pet. From growing puppies to senior cats, 
              we have the perfect food for every stage of your pet's life.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Link href="/products?category=dog" className="group block">
              <Card className="group-hover:shadow-2xl transition-all duration-500 overflow-hidden border-0 bg-white/80 backdrop-blur-sm">
                <div className="aspect-[4/3] overflow-hidden relative">
                  <Image
                    src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=500&h=400&fit=crop&auto=format"
                    alt="Premium Dog Food Collection"
                    width={500}
                    height={400}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent group-hover:from-purple-900/70 transition-all duration-500">
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <h3 className="text-3xl font-bold text-white mb-3">Dog Food</h3>
                        <p className="text-white/90 text-lg mb-4">
                          Premium nutrition for active, healthy dogs
                        </p>
                        <div className="flex items-center gap-2 text-yellow-300">
                          <Star className="w-5 h-5 fill-current" />
                          <span className="text-white font-semibold">4.8+ Rating</span>
                        </div>
                      </div>
                      <div className="absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-purple-500 transition-all duration-300">
                        <span className="text-2xl">🐕</span>
                      </div>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6 bg-gradient-to-r from-orange-50 to-yellow-50">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Starting from</p>
                      <p className="text-2xl font-bold text-orange-600">₹299</p>
                    </div>
                    <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-semibold group-hover:scale-105 transition-transform duration-300">
                      Shop Now →
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/products?category=cat" className="group block">
              <Card className="group-hover:shadow-2xl transition-all duration-500 overflow-hidden border-0 bg-white/80 backdrop-blur-sm">
                <div className="aspect-[4/3] overflow-hidden relative">
                  <Image
                    src="https://images.unsplash.com/photo-1574231164645-d6f0e8553590?w=500&h=400&fit=crop&auto=format"
                    alt="Premium Cat Food Collection"
                    width={500}
                    height={400}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent group-hover:from-purple-900/70 transition-all duration-500">
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <h3 className="text-3xl font-bold text-white mb-3">Cat Food</h3>
                        <p className="text-white/90 text-lg mb-4">
                          Delicious meals for feline health & happiness
                        </p>
                        <div className="flex items-center gap-2 text-yellow-300">
                          <Star className="w-5 h-5 fill-current" />
                          <span className="text-white font-semibold">4.9+ Rating</span>
                        </div>
                      </div>
                      <div className="absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-purple-500 transition-all duration-300">
                        <span className="text-2xl">🐱</span>
                      </div>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6 bg-gradient-to-r from-blue-50 to-purple-50">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Starting from</p>
                      <p className="text-2xl font-bold text-blue-600">₹249</p>
                    </div>
                    <Button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold group-hover:scale-105 transition-transform duration-300">
                      Shop Now →
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/products?category=treats" className="group block">
              <Card className="group-hover:shadow-2xl transition-all duration-500 overflow-hidden border-0 bg-white/80 backdrop-blur-sm">
                <div className="aspect-[4/3] overflow-hidden relative">
                  <Image
                    src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=500&h=400&fit=crop&auto=format"
                    alt="Premium Pet Treats Collection"
                    width={500}
                    height={400}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent group-hover:from-purple-900/70 transition-all duration-500">
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <h3 className="text-3xl font-bold text-white mb-3">Pet Treats</h3>
                        <p className="text-white/90 text-lg mb-4">
                          Healthy rewards & training snacks
                        </p>
                        <div className="flex items-center gap-2 text-yellow-300">
                          <Star className="w-5 h-5 fill-current" />
                          <span className="text-white font-semibold">4.7+ Rating</span>
                        </div>
                      </div>
                      <div className="absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-purple-500 transition-all duration-300">
                        <span className="text-2xl">🦴</span>
                      </div>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6 bg-gradient-to-r from-green-50 to-emerald-50">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Starting from</p>
                      <p className="text-2xl font-bold text-green-600">₹99</p>
                    </div>
                    <Button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg font-semibold group-hover:scale-105 transition-transform duration-300">
                      Shop Now →
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>
          
          {/* Category Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">500+</div>
              <p className="text-gray-600">Dog Food Products</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">300+</div>
              <p className="text-gray-600">Cat Food Varieties</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">200+</div>
              <p className="text-gray-600">Healthy Treats</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">50+</div>
              <p className="text-gray-600">Premium Brands</p>
            </div>
          </div>
        </div>
      </section>
       {/* Visual AI Representation */}
          <div className="text-center">
            <div className="relative inline-block">
              <div className="w-32 h-32 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl">
                <Bot className="w-16 h-16 text-white" />
              </div>
              <div className="absolute -top-2 -right-2 w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center animate-bounce">
                <span className="text-xl">🧠</span>
              </div>
              <div className="absolute -bottom-2 -left-2 w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center animate-pulse">
                <span className="text-lg">💡</span>
              </div>
            </div>
            
            <h4 className="text-2xl font-bold text-gray-900 mb-4">Ready to Experience the Future of Pet Care?</h4>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Try Petty AI today and discover how artificial intelligence can help you provide the best care for your beloved pets. 
              Simply click the "Petty AI" button in the header or use the "/" keyboard shortcut to get started!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/help">
                <Button
                  className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-xl text-lg font-semibold"
                >
                  Learn More About Our Products
                </Button>
              </Link>
              <Link href="/help">
                <Button
                  variant="outline"
                  className="border-purple-600 text-purple-600 hover:bg-purple-50 px-8 py-3 rounded-xl text-lg font-semibold"
                >
                  Get Help & Support
                </Button>
              </Link>
            </div>
          </div>

      {/* Add bottom padding to prevent overlapping */}
      <div className="pb-16"></div>
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#7E22CE] to-[#9333EA] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Give Your Pet the Best?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Join thousands of pet parents who trust Petty for their pet's
            nutrition needs
          </p>
          <Link href="/products">
            <Button className="bg-white text-[#7E22CE] hover:bg-gray-100 text-lg px-8 py-4 rounded-xl font-semibold">
              Start Shopping
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
