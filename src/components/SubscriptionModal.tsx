"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import {
  X,
  Clock,
  Truck,
  Percent,
  Check,
  Calendar,
  CreditCard,
  Shield,
  RotateCcw,
  Zap,
} from "lucide-react";
import {
  subscriptionPlans,
  getSubscriptionBenefits,
  calculateSubscriptionPrice,
  calculateNextDeliveryDate,
  type SubscriptionPlan,
} from "@/lib/subscription";
import { type Product } from "@/lib/products";

interface SubscriptionModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product;
  selectedQuantity: string;
  selectedAge: string;
  itemQuantity: number;
}

export default function SubscriptionModal({
  isOpen,
  onClose,
  product,
  selectedQuantity,
  selectedAge,
  itemQuantity,
}: SubscriptionModalProps) {
  const [selectedPlan, setSelectedPlan] = useState<string>("bi-weekly");
  const [showSuccess, setShowSuccess] = useState(false);

  const benefits = getSubscriptionBenefits();
  const currentPlan = subscriptionPlans.find(
    (plan) => plan.id === selectedPlan
  );

  if (!isOpen) return null;

  const handleSubscribe = () => {
    // Here you would typically handle the subscription creation
    console.log("Creating subscription:", {
      productId: product.id,
      planId: selectedPlan,
      quantity: itemQuantity,
      selectedQuantity,
      selectedAge,
    });

    setShowSuccess(true);
  };

  const formatPrice = (originalPrice: number, planId: string) => {
    const subscriptionPrice = calculateSubscriptionPrice(originalPrice, planId);
    const savings = originalPrice - subscriptionPrice;
    return {
      original: originalPrice,
      subscription: subscriptionPrice,
      savings: savings,
    };
  };

  const getTotalPrice = () => {
    return formatPrice(product.price * itemQuantity, selectedPlan);
  };

  const getNextDelivery = () => {
    if (!currentPlan) return new Date();
    return calculateNextDeliveryDate(currentPlan.frequency);
  };

  if (showSuccess) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
        <Card className="max-w-md w-full">
          <CardContent className="p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Subscription Created!
            </h3>
            <p className="text-gray-600 mb-6">
              Your auto-refill subscription has been set up successfully. Next
              delivery: {getNextDelivery().toLocaleDateString()}
            </p>
            <div className="space-y-3">
              <Button
                className="w-full bg-[#7E22CE] hover:bg-[#6b1fa3]"
                onClick={onClose}
              >
                Continue Shopping
              </Button>
              <Button variant="outline" className="w-full">
                Manage Subscriptions
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="p-6 border-b flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              Auto-Refill Subscription
            </h2>
            <p className="text-gray-600">
              Never run out of your pet's favorite food
            </p>
          </div>
          <Button variant="outline" size="sm" onClick={onClose}>
            <X className="w-4 h-4" />
          </Button>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Plans */}
            <div className="lg:col-span-2 space-y-6">
              {/* Product Summary */}
              <Card className="bg-gray-50">
                <CardContent className="p-4">
                  <div className="flex items-start gap-4">
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-16 h-16 object-contain rounded-lg bg-white p-2"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">
                        {product.name}
                      </h3>
                      <div className="text-sm text-gray-600 space-y-1">
                        <p>
                          Quantity: {itemQuantity} × {selectedQuantity}
                        </p>
                        <p>Age Category: {selectedAge}</p>
                        <p className="font-medium">₹{product.price} per unit</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Subscription Plans */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Choose Your Delivery Frequency
                </h3>

                <RadioGroup
                  value={selectedPlan}
                  onValueChange={setSelectedPlan}
                  className="space-y-4"
                >
                  {subscriptionPlans.map((plan) => {
                    const pricing = formatPrice(
                      product.price * itemQuantity,
                      plan.id
                    );

                    return (
                      <div key={plan.id} className="relative">
                        <RadioGroupItem
                          value={plan.id}
                          id={plan.id}
                          className="sr-only"
                        />
                        <Label
                          htmlFor={plan.id}
                          className={`block p-4 border-2 rounded-lg cursor-pointer transition-all ${
                            selectedPlan === plan.id
                              ? "border-[#7E22CE] bg-purple-50"
                              : "border-gray-200 hover:border-gray-300"
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-2">
                                <h4 className="font-semibold text-gray-900">
                                  {plan.name}
                                </h4>
                                {plan.popular && (
                                  <Badge className="bg-[#7E22CE] hover:bg-[#7E22CE] text-white">
                                    Most Popular
                                  </Badge>
                                )}
                              </div>
                              <p className="text-sm text-gray-600 mb-2">
                                {plan.description}
                              </p>
                              <p className="text-sm text-gray-500">
                                {plan.frequencyLabel}
                              </p>
                            </div>

                            <div className="text-right">
                              <div className="text-lg font-bold text-[#7E22CE]">
                                ₹{pricing.subscription.toFixed(0)}
                              </div>
                              <div className="text-sm text-gray-500 line-through">
                                ₹{pricing.original}
                              </div>
                              <div className="text-sm text-green-600 font-medium">
                                Save ₹{pricing.savings.toFixed(0)} (
                                {plan.discount}%)
                              </div>
                            </div>
                          </div>

                          {selectedPlan === plan.id && (
                            <div className="mt-3 pt-3 border-t border-purple-200">
                              <div className="flex flex-wrap gap-2">
                                {plan.benefits
                                  .slice(0, 3)
                                  .map((benefit, index) => (
                                    <span
                                      key={index}
                                      className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded"
                                    >
                                      {benefit}
                                    </span>
                                  ))}
                              </div>
                            </div>
                          )}
                        </Label>
                      </div>
                    );
                  })}
                </RadioGroup>
              </div>
            </div>

            {/* Right Column - Summary & Benefits */}
            <div className="space-y-6">
              {/* Order Summary */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">
                    Subscription Summary
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {currentPlan && (
                    <>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Plan:</span>
                          <span className="font-medium">
                            {currentPlan.name}
                          </span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>Frequency:</span>
                          <span>{currentPlan.frequencyLabel}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>Next delivery:</span>
                          <span>{getNextDelivery().toLocaleDateString()}</span>
                        </div>
                      </div>

                      <div className="border-t pt-4">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600">
                            Regular price:
                          </span>
                          <span className="text-sm text-gray-500 line-through">
                            ₹{getTotalPrice().original}
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600">
                            Subscription price:
                          </span>
                          <span className="text-lg font-bold text-[#7E22CE]">
                            ₹{getTotalPrice().subscription.toFixed(0)}
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-green-600">
                            You save:
                          </span>
                          <span className="text-sm text-green-600 font-medium">
                            ₹{getTotalPrice().savings.toFixed(0)} (
                            {currentPlan.discount}%)
                          </span>
                        </div>
                      </div>

                      <Button
                        onClick={handleSubscribe}
                        className="w-full bg-[#7E22CE] hover:bg-[#6b1fa3] text-white py-3"
                      >
                        <Zap className="w-4 h-4 mr-2" />
                        Start Subscription
                      </Button>
                    </>
                  )}
                </CardContent>
              </Card>

              {/* Benefits */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">
                    Subscription Benefits
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <span className="text-lg">{benefit.icon}</span>
                        <div>
                          <h4 className="font-medium text-gray-900 text-sm">
                            {benefit.title}
                          </h4>
                          <p className="text-xs text-gray-600">
                            {benefit.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Terms */}
              <div className="text-xs text-gray-500 space-y-2">
                <p className="flex items-center gap-2">
                  <RotateCcw className="w-3 h-3" />
                  Cancel or modify anytime
                </p>
                <p className="flex items-center gap-2">
                  <Shield className="w-3 h-3" />
                  Secure payment processing
                </p>
                <p className="flex items-center gap-2">
                  <Truck className="w-3 h-3" />
                  Free shipping on all orders
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
