import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getFeaturedProducts } from "@/lib/products";
import { Star, Shield, Truck, Headphones, Award } from "lucide-react";

export default function HomePage() {
  const featuredProducts = getFeaturedProducts();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#7E22CE] to-[#9333EA] text-white">
        <div className="container mx-auto px-4 py-16">
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
              <div className="relative w-full h-[350px] rounded-lg overflow-hidden shadow-xl">
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
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
            Shop by Category
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="aspect-[4/3] overflow-hidden relative">
                <Image
                  src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=400&h=300&fit=crop"
                  alt="Dog Food"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <div className="text-center text-white">
                    <h3 className="text-2xl font-bold mb-2">Dog Food</h3>
                    <p className="text-purple-200">
                      Premium nutrition for dogs
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="aspect-[4/3] overflow-hidden relative">
                <Image
                  src="https://images.unsplash.com/photo-1574231164645-d6f0e8553590?w=400&h=300&fit=crop"
                  alt="Cat Food"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <div className="text-center text-white">
                    <h3 className="text-2xl font-bold mb-2">Cat Food</h3>
                    <p className="text-purple-200">Healthy meals for cats</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="aspect-[4/3] overflow-hidden relative">
                <Image
                  src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=400&h=300&fit=crop"
                  alt="Treats"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <div className="text-center text-white">
                    <h3 className="text-2xl font-bold mb-2">Treats</h3>
                    <p className="text-purple-200">Delicious rewards</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

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
