"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import {
  Zap,
  Package,
  Clock,
  Percent,
  Truck,
  Shield,
  Star,
  CheckCircle,
  Calendar,
  Heart,
  AlertCircle,
  Gift,
  TrendingUp,
  ArrowRight,
  Plus,
  Minus,
} from "lucide-react";
import { products } from "@/lib/products";

interface AutoRefillSubscription {
  id: string;
  productId: number;
  frequency: "weekly" | "bi-weekly" | "monthly";
  quantity: number;
  nextDelivery: string;
  discount: number;
  status: "active" | "paused" | "cancelled";
}

export default function AutoRefillPage() {
  const [selectedFrequency, setSelectedFrequency] = useState<"weekly" | "bi-weekly" | "monthly">("monthly");
  const [selectedProducts, setSelectedProducts] = useState<number[]>([]);
  const [quantities, setQuantities] = useState<{ [key: number]: number }>({});
  const [showSetup, setShowSetup] = useState(false);

  // Mock existing subscriptions
  const [subscriptions, setSubscriptions] = useState<AutoRefillSubscription[]>([
    {
      id: "sub_1",
      productId: 1,
      frequency: "monthly",
      quantity: 2,
      nextDelivery: "2025-01-15",
      discount: 15,
      status: "active"
    },
    {
      id: "sub_2",
      productId: 3,
      frequency: "bi-weekly",
      quantity: 1,
      nextDelivery: "2025-01-08",
      discount: 20,
      status: "active"
    }
  ]);

  const frequencyOptions = [
    { value: "weekly", label: "Weekly", discount: 25, description: "Perfect for high-consumption pets" },
    { value: "bi-weekly", label: "Bi-Weekly", discount: 20, description: "Most popular choice" },
    { value: "monthly", label: "Monthly", discount: 15, description: "Great for regular feeding" }
  ];

  const getProductById = (id: number) => products.find(p => p.id === id);

  const addProductToRefill = (productId: number) => {
    if (!selectedProducts.includes(productId)) {
      setSelectedProducts([...selectedProducts, productId]);
      setQuantities({ ...quantities, [productId]: 1 });
    }
  };

  const removeProductFromRefill = (productId: number) => {
    setSelectedProducts(selectedProducts.filter(id => id !== productId));
    const newQuantities = { ...quantities };
    delete newQuantities[productId];
    setQuantities(newQuantities);
  };

  const updateQuantity = (productId: number, change: number) => {
    const newQuantity = Math.max(1, (quantities[productId] || 1) + change);
    setQuantities({ ...quantities, [productId]: newQuantity });
  };

  const calculateSavings = () => {
    const selectedFreq = frequencyOptions.find(f => f.value === selectedFrequency);
    return selectedFreq?.discount || 0;
  };

  const calculateTotal = () => {
    return selectedProducts.reduce((total, productId) => {
      const product = getProductById(productId);
      const quantity = quantities[productId] || 1;
      if (product) {
        const discount = calculateSavings();
        const discountedPrice = product.price * (1 - discount / 100);
        return total + (discountedPrice * quantity);
      }
      return total;
    }, 0);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-3">
          <nav className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-[#7E22CE]">Home</Link>
            <span>/</span>
            <span className="text-gray-900">Auto-Refill Service</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-400 via-emerald-500 to-green-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Zap className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Never Run Out of Pet Food Again
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Set up automatic deliveries and save up to 25% on every order. Smart, convenient, and your pets will thank you!
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-lg">
              <div className="flex items-center gap-2">
                <Package className="w-5 h-5" />
                <span>Auto Delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <Percent className="w-5 h-5" />
                <span>Up to 25% Off</span>
              </div>
              <div className="flex items-center gap-2">
                <Truck className="w-5 h-5" />
                <span>Free Shipping</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        {/* Current Subscriptions */}
        {subscriptions.length > 0 && (
          <section className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Your Active Subscriptions</h2>
              <Button 
                onClick={() => setShowSetup(true)}
                className="bg-green-500 hover:bg-green-600 text-white"
              >
                <Plus className="w-4 h-4 mr-2" />
                Add New Subscription
              </Button>
            </div>
            
            <div className="grid gap-6 md:grid-cols-2">
              {subscriptions.map((subscription) => {
                const product = getProductById(subscription.productId);
                if (!product) return null;

                return (
                  <Card key={subscription.id} className="border-l-4 border-l-green-500">
                    <CardHeader className="pb-4">
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-16 h-16 rounded-lg overflow-hidden">
                            <Image
                              src={product.images[0]}
                              alt={product.name}
                              width={64}
                              height={64}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900">{product.name}</h3>
                            <p className="text-sm text-gray-600">Quantity: {subscription.quantity}</p>
                          </div>
                        </div>
                        <Badge variant="outline" className="text-green-600 border-green-200">
                          {subscription.status}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-600">Delivery Frequency</span>
                          <span className="font-medium capitalize">{subscription.frequency}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-600">Next Delivery</span>
                          <span className="font-medium">{formatDate(subscription.nextDelivery)}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-600">Your Savings</span>
                          <span className="font-medium text-green-600">{subscription.discount}% off</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-600">Price per delivery</span>
                          <span className="font-semibold text-lg">
                            ₹{(product.price * subscription.quantity * (1 - subscription.discount / 100)).toFixed(2)}
                          </span>
                        </div>
                        <div className="flex gap-2 pt-2">
                          <Button variant="outline" size="sm" className="flex-1">
                            Skip Next
                          </Button>
                          <Button variant="outline" size="sm" className="flex-1">
                            Modify
                          </Button>
                          <Button variant="outline" size="sm" className="flex-1 text-red-600 hover:text-red-700">
                            Pause
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </section>
        )}

        {/* Benefits Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Why Choose Auto-Refill?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Percent className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Save More Money</h3>
              <p className="text-gray-600">
                Get up to 25% off every order with our auto-refill discounts. The more frequent your deliveries, the more you save!
              </p>
            </Card>
            
            <Card className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Never Run Out</h3>
              <p className="text-gray-600">
                Our smart scheduling ensures your pet's food arrives exactly when you need it. No more emergency store runs!
              </p>
            </Card>
            
            <Card className="text-center p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Complete Control</h3>
              <p className="text-gray-600">
                Skip, pause, or modify your deliveries anytime through your dashboard. You're always in control!
              </p>
            </Card>
          </div>
        </section>

        {/* Setup New Subscription */}
        {(showSetup || subscriptions.length === 0) && (
          <section className="mb-12">
            <Card className="max-w-4xl mx-auto">
              <CardHeader>
                <CardTitle className="text-2xl text-center">
                  Set Up Your Auto-Refill Subscription
                </CardTitle>
                <p className="text-center text-gray-600">
                  Choose your products and delivery schedule to get started
                </p>
              </CardHeader>
              <CardContent className="space-y-8">
                {/* Step 1: Choose Frequency */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Step 1: Choose Your Delivery Frequency</h3>
                  <RadioGroup 
                    value={selectedFrequency} 
                    onValueChange={(value) => setSelectedFrequency(value as any)}
                    className="grid md:grid-cols-3 gap-4"
                  >
                    {frequencyOptions.map((option) => (
                      <div key={option.value}>
                        <RadioGroupItem
                          value={option.value}
                          id={option.value}
                          className="peer sr-only"
                        />
                        <Label
                          htmlFor={option.value}
                          className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer"
                        >
                          <div className="text-center">
                            <div className="text-lg font-semibold">{option.label}</div>
                            <div className="text-sm text-gray-600 mb-2">{option.description}</div>
                            <Badge className="bg-green-100 text-green-800">
                              {option.discount}% OFF
                            </Badge>
                          </div>
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>

                {/* Step 2: Select Products */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Step 2: Select Products</h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                    {products.slice(0, 6).map((product) => {
                      const isSelected = selectedProducts.includes(product.id);
                      return (
                        <Card 
                          key={product.id}
                          className={`cursor-pointer transition-all ${
                            isSelected ? 'ring-2 ring-green-500 bg-green-50' : 'hover:shadow-lg'
                          }`}
                          onClick={() => 
                            isSelected 
                              ? removeProductFromRefill(product.id)
                              : addProductToRefill(product.id)
                          }
                        >
                          <CardContent className="p-4">
                            <div className="flex items-center gap-3">
                              <div className="w-16 h-16 rounded-lg overflow-hidden">
                                <Image
                                  src={product.images[0]}
                                  alt={product.name}
                                  width={64}
                                  height={64}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                              <div className="flex-1">
                                <h4 className="font-medium text-sm">{product.name}</h4>
                                <p className="text-green-600 font-semibold">
                                  ₹{(product.price * (1 - calculateSavings() / 100)).toFixed(2)}
                                  <span className="text-gray-400 line-through ml-1 text-xs">
                                    ₹{product.price}
                                  </span>
                                </p>
                              </div>
                              {isSelected && (
                                <CheckCircle className="w-6 h-6 text-green-500" />
                              )}
                            </div>
                            {isSelected && (
                              <div className="mt-3 flex items-center justify-center gap-3">
                                <Button
                                  variant="outline"
                                  size="sm"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    updateQuantity(product.id, -1);
                                  }}
                                >
                                  <Minus className="w-4 h-4" />
                                </Button>
                                <span className="font-medium">
                                  {quantities[product.id] || 1}
                                </span>
                                <Button
                                  variant="outline"
                                  size="sm"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    updateQuantity(product.id, 1);
                                  }}
                                >
                                  <Plus className="w-4 h-4" />
                                </Button>
                              </div>
                            )}
                          </CardContent>
                        </Card>
                      );
                    })}
                  </div>
                </div>

                {/* Order Summary */}
                {selectedProducts.length > 0 && (
                  <div className="bg-green-50 rounded-lg p-6">
                    <h4 className="text-lg font-semibold mb-4">Order Summary</h4>
                    <div className="space-y-3">
                      {selectedProducts.map((productId) => {
                        const product = getProductById(productId);
                        const quantity = quantities[productId] || 1;
                        if (!product) return null;

                        return (
                          <div key={productId} className="flex justify-between items-center">
                            <span>{product.name} x {quantity}</span>
                            <span className="font-medium">
                              ₹{(product.price * quantity * (1 - calculateSavings() / 100)).toFixed(2)}
                            </span>
                          </div>
                        );
                      })}
                      <div className="border-t pt-3 flex justify-between items-center font-semibold text-lg">
                        <span>Total per delivery</span>
                        <span className="text-green-600">₹{calculateTotal().toFixed(2)}</span>
                      </div>
                      <div className="text-sm text-gray-600">
                        You save ₹{(selectedProducts.reduce((total, productId) => {
                          const product = getProductById(productId);
                          const quantity = quantities[productId] || 1;
                          return product ? total + (product.price * quantity * calculateSavings() / 100) : total;
                        }, 0)).toFixed(2)} per delivery!
                      </div>
                    </div>
                    
                    <Button 
                      className="w-full mt-6 bg-green-500 hover:bg-green-600 text-white text-lg py-3"
                      onClick={() => {
                        // Handle subscription setup
                        alert('Subscription setup would be handled here!');
                      }}
                    >
                      Start Auto-Refill Subscription
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </section>
        )}

        {/* FAQ Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            <Card>
              <CardContent className="p-6">
                <h4 className="font-semibold mb-2">Can I change my delivery schedule?</h4>
                <p className="text-gray-600">
                  Yes! You can modify your delivery frequency, skip deliveries, or pause your subscription at any time through your account dashboard.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h4 className="font-semibold mb-2">What if I need to cancel?</h4>
                <p className="text-gray-600">
                  You can cancel your auto-refill subscription at any time with no cancellation fees. Your current order will complete, and no future orders will be processed.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h4 className="font-semibold mb-2">Are there any additional fees?</h4>
                <p className="text-gray-600">
                  No! Auto-refill orders come with free shipping and no setup fees. You only pay the discounted price for your products.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
}
