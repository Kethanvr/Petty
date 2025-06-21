"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Home,
  MapPin,
  Globe,
  Clock,
  CheckCircle,
  Phone,
  Calendar,
  ArrowRight,
  ArrowLeft,
  Shield,
  FileText,
  Truck,
  Heart,
  Star,
  Users,
} from "lucide-react";

export default function PetRelocationPage() {
  const [showQuoteForm, setShowQuoteForm] = useState(false);

  const relocationServices = [
    {
      id: "domestic-relocation",
      title: "Domestic Pet Relocation",
      price: "₹8,999",
      duration: "2-5 Business Days",
      description:
        "Complete relocation services within India for your furry family",
      features: [
        "Door-to-door transportation",
        "Professional pet handlers",
        "Climate-controlled vehicles",
        "Interstate permit assistance",
        "Real-time tracking & updates",
      ],
      color: "from-green-500 to-green-600",
      popular: true,
    },
    {
      id: "international-relocation",
      title: "International Pet Relocation",
      price: "₹25,999",
      duration: "7-21 Business Days",
      description:
        "Full-service international relocation with complete documentation",
      features: [
        "Complete documentation handling",
        "Quarantine facility coordination",
        "Custom clearance assistance",
        "International flight arrangements",
        "Destination country requirements",
      ],
      color: "from-purple-500 to-purple-600",
      premium: true,
    },
    {
      id: "quarantine-management",
      title: "Quarantine Management",
      price: "₹5,999",
      duration: "As per regulations",
      description: "Professional quarantine facility management and monitoring",
      features: [
        "Government-approved facilities",
        "Daily health monitoring",
        "Veterinary care during quarantine",
        "Regular updates to owners",
        "Post-quarantine pickup",
      ],
      color: "from-blue-500 to-blue-600",
    },
    {
      id: "corporate-relocation",
      title: "Corporate Pet Relocation",
      price: "₹15,999",
      duration: "5-14 Business Days",
      description: "Specialized services for corporate employee relocations",
      features: [
        "Bulk relocation discounts",
        "Corporate billing options",
        "Dedicated account manager",
        "Express processing available",
        "Employee family support",
      ],
      color: "from-orange-500 to-orange-600",
    },
  ];

  const relocationProcess = [
    {
      step: "1",
      title: "Free Consultation",
      description:
        "Schedule a consultation to assess your pet's relocation needs",
      icon: <Phone className="w-6 h-6" />,
    },
    {
      step: "2",
      title: "Documentation Prep",
      description: "We handle all required health certificates and permits",
      icon: <FileText className="w-6 h-6" />,
    },
    {
      step: "3",
      title: "Safe Transportation",
      description: "Professional handlers ensure safe journey for your pet",
      icon: <Truck className="w-6 h-6" />,
    },
    {
      step: "4",
      title: "Destination Delivery",
      description: "Door-to-door delivery at your new location",
      icon: <Home className="w-6 h-6" />,
    },
  ];

  const whyChooseUs = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Licensed & Insured",
      description:
        "Fully licensed with comprehensive insurance coverage for your peace of mind",
      stats: "₹10L+ Insurance",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Network",
      description:
        "Partnerships with agencies worldwide for seamless international relocations",
      stats: "50+ Countries",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Expert Team",
      description:
        "Trained professionals with years of experience in pet transportation",
      stats: "500+ Relocations",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "24/7 Care",
      description:
        "Round-the-clock monitoring and support throughout the journey",
      stats: "100% Care",
    },
  ];

  const testimonials = [
    {
      name: "Amit & Priya Sharma",
      location: "Mumbai to Toronto",
      rating: 5,
      comment:
        "Petty handled our relocation to Canada flawlessly. Our cat, Whiskers, arrived safely and stress-free. The team kept us updated throughout the entire process.",
      petName: "Whiskers",
      petType: "Persian Cat",
      service: "International Relocation",
    },
    {
      name: "Rajesh Kumar",
      location: "Delhi to Bangalore",
      rating: 5,
      comment:
        "Excellent domestic relocation service! The team was professional, caring, and made sure our Golden Retriever was comfortable throughout the journey.",
      petName: "Bruno",
      petType: "Golden Retriever",
      service: "Domestic Relocation",
    },
    {
      name: "Sarah & David Wilson",
      location: "London to Mumbai",
      rating: 5,
      comment:
        "Moving our pets from UK to India seemed daunting, but Petty made it seamless. They handled all the paperwork and quarantine arrangements perfectly.",
      petName: "Max & Luna",
      petType: "Labrador Mix",
      service: "International Relocation",
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
            <span className="text-gray-600">Pet Relocation Services</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-500 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-3 bg-white/10 px-6 py-3 rounded-full mb-6">
              <Home className="w-6 h-6" />
              <span className="font-semibold">Pet Relocation Services</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Complete Pet Relocation
              <br />
              <span className="text-yellow-300">Solutions</span>
            </h1>
            <p className="text-xl mb-8 text-purple-100 max-w-3xl mx-auto leading-relaxed">
              Moving to a new city or country? We ensure your furry family
              members relocate safely and comfortably with our comprehensive
              relocation services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                size="lg"
                className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 text-lg"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Free Consultation
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 text-lg"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Expert
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-yellow-300">500+</div>
                <div className="text-sm text-purple-200">
                  Successful Relocations
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow-300">50+</div>
                <div className="text-sm text-purple-200">Countries Served</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow-300">99%</div>
                <div className="text-sm text-purple-200">Success Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow-300">24/7</div>
                <div className="text-sm text-purple-200">Support</div>
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
              Relocation Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive pet relocation solutions for domestic and
              international moves
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {relocationServices.map((service) => (
              <Card
                key={service.id}
                className="group hover:shadow-2xl transition-all duration-300 border-0 overflow-hidden relative"
              >
                {service.popular && (
                  <Badge className="absolute top-4 right-4 bg-orange-500 text-white z-10">
                    Most Popular
                  </Badge>
                )}
                {service.premium && (
                  <Badge className="absolute top-4 right-4 bg-gradient-to-r from-purple-500 to-purple-600 text-white z-10">
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

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 via-white to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Relocation Process
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A simple, stress-free process designed with your pet's comfort in
              mind
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {relocationProcess.map((step, index) => (
              <Card
                key={index}
                className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-white">{step.icon}</div>
                  </div>
                  <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-sm font-bold">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Petty Relocation?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Trust, expertise, and care in every relocation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <Card
                key={index}
                className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <CardContent className="p-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-white">{item.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {item.description}
                  </p>
                  <div className="text-2xl font-bold text-purple-600">
                    {item.stats}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real experiences from families who trusted us with their pet
              relocations
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
                    <div className="flex items-center justify-between mb-2">
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
                    <Badge
                      variant="secondary"
                      className="bg-purple-100 text-purple-700"
                    >
                      {testimonial.service}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-500 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Start Your Pet's Relocation?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Get a free consultation and personalized relocation plan for your
            furry family member
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 text-lg"
              onClick={() => setShowQuoteForm(true)}
            >
              <Calendar className="w-5 h-5 mr-2" />
              Free Consultation
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 text-lg"
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
