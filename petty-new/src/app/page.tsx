import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { getFeaturedProducts } from "@/lib/products";

export default function HomePage() {
  const featuredProducts = getFeaturedProducts();

  return (
    <div className="min-h-screen bg-[#f0f4ff]">
      {/* Main Content */}
      <main className="container mx-auto px-4 py-10">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
          {/* Intro Section */}
          <section className="intro max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold text-[#222] mb-6 leading-tight">
              Introducing Petty
            </h2>
            <p className="text-lg mb-5 text-[#666] leading-relaxed">
              When it comes to buy food for yours pets its always a difficult
              choice for us to buy food with high quality and at a reasonable
              price but if you are at this situation then worry not
            </p>
            <p className="text-lg mb-8 text-[#666] leading-relaxed">
              Because "Petty offers you High Quality Pet Foods With An
              Affordable Cost" so no more confusion from here now just click
              here👇 check out our products
            </p>
            <Link href="/products">
              <Button className="btn-primary text-lg px-8 py-4 bg-[#7E22CE] hover:bg-[#6b1fa3] text-white rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl">
                Browse Petty
              </Button>
            </Link>
          </section>

          {/* Featured Products Grid */}
          <section className="art-grid w-full lg:w-auto">
            <div className="bg-[#d7b3ff] rounded-[30px] p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {featuredProducts.map((product) => (
                  <Link key={product.id} href={`/products/${product.id}`}>
                    <div className="art-box group cursor-pointer transform transition-all duration-200 hover:scale-105">
                      <div className="w-[250px] h-[250px] bg-[#eee] rounded-[20px] overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                        <Image
                          src={product.images[0]}
                          alt={product.name}
                          width={250}
                          height={250}
                          className="w-full h-full object-cover rounded-[20px] group-hover:scale-110 transition-transform duration-300"
                          priority={product.id <= 3}
                        />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Additional Products Showcase */}
      <section className="container mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <h3 className="text-3xl font-bold text-[#222] mb-4">
            Our Popular Products
          </h3>
          <p className="text-lg text-[#666] max-w-2xl mx-auto">
            Discover our most loved pet food products, carefully selected for
            quality and nutrition
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
          {featuredProducts.slice(0, 4).map((product) => (
            <Link key={product.id} href={`/products/${product.id}`}>
              <div className="product-card group cursor-pointer transform transition-all duration-200 hover:scale-105">
                <div className="bg-white rounded-[20px] overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                  <div className="aspect-square overflow-hidden">
                    <Image
                      src={product.images[0]}
                      alt={product.name}
                      width={300}
                      height={300}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-[#222] mb-2 line-clamp-2 text-sm">
                      {product.name}
                    </h4>
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-bold text-[#7E22CE]">
                        ₹{product.price}
                      </span>
                      <span className="text-sm text-gray-500 line-through">
                        ₹{product.originalPrice}
                      </span>
                      <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded">
                        -{product.discount}%
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link href="/products">
            <Button
              variant="outline"
              className="border-[#7E22CE] text-[#7E22CE] hover:bg-[#7E22CE] hover:text-white px-8 py-3 rounded-xl transition-all duration-200"
            >
              View All Products
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
