"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Pill,
  Heart,
  Shield,
  Stethoscope,
  Clock,
  Truck,
  Star,
  Search,
  Filter,
  ChevronRight,
  AlertCircle,
  CheckCircle,
  Calendar,
  Phone,
  MapPin,
  Award,
  Zap,
} from "lucide-react";

// Mock medicine data
const medicines = [
  {
    id: 1,
    name: "Deworming Tablets for Dogs",
    category: "Deworming",
    price: 450,
    originalPrice: 550,
    image: "/public/file.svg",
    brand: "PetHealth",
    dosage: "1 tablet per 10kg body weight",
    prescription: false,
    rating: 4.8,
    reviews: 324,
    inStock: true,
    description: "Effective broad-spectrum deworming tablets for dogs of all ages",
    benefits: ["Eliminates intestinal worms", "Safe for puppies above 6 weeks", "Vet recommended"],
  },
  {
    id: 2,
    name: "Anti-flea Spray for Cats",
    category: "Flea & Tick",
    price: 680,
    originalPrice: 780,
    image: "/public/file.svg",
    brand: "FleaGuard",
    dosage: "Spray 2-3 times weekly",
    prescription: false,
    rating: 4.6,
    reviews: 256,
    inStock: true,
    description: "Natural anti-flea spray that's safe for cats and kittens",
    benefits: ["100% natural ingredients", "Long-lasting protection", "Pleasant scent"],
  },
  {
    id: 3,
    name: "Joint Support Supplements",
    category: "Joint Care",
    price: 890,
    originalPrice: 1090,
    image: "/public/file.svg",
    brand: "PetVital",
    dosage: "1 tablet daily with food",
    prescription: false,
    rating: 4.9,
    reviews: 412,
    inStock: true,
    description: "Advanced joint support formula for aging pets",
    benefits: ["Reduces joint pain", "Improves mobility", "Vet formulated"],
  },
  {
    id: 4,
    name: "Ear Infection Drops",
    category: "Ear Care",
    price: 320,
    originalPrice: 420,
    image: "/public/file.svg",
    brand: "VetCare",
    dosage: "3-4 drops twice daily",
    prescription: true,
    rating: 4.7,
    reviews: 189,
    inStock: true,
    description: "Antibiotic ear drops for treating bacterial infections",
    benefits: ["Fast-acting relief", "Veterinary grade", "Reduces inflammation"],
  },
  {
    id: 5,
    name: "Digestive Probiotics",
    category: "Digestive Health",
    price: 560,
    originalPrice: 660,
    image: "/public/file.svg",
    brand: "GutHealth",
    dosage: "1 capsule daily",
    prescription: false,
    rating: 4.5,
    reviews: 298,
    inStock: false,
    description: "Probiotic supplement for healthy digestion",
    benefits: ["Improves digestion", "Boosts immunity", "Reduces gas & bloating"],
  },
  {
    id: 6,
    name: "Anxiety Relief Tablets",
    category: "Behavioral",
    price: 750,
    originalPrice: 850,
    image: "/public/file.svg",
    brand: "CalmPet",
    dosage: "1-2 tablets as needed",
    prescription: false,
    rating: 4.4,
    reviews: 167,
    inStock: true,
    description: "Natural calming supplement for anxious pets",
    benefits: ["Reduces stress", "Natural ingredients", "No drowsiness"],
  },
];

const categories = [
  { name: "All", icon: Pill, count: medicines.length },
  { name: "Deworming", icon: Shield, count: 1 },
  { name: "Flea & Tick", icon: AlertCircle, count: 1 },
  { name: "Joint Care", icon: Heart, count: 1 },
  { name: "Ear Care", icon: Stethoscope, count: 1 },
  { name: "Digestive Health", icon: CheckCircle, count: 1 },
  { name: "Behavioral", icon: Calendar, count: 1 },
];

export default function MedicinePage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [showPrescriptionOnly, setShowPrescriptionOnly] = useState(false);

  const filteredMedicines = medicines.filter((medicine) => {
    const matchesCategory = selectedCategory === "All" || medicine.category === selectedCategory;
    const matchesSearch = medicine.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         medicine.brand.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesPrescription = !showPrescriptionOnly || medicine.prescription;
    
    return matchesCategory && matchesSearch && matchesPrescription;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 pt-20">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-white/20 rounded-full backdrop-blur-lg">
                <Pill className="w-12 h-12" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              Pet Medicine & Healthcare
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Comprehensive healthcare solutions for your beloved pets. From preventive care to treatment medications.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full backdrop-blur-lg">
                <Shield className="w-4 h-4" />
                <span>Vet Approved</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full backdrop-blur-lg">
                <Truck className="w-4 h-4" />
                <span>Fast Delivery</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full backdrop-blur-lg">
                <Clock className="w-4 h-4" />
                <span>24/7 Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search medicines..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="flex gap-4 items-center">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={showPrescriptionOnly}
                  onChange={(e) => setShowPrescriptionOnly(e.target.checked)}
                  className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                />
                <span className="text-sm text-gray-700">Prescription Only</span>
              </label>
              <Button variant="outline" className="flex items-center gap-2">
                <Filter className="w-4 h-4" />
                Filter
              </Button>
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {categories.map((category) => (
              <button
                key={category.name}
                onClick={() => setSelectedCategory(category.name)}
                className={`p-4 rounded-xl text-center transition-all duration-300 ${
                  selectedCategory === category.name
                    ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg scale-105"
                    : "bg-white hover:bg-gray-50 text-gray-700 shadow-md hover:shadow-lg"
                }`}
              >
                <category.icon className="w-8 h-8 mx-auto mb-2" />
                <p className="text-sm font-medium">{category.name}</p>
                <p className="text-xs opacity-70">({category.count})</p>
              </button>
            ))}
          </div>
        </div>

        {/* Emergency Banner */}
        <div className="bg-gradient-to-r from-red-500 to-pink-600 text-white rounded-2xl p-6 mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-white/20 rounded-full">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold">24/7 Emergency Vet Support</h3>
                <p className="text-red-100">Need urgent help? Our vets are available round the clock</p>
              </div>
            </div>
            <Button className="bg-white text-red-600 hover:bg-gray-100">
              Call Now: 1800-PET-HELP
            </Button>
          </div>
        </div>

        {/* Products Grid */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">
              {selectedCategory === "All" ? "All Medicines" : selectedCategory}
            </h2>
            <p className="text-gray-600">{filteredMedicines.length} products found</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMedicines.map((medicine) => (
              <Card key={medicine.id} className="group hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden">
                <div className="relative">
                  <div className="h-48 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                    <Pill className="w-16 h-16 text-blue-500" />
                  </div>
                  {medicine.prescription && (
                    <Badge className="absolute top-2 left-2 bg-red-500">
                      Prescription Required
                    </Badge>
                  )}
                  {!medicine.inStock && (
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                      <span className="text-white font-bold text-lg">Out of Stock</span>
                    </div>
                  )}
                  <div className="absolute top-2 right-2">
                    <div className="flex items-center gap-1 bg-white/90 px-2 py-1 rounded-full">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="text-sm font-medium">{medicine.rating}</span>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="mb-2">
                    <Badge variant="outline" className="text-xs">
                      {medicine.brand}
                    </Badge>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {medicine.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                    {medicine.description}
                  </p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Stethoscope className="w-4 h-4" />
                      <span>Dosage: {medicine.dosage}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Star className="w-4 h-4" />
                      <span>{medicine.reviews} reviews</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-blue-600">₹{medicine.price}</span>
                      <span className="text-sm text-gray-500 line-through">₹{medicine.originalPrice}</span>
                    </div>
                    <Badge className="bg-green-100 text-green-800">
                      {Math.round((1 - medicine.price / medicine.originalPrice) * 100)}% OFF
                    </Badge>
                  </div>

                  <div className="space-y-2">
                    <Button 
                      className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
                      disabled={!medicine.inStock}
                    >
                      {medicine.inStock ? "Add to Cart" : "Notify When Available"}
                    </Button>
                    <Button variant="outline" className="w-full">
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Healthcare Services */}
        <div className="bg-gradient-to-r from-green-500 to-blue-600 text-white rounded-2xl p-8 mb-8">
          <h2 className="text-3xl font-bold mb-6 text-center">Additional Healthcare Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="p-4 bg-white/20 rounded-full w-fit mx-auto mb-4">
                <MapPin className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Vet Consultation</h3>
              <p className="text-green-100">Book online consultations with certified veterinarians</p>
            </div>
            <div className="text-center">
              <div className="p-4 bg-white/20 rounded-full w-fit mx-auto mb-4">
                <Calendar className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Health Checkups</h3>
              <p className="text-green-100">Regular health monitoring and preventive care plans</p>
            </div>
            <div className="text-center">
              <div className="p-4 bg-white/20 rounded-full w-fit mx-auto mb-4">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Expert Advice</h3>
              <p className="text-green-100">Get personalized healthcare recommendations</p>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">Why Choose Our Pet Medicine?</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="p-4 bg-blue-100 rounded-full w-fit mx-auto mb-4">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Vet Approved</h3>
              <p className="text-gray-600 text-sm">All medicines are approved by licensed veterinarians</p>
            </div>
            <div>
              <div className="p-4 bg-green-100 rounded-full w-fit mx-auto mb-4">
                <Truck className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Fast Delivery</h3>
              <p className="text-gray-600 text-sm">Same-day delivery for urgent medications</p>
            </div>
            <div>
              <div className="p-4 bg-purple-100 rounded-full w-fit mx-auto mb-4">
                <Clock className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">24/7 Support</h3>
              <p className="text-gray-600 text-sm">Round-the-clock customer and vet support</p>
            </div>
            <div>
              <div className="p-4 bg-orange-100 rounded-full w-fit mx-auto mb-4">
                <Award className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Quality Assured</h3>
              <p className="text-gray-600 text-sm">Only authentic, quality-tested medications</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
