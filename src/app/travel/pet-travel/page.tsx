"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Plane,
  Clock,
  CheckCircle,
  Phone,
  Calendar,
  ArrowRight,
  ArrowLeft,
  Star,
  Shield,
  Globe,
} from "lucide-react";

export default function PetTravelServicesPage() {
  const [showQuoteForm, setShowQuoteForm] = useState(false);

  const travelServices = [
    {
      id: "domestic-flight",
      title: "Domestic Flight Booking",
      price: "₹3,999",
      duration: "Same Day Service",
      description:
        "Complete domestic flight arrangements for your pet within India",
      features: [
        "Pet-friendly airline booking",
        "Cabin or cargo arrangements",
        "Travel carrier assistance",
        "Airport coordination",
        "Real-time flight tracking",
      ],
      color: "from-blue-500 to-blue-600",
      popular: true,
    },
    {
      id: "international-flight",
      title: "International Flight Booking",
      price: "₹12,999",
      duration: "3-7 Business Days",
      description:
        "International travel arrangements with full documentation support",
      features: [
        "International airline booking",
        "Health certificate assistance",
        "Import/export permits",
        "Quarantine coordination",
        "Custom clearance support",
      ],
      color: "from-purple-500 to-purple-600",
      premium: true,
    },
    {
      id: "documentation",
      title: "Travel Documentation",
      price: "₹2,499",
      duration: "5-10 Business Days",
      description: "Complete documentation assistance for pet travel",
      features: [
        "Health certificates",
        "Vaccination records",
        "Import permits",
        "CITES certificates (if required)",
        "Insurance documentation",
      ],
      color: "from-green-500 to-green-600",
    },
    {
      id: "airport-service",
      title: "Airport Pickup & Drop",
      price: "₹1,999",
      duration: "On Travel Day",
      description: "Professional airport transfer services for your pet",
      features: [
        "Door-to-airport pickup",
        "Airport-to-destination drop",
        "Professional pet handlers",
        "Climate-controlled vehicles",
        "Real-time updates",
      ],
      color: "from-orange-500 to-orange-600",
    },
  ];

  const airlines = [
    {
      name: "Air India",
      logo: "🇮🇳",
      routes: "Domestic & International",
      petPolicy: "Cabin & Cargo",
      rating: 4.2,
    },
    {
      name: "IndiGo",
      logo: "✈️",
      routes: "Domestic & International",
      petPolicy: "Cargo Only",
      rating: 4.0,
    },
    {
      name: "Vistara",
      logo: "🌟",
      routes: "Domestic & International",
      petPolicy: "Cabin & Cargo",
      rating: 4.5,
    },
    {
      name: "SpiceJet",
      logo: "🌶️",
      routes: "Domestic",
      petPolicy: "Cargo Only",
      rating: 3.8,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-2 text-sm">
            <Link
              href="/travel"
              className="text-purple-600 hover:text-purple-700 flex items-center gap-1"
            >
              <ArrowLeft className="w-4 h-4" />
              Pet Travel
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-600">Pet Travel Services</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-500 to-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-3 bg-white/10 px-6 py-3 rounded-full mb-6">
              <Plane className="w-6 h-6" />
              <span className="font-semibold">Pet Travel Services</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Professional Pet Flight Services
            </h1>
            <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto leading-relaxed">
              From domestic flights to international journeys, we handle every
              aspect of your pet's travel with care and expertise.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-yellow-300">200+</div>
                <div className="text-sm text-blue-200">Flights Booked</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-yellow-300">25+</div>
                <div className="text-sm text-blue-200">Airlines Partners</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-yellow-300">99%</div>
                <div className="text-sm text-blue-200">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Travel Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose from our comprehensive range of pet travel services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {travelServices.map((service) => (
              <Card
                key={service.id}
                className="group hover:shadow-2xl transition-all duration-300 border-0 overflow-hidden relative"
              >
                {service.popular && (
                  <Badge className="absolute top-4 right-4 bg-orange-500 text-white">
                    Most Popular
                  </Badge>
                )}
                {service.premium && (
                  <Badge className="absolute top-4 right-4 bg-gradient-to-r from-purple-500 to-purple-600 text-white">
                    Premium
                  </Badge>
                )}
                <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>
                <CardHeader>
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <CardTitle className="text-2xl text-gray-900 mb-2">
                        {service.title}
                      </CardTitle>
                      <p className="text-gray-600">{service.description}</p>
                    </div>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-gray-900">
                      {service.price}
                    </span>
                    <span className="text-sm text-gray-500">starting from</span>
                  </div>
                  <p className="text-sm text-gray-600 flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {service.duration}
                  </p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-center gap-3 text-sm text-gray-700"
                      >
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    onClick={() => setShowQuoteForm(true)}
                    className={`w-full bg-gradient-to-r ${service.color} hover:shadow-lg transition-all duration-300`}
                  >
                    Get Quote
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Airlines */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Partner Airlines
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We work with trusted airlines that prioritize pet safety and
              comfort
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {airlines.map((airline, index) => (
              <Card
                key={index}
                className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{airline.logo}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {airline.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">{airline.routes}</p>
                  <p className="text-sm text-blue-600 mb-3">
                    {airline.petPolicy}
                  </p>
                  <div className="flex items-center justify-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">
                      {airline.rating}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-500 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Book Your Pet's Flight?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Get personalized assistance from our pet travel experts
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg"
              onClick={() => setShowQuoteForm(true)}
            >
              <Calendar className="w-5 h-5 mr-2" />
              Get Custom Quote
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call: +91-XXXX-XXXX
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
