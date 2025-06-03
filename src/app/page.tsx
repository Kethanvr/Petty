"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getFeaturedProducts, getBestSellerProducts } from "@/lib/products";
import { getInsuranceFeatures } from "@/lib/insurance";
import { getFeaturedGuides } from "@/lib/petCareGuides";
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
} from "lucide-react";

export default function HomePage() {
  const featuredProducts = getFeaturedProducts();
  const bestSellers = getBestSellerProducts().slice(0, 4);
  const insuranceFeatures = getInsuranceFeatures().slice(0, 3);
  const featuredGuides = getFeaturedGuides().slice(0, 3);

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
              Everything Your Pet Needs, <br />
              <span className="text-purple-200">All in One Place</span>
            </h1>
            <p className="text-xl mb-8 text-purple-100">
              Premium pet food, accessories, health insurance, and expert care
              guides. Plus auto-refill subscriptions to never run out of
              essentials!
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

      {/* Auto-Refill Subscription Highlight */}
      <section className="py-16 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Zap className="w-6 h-6 text-green-600" />
                  <Badge className="bg-green-100 text-green-700 hover:bg-green-100">
                    Smart Auto-Refill
                  </Badge>
                </div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Never Run Out of Pet Food Again
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Set up automatic deliveries and save up to 20% on every order.
                  Smart scheduling ensures your pet always has fresh food.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span>Save up to 20% on every subscription order</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span>Flexible scheduling - modify or pause anytime</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span>Free shipping on all subscription orders</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span>AI-powered consumption tracking</span>
                  </div>
                </div>
                <Link href="/products">
                  <Button
                    size="lg"
                    className="bg-green-600 hover:bg-green-700 text-white"
                  >
                    <Zap className="w-5 h-5 mr-2" />
                    Start Auto-Refill
                  </Button>
                </Link>
              </div>
              <div className="relative">
                <div className="bg-white rounded-2xl shadow-xl p-8">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Subscription Plans
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="border border-gray-200 rounded-lg p-4">
                        <div className="text-2xl font-bold text-green-600">
                          5%
                        </div>
                        <div className="text-sm text-gray-600">Weekly</div>
                      </div>
                      <div className="border border-gray-200 rounded-lg p-4">
                        <div className="text-2xl font-bold text-green-600">
                          10%
                        </div>
                        <div className="text-sm text-gray-600">Bi-weekly</div>
                      </div>
                      <div className="border border-gray-200 rounded-lg p-4">
                        <div className="text-2xl font-bold text-green-600">
                          15%
                        </div>
                        <div className="text-sm text-gray-600">Monthly</div>
                      </div>
                      <div className="border border-green-200 bg-green-50 rounded-lg p-4">
                        <div className="text-2xl font-bold text-green-600">
                          20%
                        </div>
                        <div className="text-sm text-green-600 font-semibold">
                          Bi-monthly
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProducts.map((product) => (
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
                    <Link href={`/products/${product.id}`}>
                      <Button
                        size="sm"
                        className="bg-[#7E22CE] hover:bg-[#6b1fa3]"
                      >
                        View Details
                      </Button>
                    </Link>
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

      {/* Pet Insurance Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Shield className="w-8 h-8 text-[#7E22CE]" />
                <Badge className="bg-[#7E22CE] hover:bg-[#7E22CE] text-white">
                  Pet Health Insurance
                </Badge>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Protect Your Pet's Health
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Comprehensive health insurance plans starting from ₹99/month.
                Get cashless treatment, 24/7 emergency support, and access to
                1200+ partner clinics.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {insuranceFeatures.map((feature, index) => (
                <Card
                  key={index}
                  className="text-center hover:shadow-lg transition-shadow"
                >
                  <CardContent className="p-8">
                    <div className="text-4xl mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-[#7E22CE] mb-2">
                    ₹99-₹349
                  </div>
                  <div className="text-gray-600">Monthly Plans</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#7E22CE] mb-2">
                    1,200+
                  </div>
                  <div className="text-gray-600">Partner Clinics</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#7E22CE] mb-2">
                    48hr
                  </div>
                  <div className="text-gray-600">Claim Processing</div>
                </div>
              </div>
              <div className="text-center mt-8">
                <Link href="/insurance">
                  <Button
                    size="lg"
                    className="bg-[#7E22CE] hover:bg-[#6b1fa3] text-white px-8"
                  >
                    <Shield className="w-5 h-5 mr-2" />
                    Get Pet Insurance
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pet Care Guides Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-2 mb-4">
                <BookOpen className="w-8 h-8 text-[#7E22CE]" />
                <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-100">
                  Expert Content
                </Badge>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Pet Care Guides & Video Tutorials
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Learn from veterinarians and pet experts with our comprehensive
                video guides. Everything from nutrition to training, all in one
                place.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {featuredGuides.map((guide) => (
                <Card
                  key={guide.id}
                  className="overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="relative aspect-video">
                    <Image
                      src={guide.thumbnail}
                      alt={guide.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                      <Button
                        size="sm"
                        className="bg-white text-gray-900 hover:bg-gray-100"
                      >
                        <Play className="w-4 h-4 mr-1" />
                        Watch
                      </Button>
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
                      {guide.duration}
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="outline">{guide.petType}</Badge>
                      <Badge className="bg-green-100 text-green-700 hover:bg-green-100">
                        {guide.difficulty}
                      </Badge>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                      {guide.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                      {guide.description}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span>By {guide.authorName}</span>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span>{guide.views.toLocaleString()} views</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <Link href="/care-guides">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-[#7E22CE] text-[#7E22CE] hover:bg-[#7E22CE] hover:text-white"
                >
                  <BookOpen className="w-5 h-5 mr-2" />
                  View All Guides
                </Button>
              </Link>
            </div>
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
                  <Link href={`/products/${product.id}`}>
                    <Button
                      size="sm"
                      className="w-full bg-[#7E22CE] hover:bg-[#6b1fa3]"
                    >
                      Shop Now
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#7E22CE] text-white">
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
      </section>

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
    </div>
  );
}
