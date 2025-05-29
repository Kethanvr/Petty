"use client";

import React from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { X, Lock, UserPlus, LogIn } from "lucide-react";
import { SignInButton, SignUpButton } from "@clerk/nextjs";

interface AuthRequiredModalProps {
  isOpen: boolean;
  onClose: () => void;
  action: string; // "add to cart" or "add to wishlist"
}

export default function AuthRequiredModal({ isOpen, onClose, action }: AuthRequiredModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <Card className="relative w-full max-w-md mx-auto bg-white rounded-2xl shadow-2xl border-0 overflow-hidden animate-fadeInUp">
        {/* Header */}
        <CardHeader className="text-center pb-4 pt-8">
          <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full flex items-center justify-center mx-auto mb-4">
            <Lock className="w-8 h-8 text-purple-600" />
          </div>
          <CardTitle className="text-2xl font-bold text-gray-900 mb-2">
            Oops! Login Required
          </CardTitle>
          <p className="text-gray-600 leading-relaxed">
            You need to be signed in to {action}. Join our community of pet lovers and never miss out on amazing deals!
          </p>
        </CardHeader>

        {/* Content */}
        <CardContent className="px-8 pb-8">
          <div className="space-y-3">
            {/* Sign In Button */}
            <SignInButton mode="modal">
              <Button className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl">
                <LogIn className="w-5 h-5 mr-2" />
                Sign In to Continue
              </Button>
            </SignInButton>

            {/* Sign Up Button */}
            <SignUpButton mode="modal">
              <Button 
                variant="outline" 
                className="w-full border-2 border-purple-200 text-purple-700 hover:bg-purple-50 hover:border-purple-300 py-3 rounded-xl font-semibold transition-all duration-300"
              >
                <UserPlus className="w-5 h-5 mr-2" />
                Create New Account
              </Button>
            </SignUpButton>
          </div>

          {/* Benefits */}
          <div className="mt-6 pt-6 border-t border-gray-100">
            <p className="text-xs text-gray-500 text-center mb-3 font-medium">
              Why create an account?
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-xs text-gray-600">
                <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></div>
                <span>Save your favorite products</span>
              </div>
              <div className="flex items-center text-xs text-gray-600">
                <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></div>
                <span>Track your orders and delivery</span>
              </div>
              <div className="flex items-center text-xs text-gray-600">
                <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></div>
                <span>Get personalized recommendations</span>
              </div>
              <div className="flex items-center text-xs text-gray-600">
                <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></div>
                <span>Exclusive member discounts</span>
              </div>
            </div>
          </div>
        </CardContent>

        {/* Close Button */}
        <Button
          variant="ghost"
          size="sm"
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 rounded-full"
        >
          <X className="w-5 h-5" />
        </Button>
      </Card>
    </div>
  );
}
