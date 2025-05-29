"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Home, ShoppingBag, Frown } from "lucide-react";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-100 flex items-center justify-center p-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* 404 Hero Section */}
        <div className="mb-8">
          <div className="relative">
            {/* Large 404 Text */}
            <h1 className="text-9xl md:text-[12rem] font-bold text-purple-200 select-none">
              404
            </h1>
            
            {/* Cute Pet Icon Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-purple-600 text-white p-4 rounded-full shadow-lg">
                <Frown className="w-12 h-12" />
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <Card className="p-8 shadow-xl border border-purple-200 bg-white/80 backdrop-blur-sm">
          <div className="space-y-6">
            {/* Title */}
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Oops! Page Not Found
            </h2>
            
            {/* Description */}
            <p className="text-lg text-gray-600 mb-6 max-w-md mx-auto">
              It looks like this page went to chase a squirrel and never came back! 
              Don't worry, let's help you find what you're looking for.
            </p>

            {/* Pet-themed Message */}
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 mb-6">
              <p className="text-purple-700 font-medium">
                🐾 Even our best search dogs couldn't sniff out this page!
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild 
                className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3"
              >
                <Link href="/" className="flex items-center gap-2">
                  <Home className="w-4 h-4" />
                  Back to Home
                </Link>
              </Button>
              
              <Button 
                asChild 
                variant="outline"
                className="border-purple-600 text-purple-600 hover:bg-purple-50 px-6 py-3"
              >
                <Link href="/products" className="flex items-center gap-2">
                  <ShoppingBag className="w-4 h-4" />
                  Browse Products
                </Link>
              </Button>
            </div>

            {/* Additional Links */}
            <div className="pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-500 mb-4">
                Looking for something specific?
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <Link 
                  href="/about" 
                  className="text-purple-600 hover:text-purple-800 hover:underline"
                >
                  About Us
                </Link>
                <Link 
                  href="/contact" 
                  className="text-purple-600 hover:text-purple-800 hover:underline"
                >
                  Contact Support
                </Link>
                <Link 
                  href="/cart" 
                  className="text-purple-600 hover:text-purple-800 hover:underline"
                >
                  View Cart
                </Link>
              </div>
            </div>
          </div>
        </Card>

        {/* Fun Pet Facts */}
        <div className="mt-8 text-center">
          <Card className="p-4 bg-gradient-to-r from-purple-100 to-pink-100 border border-purple-200">
            <p className="text-sm text-purple-700">
              💡 <strong>Pet Fact:</strong> Did you know that dogs can learn over 150 words? 
              Unfortunately, "404" isn't one of them! 🐕
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}
