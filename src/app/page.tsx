"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getFeaturedProducts, getBestSellerProducts, getProductsByCategory } from "@/lib/products";
import {
  Star,
  Shield,
  Truck,
  Headphones,
  Award,
  Bot,
  Brain,
  MessageCircle,
  Search,
  ShoppingCart,
  Zap,
  BookOpen,
  Play,
  CheckCircle,
  Users,
  Clock,
  X,
  Loader2,
} from "lucide-react";

export default function HomePage() {
  const featuredProducts = getFeaturedProducts();
  const bestSellers = getBestSellerProducts().slice(0, 7);
  const popularProducts = getProductsByCategory("Dog Food").concat(getProductsByCategory("Cat Food")).slice(0, 4);
  
  // State for purchase overlay
  const [showPurchaseOverlay, setShowPurchaseOverlay] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Handle purchase click
  const handlePurchaseClick = () => {
    setShowPurchaseOverlay(true);
  };

  const handleConfirmPurchase = () => {
    setIsLoading(true);
    // Simulate loading for 2 seconds
    setTimeout(() => {
      setIsLoading(false);
      setShowPurchaseOverlay(false);
      // Show "coming soon" message
      alert("Website will be live soon! We're working hard to bring you the best pet care experience.");
    }, 2000);
  };

  const handleCloseOverlay = () => {
    setShowPurchaseOverlay(false);
    setIsLoading(false);
  };

  // Auto-focus search bar on home page load
  useEffect(() => {
    // Small delay to ensure the header is fully rendered
    const timer = setTimeout(() => {
      // Look for the search input in desktop view first
      const desktopSearchInput = document.querySelector(
        'input[placeholder*="Discover trending pet foods"]'
      ) as HTMLInputElement;
      if (desktopSearchInput && window.innerWidth >= 768) {
        desktopSearchInput.focus();
      }
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#7E22CE] to-[#9333EA] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Premium Pet Care with <br />
              <span className="text-yellow-300">AI-Powered Intelligence</span>
            </h1>
            <p className="text-xl mb-8 text-purple-100">
              Experience the future of pet care with Petty AI. Get expert nutrition advice,
              health insurance, and premium products - all powered by artificial intelligence
              to give your pets the best care possible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/products">
                <Button
                  size="lg"
                  className="bg-white text-[#7E22CE] hover:bg-gray-100 px-8 py-4 text-lg"
                >
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Shop Now
                </Button>
              </Link>
              <Link href="/insurance">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-[#7E22CE] px-8 py-4 text-lg"
                >
                  <Shield className="w-5 h-5 mr-2" />
                  Get Insurance
                </Button>
              </Link>
            </div>

            {/* Hero Features */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-3">
                  <Truck className="w-6 h-6" />
                </div>
                <span className="font-semibold">Free Delivery</span>
                <span className="text-sm text-purple-200">On orders ₹500+</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-3">
                  <Zap className="w-6 h-6" />
                </div>
                <span className="font-semibold">Auto-Refill</span>
                <span className="text-sm text-purple-200">Save up to 20%</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-3">
                  <Shield className="w-6 h-6" />
                </div>
                <span className="font-semibold">Pet Insurance</span>
                <span className="text-sm text-purple-200">From ₹99/month</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-3">
                  <BookOpen className="w-6 h-6" />
                </div>
                <span className="font-semibold">Expert Guides</span>
                <span className="text-sm text-purple-200">Video tutorials</span>
              </div>
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
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Featured Products
            </h2>
            <p className="text-lg text-gray-600">
              Premium quality products for your beloved pets
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 mb-12">
            {featuredProducts.slice(0, 6).map((product) => (
              <Card
                key={product.id}
                className="group hover:shadow-lg transition-all duration-300"
              >
                <div className="aspect-square overflow-hidden rounded-t-lg">
                  <Image
                    src={product.images[0]}
                    alt={product.name}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="outline">{product.category}</Badge>
                    {product.isBestSeller && (
                      <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">
                        <Star className="w-3 h-3 mr-1" />
                        Best Seller
                      </Badge>
                    )}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                    {product.name}
                  </h3>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-xl font-bold text-[#7E22CE]">
                      ₹{product.price}
                    </span>
                    {product.originalPrice > product.price && (
                      <span className="text-sm text-gray-500 line-through">
                        ₹{product.originalPrice}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm text-gray-600">
                        {product.rating}
                      </span>
                    </div>
                    <div className="flex gap-2">
                      <Link href={`/products/${product.id}`}>
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-purple-600 text-purple-600 hover:bg-purple-50"
                        >
                          View
                        </Button>
                      </Link>
                      <Button
                        onClick={handlePurchaseClick}
                        size="sm"
                        className="bg-[#7E22CE] hover:bg-[#6b1fa3]"
                      >
                        Buy
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link href="/products">
              <Button
                size="lg"
                variant="outline"
                className="border-[#7E22CE] text-[#7E22CE] hover:bg-[#7E22CE] hover:text-white"
              >
                View All Products
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Popular Products Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Popular Products
            </h2>
            <p className="text-lg text-gray-600">
              Discover more amazing products loved by pet parents
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {popularProducts.map((product) => (
              <Card
                key={product.id}
                className="group hover:shadow-lg transition-all duration-300"
              >
                <div className="aspect-square overflow-hidden rounded-t-lg relative">
                  <Image
                    src={product.images[0]}
                    alt={product.name}
                    width={300}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {product.discount > 0 && (
                    <Badge className="absolute top-2 right-2 bg-red-500 hover:bg-red-500 text-white">
                      -{product.discount}%
                    </Badge>
                  )}
                  {product.isBestSeller && (
                    <Badge className="absolute top-2 left-2 bg-yellow-500 hover:bg-yellow-500 text-white">
                      <Star className="w-3 h-3 mr-1" />
                      Best Seller
                    </Badge>
                  )}
                </div>
                <CardContent className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="outline" className="text-xs">{product.category}</Badge>
                    <Badge variant="outline" className="text-xs">{product.petType}</Badge>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 text-sm">
                    {product.name}
                  </h3>
                  <p className="text-xs text-gray-500 mb-2">
                    {product.brand}
                  </p>
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
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm text-gray-600">
                        {product.rating}
                      </span>
                    </div>
                    <div className="flex gap-1">
                      <Link href={`/products/${product.id}`}>
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-purple-600 text-purple-600 hover:bg-purple-50 text-xs px-2"
                        >
                          View
                        </Button>
                      </Link>
                      <Button
                        onClick={handlePurchaseClick}
                        size="sm"
                        className="bg-[#7E22CE] hover:bg-[#6b1fa3] text-xs px-2"
                      >
                        Buy
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link href="/products">
              <Button
                size="lg"
                className="bg-[#7E22CE] hover:bg-[#6b1fa3] text-white"
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                Explore All Products
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Award className="w-8 h-8 text-yellow-600" />
              <Badge className="bg-yellow-100 text-yellow-700 hover:bg-yellow-100">
                Top Rated
              </Badge>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Best Sellers
            </h2>
            <p className="text-lg text-gray-600">
              Most loved products by pet parents
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {bestSellers.map((product) => (
              <Card
                key={product.id}
                className="group hover:shadow-lg transition-all duration-300"
              >
                <div className="aspect-square overflow-hidden rounded-t-lg relative">
                  <Image
                    src={product.images[0]}
                    alt={product.name}
                    width={300}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-2 left-2 bg-yellow-500 hover:bg-yellow-500 text-white">
                    <Star className="w-3 h-3 mr-1" />
                    Best Seller
                  </Badge>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 text-sm">
                    {product.name}
                  </h3>
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
                  <div className="flex gap-2">
                    <Link href={`/products/${product.id}`} className="flex-1">
                      <Button
                        size="sm"
                        variant="outline"
                        className="w-full border-purple-600 text-purple-600 hover:bg-purple-50"
                      >
                        View Details
                      </Button>
                    </Link>
                    <Button
                      onClick={handlePurchaseClick}
                      size="sm"
                      className="flex-1 bg-[#7E22CE] hover:bg-[#6b1fa3]"
                    >
                      Buy Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      {/* <section className="py-16 bg-[#7E22CE] text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">50,000+</div>
              <div className="text-purple-200">Happy Pets</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">25,000+</div>
              <div className="text-purple-200">Pet Parents</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">1,200+</div>
              <div className="text-purple-200">Partner Clinics</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">4.8★</div>
              <div className="text-purple-200">Customer Rating</div>
            </div>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-100 to-pink-100">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Ready to Give Your Pet the Best?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join thousands of pet parents who trust Petty for all their pet
              care needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/products">
                <Button
                  size="lg"
                  className="bg-[#7E22CE] hover:bg-[#6b1fa3] text-white px-8 py-4"
                >
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Start Shopping
                </Button>
              </Link>
              <Link href="/insurance">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-[#7E22CE] text-[#7E22CE] hover:bg-[#7E22CE] hover:text-white px-8 py-4"
                >
                  <Shield className="w-5 h-5 mr-2" />
                  Get Insurance Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Purchase Confirmation Overlay */}
      {showPurchaseOverlay && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 overflow-hidden">
            {!isLoading ? (
              <>
                {/* Modal Header */}
                <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white p-6 relative">
                  <button
                    onClick={handleCloseOverlay}
                    className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <ShoppingCart className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Purchase Confirmation</h3>
                    <p className="text-purple-100">Ready to buy this amazing product?</p>
                  </div>
                </div>

                {/* Modal Content */}
                <div className="p-6">
                  <div className="text-center mb-6">
                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4">
                      <div className="flex items-center justify-center gap-2 text-yellow-700">
                        <Clock className="w-5 h-5" />
                        <span className="font-medium">Coming Soon!</span>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4">
                      We're excited to let you know that our full e-commerce functionality is currently under development.
                    </p>
                    <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                      <p className="text-purple-700 text-sm">
                        <strong>🚀 Website launching soon!</strong><br />
                        You'll be able to purchase all your favorite pet products very soon.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Button
                      onClick={handleCloseOverlay}
                      variant="outline"
                      className="flex-1"
                    >
                      Got it!
                    </Button>
                    <Button
                      onClick={handleConfirmPurchase}
                      className="flex-1 bg-purple-600 hover:bg-purple-700 text-white"
                    >
                      Notify Me When Live
                    </Button>
                  </div>
                </div>
              </>
            ) : (
              /* Loading State */
              <div className="p-8 text-center">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Loader2 className="w-8 h-8 text-purple-600 animate-spin" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Processing...</h3>
                  <p className="text-gray-600">Setting up your notification preferences</p>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-3 h-3 text-white" />
                    </div>
                    <span>Checking product availability...</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-3 h-3 text-white" />
                    </div>
                    <span>Setting up notifications...</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <Loader2 className="w-4 h-4 text-purple-600 animate-spin" />
                    <span>Almost done...</span>
                  </div>
                </div>

                <div className="mt-6 bg-purple-50 border border-purple-200 rounded-lg p-4">
                  <p className="text-purple-700 text-sm">
                    <strong>🎉 Great news!</strong><br />
                    We'll notify you as soon as our store goes live!
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
