"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Plane,
  MapPin,
  Shield,
  Clock,
  Star,
  CheckCircle,
  Heart,
  Phone,
  Mail,
  Calendar,
  ArrowRight,
  Globe,
  Truck,
  Home,
  FileText,
  Users,
  Award,
} from "lucide-react";

export default function PetTravelPage() {
  const travelServices = [
    {
      id: "pet-travel",
      title: "Pet Travel Services",
      description: "Safe and comfortable travel solutions for your pets",
      icon: <Plane className="w-8 h-8" />,
      features: [
        "Flight bookings with pet-friendly airlines",
        "Travel documentation assistance",
        "In-flight care coordination",
        "Airport pickup and drop-off",
      ],
      href: "/travel/pet-travel",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      textColor: "text-blue-600",
    },
    {
      id: "pet-relocation",
      title: "Pet Relocation Services",
      description: "Complete relocation solutions for moving with pets",
      icon: <Home className="w-8 h-8" />,
      features: [
        "International relocation services",
        "Quarantine management",
        "Custom clearance assistance",
        "Door-to-door transportation",
      ],
      href: "/travel/pet-relocation",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      textColor: "text-purple-600",
    },
  ];

  const whyChooseUs = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Certified & Licensed",
      description:
        "All our services are certified by international aviation authorities",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "24/7 Support",
      description: "Round-the-clock assistance throughout your pet's journey",
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Expert Care Team",
      description: "Trained professionals with years of pet travel experience",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Network",
      description: "Partnerships with airlines and services worldwide",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "Mumbai to London",
      rating: 5,
      comment:
        "Petty made our move to London seamless. Our Golden Retriever, Max, arrived safely and stress-free!",
      petName: "Max",
      petType: "Golden Retriever",
    },
    {
      name: "Raj Patel",
      location: "Delhi to New York",
      rating: 5,
      comment:
        "Excellent service! They handled all documentation and kept us updated throughout the journey.",
      petName: "Bella",
      petType: "Persian Cat",
    },
    {
      name: "Priya Sharma",
      location: "Bangalore to Toronto",
      rating: 5,
      comment:
        "Professional team with genuine care for pets. Highly recommended for international relocations.",
      petName: "Rocky",
      petType: "Labrador",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#7E22CE] to-[#9333EA] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-3 bg-white/10 px-6 py-3 rounded-full mb-6">
              <Plane className="w-6 h-6" />
              <span className="font-semibold">Pet Travel & Relocation</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Safe & Stress-Free Pet Travel
              <br />
              <span className="text-yellow-300">Worldwide</span>
            </h1>
            <p className="text-xl mb-8 text-purple-100 max-w-3xl mx-auto leading-relaxed">
              Whether you're traveling with your pet or relocating to a new
              country, we ensure your furry family members receive the care and
              comfort they deserve throughout their journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                size="lg"
                className="bg-white text-[#7E22CE] hover:bg-gray-100 px-8 py-4 text-lg"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Book Consultation
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#7E22CE] px-8 py-4 text-lg"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Expert
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-yellow-300">500+</div>
                <div className="text-sm text-purple-200">Pets Traveled</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow-300">50+</div>
                <div className="text-sm text-purple-200">Countries Covered</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow-300">99%</div>
                <div className="text-sm text-purple-200">Success Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow-300">24/7</div>
                <div className="text-sm text-purple-200">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Travel Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive pet travel solutions tailored to your specific needs
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {travelServices.map((service) => (
              <Card
                key={service.id}
                className="group hover:shadow-2xl transition-all duration-300 border-0 overflow-hidden"
              >
                <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>
                <CardHeader className="pb-4">
                  <div
                    className={`w-16 h-16 ${service.bgColor} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <div className={service.textColor}>{service.icon}</div>
                  </div>
                  <CardTitle className="text-2xl text-gray-900">
                    {service.title}
                  </CardTitle>
                  <p className="text-gray-600">{service.description}</p>
                </CardHeader>
                <CardContent className="pt-0">
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
                  <Link href={service.href}>
                    <Button
                      className={`w-full bg-gradient-to-r ${service.color} hover:shadow-lg transition-all duration-300 group-hover:scale-105`}
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-purple-50 via-white to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Petty Travel?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're committed to providing the safest and most comfortable
              travel experience for your pets
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <Card
                key={index}
                className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-white">{item.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Happy Pet Parents
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Read what our customers say about their pet travel experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <CardContent className="p-8">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    "{testimonial.comment}"
                  </p>
                  <div className="border-t pt-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-semibold text-gray-900">
                          {testimonial.name}
                        </p>
                        <p className="text-sm text-gray-600">
                          {testimonial.location}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-purple-600">
                          {testimonial.petName}
                        </p>
                        <p className="text-sm text-gray-600">
                          {testimonial.petType}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#7E22CE] to-[#9333EA] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Plan Your Pet's Journey?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Get a free consultation with our pet travel experts and ensure your
            furry friend travels safely
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-[#7E22CE] hover:bg-gray-100 px-8 py-4 text-lg"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Schedule Free Consultation
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[#7E22CE] px-8 py-4 text-lg"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now: +91-XXXX-XXXX
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
