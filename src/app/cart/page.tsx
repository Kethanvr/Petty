"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GlobalAIAssistant } from "@/components/GlobalAIAssistant";
import { Minus, Plus, Trash2, ShoppingBag, Heart, Truck } from "lucide-react";
import { useWishlist } from "@/lib/useWishlist";

export default function CartPage() {
  const { state, updateQuantity, removeFromCart, clearCart } = useCart();
  const [isCartAIOpen, setIsCartAIOpen] = useState(false);
  const [showCheckoutAnimation, setShowCheckoutAnimation] = useState(false);
  const [showBetaMessage, setShowBetaMessage] = useState(false);
  const { addToWishlist, isInWishlist } = useWishlist();

  const handleCheckout = () => {
    setShowCheckoutAnimation(true);
    // After 3 seconds, show the beta message
    setTimeout(() => {
      setShowCheckoutAnimation(false);
      setShowBetaMessage(true);
    }, 3000);
  };

  const handleAddToWishlist = (productId: number) => {
    addToWishlist(productId);
  };

  if (state.items.length === 0) {
    return (
      <div className="min-h-screen bg-[#f0f4ff] flex items-center justify-center">
        <div className="text-center">
          <ShoppingBag className="w-24 h-24 text-[#7E22CE] mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-[#222] mb-4">
            Your cart is empty
          </h2>
          <p className="text-[#666] mb-8 max-w-md">
            Looks like you haven't added anything to your cart yet. Start
            shopping to find your perfect pet food!
          </p>
          <Link href="/products">
            <Button className="bg-[#7E22CE] hover:bg-[#6b1fa3] text-white px-8 py-3 text-lg">
              Browse Products
            </Button>
          </Link>
        </div>
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-[#f0f4ff]">
      {/* Checkout Animation Overlay */}
      {showCheckoutAnimation && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-xl p-8 text-center max-w-md mx-4">
            <div className="mb-6">
              <div className="animate-bounce mb-4">
                <Truck className="w-16 h-16 text-[#7E22CE] mx-auto" />
              </div>
              <div className="animate-spin w-8 h-8 border-4 border-[#7E22CE] border-t-transparent rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-bold text-[#222] mb-2">Processing Your Order...</h3>
              <p className="text-[#666]">Please wait while we prepare your cart for checkout</p>
            </div>
          </div>
        </div>
      )}

      {/* Beta Message Modal */}
      {showBetaMessage && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-xl p-8 text-center max-w-md mx-4">
            <div className="mb-6">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShoppingBag className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-[#222] mb-4">Website in Beta Testing</h3>
              <p className="text-[#666] mb-6 leading-relaxed">
                This website is currently in beta testing and is not fully functional. 
                The option to purchase and accept deliveries is not yet available. 
                We're working hard to bring you the best pet food shopping experience!
              </p>
              <Button 
                onClick={() => setShowBetaMessage(false)}
                className="bg-[#7E22CE] hover:bg-[#6b1fa3] text-white px-8 py-2"
              >
                Got it!
              </Button>
            </div>
          </div>
        </div>
      )}

      <div className="container mx-auto px-4 py-8"><div className="mb-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h1 className="text-4xl font-bold text-[#222] mb-2">Shopping Cart</h1>
              <p className="text-[#666]">
                {state.totalItems} item{state.totalItems !== 1 ? "s" : ""} in your
                cart
              </p>
            </div>
              <div className="flex flex-col sm:flex-row gap-4">
              {/* Wishlist Button */}
              <Button
                variant="outline"
                onClick={() => window.location.href = '/profile?tab=wishlist'}
                className="border-[#7E22CE] text-[#7E22CE] hover:bg-[#7E22CE] hover:text-white"
              >
                <Heart className="w-4 h-4 mr-2" />
                View Wishlist
              </Button>
              
              {/* Cart AI Assistant */}
              <GlobalAIAssistant
                mode="cart"
                context={state.items}
                isOpen={isCartAIOpen}
                onToggle={() => setIsCartAIOpen(!isCartAIOpen)}
                buttonText="Ask AI About My Cart"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {state.items.map((item, index) => (
              <Card
                key={`${item.product.id}-${item.selectedQuantity}-${item.selectedAge}-${index}`}
                className="shadow-md"
              >
                <CardContent className="p-6">
                  <div className="flex flex-col sm:flex-row gap-4">
                    {/* Product Image */}
                    <div className="flex-shrink-0">
                      <div className="w-24 h-24 sm:w-32 sm:h-32 bg-white rounded-lg overflow-hidden">
                        <Image
                          src={item.product.images[0]}
                          alt={item.product.name}
                          width={128}
                          height={128}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>

                    {/* Product Details */}
                    <div className="flex-1 space-y-3">
                      <div>
                        <h3 className="font-semibold text-[#222] leading-tight">
                          <Link
                            href={`/products/${item.product.id}`}
                            className="hover:text-[#7E22CE] transition-colors"
                          >
                            {item.product.name}
                          </Link>
                        </h3>
                        <p className="text-sm text-[#666] mt-1">
                          {item.product.brand}
                        </p>
                      </div>

                      <div className="flex gap-2">
                        <Badge variant="secondary" className="text-xs">
                          {item.selectedAge}
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          {item.selectedQuantity}
                        </Badge>
                      </div>

                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                        {/* Price */}
                        <div className="flex items-center gap-2">
                          <span className="text-lg font-bold text-[#7E22CE]">
                            ₹{item.product.price}
                          </span>
                          {item.product.originalPrice > item.product.price && (
                            <span className="text-sm text-gray-500 line-through">
                              ₹{item.product.originalPrice}
                            </span>
                          )}
                        </div>                        {/* Quantity Controls */}
                        <div className="flex items-center gap-2">
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() =>
                              updateQuantity(item.product.id, item.quantity - 1)
                            }
                            className="h-8 w-8 border-[#7E22CE] text-[#7E22CE] hover:bg-[#7E22CE] hover:text-white"
                          >
                            <Minus className="w-3 h-3" />
                          </Button>
                          <Input
                            type="number"
                            value={item.quantity}
                            onChange={(e) =>
                              updateQuantity(
                                item.product.id,
                                parseInt(e.target.value) || 1
                              )
                            }
                            className="w-16 h-8 text-center text-sm border-[#7E22CE] focus:ring-[#7E22CE]"
                            min="1"
                          />
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() =>
                              updateQuantity(item.product.id, item.quantity + 1)
                            }
                            className="h-8 w-8 border-[#7E22CE] text-[#7E22CE] hover:bg-[#7E22CE] hover:text-white"
                          >
                            <Plus className="w-3 h-3" />
                          </Button>
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() => handleAddToWishlist(item.product.id)}
                            className={`h-8 w-8 ml-2 ${
                              isInWishlist(item.product.id)
                                ? 'border-red-300 text-red-500 bg-red-50'
                                : 'border-gray-300 text-gray-500 hover:border-red-300 hover:text-red-500'
                            }`}
                          >
                            <Heart className={`w-3 h-3 ${isInWishlist(item.product.id) ? 'fill-current' : ''}`} />
                          </Button>
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() => removeFromCart(item.product.id)}
                            className="h-8 w-8 ml-1 border-red-300 text-red-500 hover:bg-red-500 hover:text-white"
                          >
                            <Trash2 className="w-3 h-3" />
                          </Button>
                        </div>
                      </div>

                      {/* Item Total */}
                      <div className="text-right">
                        <span className="text-sm text-[#666]">Total: </span>
                        <span className="font-bold text-[#7E22CE]">
                          ₹{item.product.price * item.quantity}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Clear Cart Button */}
            <div className="pt-4">
              <Button
                variant="outline"
                onClick={clearCart}
                className="border-red-300 text-red-500 hover:bg-red-500 hover:text-white"
              >
                <Trash2 className="w-4 h-4 mr-2" />
                Clear Cart
              </Button>
            </div>
          </div>

          {/* Cart Summary */}
          <div className="lg:col-span-1">
            <Card className="shadow-md sticky top-4">
              <CardHeader>
                <CardTitle className="text-xl text-[#222]">
                  Order Summary
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-[#666]">
                      Items ({state.totalItems})
                    </span>
                    <span className="text-[#222]">₹{state.totalPrice}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-[#666]">Shipping</span>
                    <span className="text-green-600">Free</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-[#666]">Tax</span>
                    <span className="text-[#222]">
                      ₹{Math.round(state.totalPrice * 0.18)}
                    </span>
                  </div>
                  <div className="border-t pt-2">
                    <div className="flex justify-between font-bold text-lg">
                      <span className="text-[#222]">Total</span>
                      <span className="text-[#7E22CE]">
                        ₹
                        {Math.round(state.totalPrice + state.totalPrice * 0.18)}
                      </span>
                    </div>
                  </div>
                </div>                <div className="space-y-3 pt-4">
                  <Button 
                    onClick={handleCheckout}
                    className="w-full bg-[#7E22CE] hover:bg-[#6b1fa3] text-white py-3 text-lg font-semibold"
                  >
                    Proceed to Checkout
                  </Button>
                  <Link href="/products">
                    <Button
                      variant="outline"
                      className="w-full border-[#7E22CE] text-[#7E22CE] hover:bg-[#7E22CE] hover:text-white"
                    >
                      Continue Shopping
                    </Button>
                  </Link>
                </div>

                {/* Delivery Info */}
                <div className="bg-[#f0f4ff] p-4 rounded-lg mt-4">
                  <h4 className="font-semibold text-[#222] mb-2">
                    Delivery Information
                  </h4>
                  <ul className="text-sm text-[#666] space-y-1">
                    <li>• Free delivery on orders above ₹500</li>
                    <li>• Standard delivery: 2-3 business days</li>
                    <li>• Express delivery: 1-2 business days</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
