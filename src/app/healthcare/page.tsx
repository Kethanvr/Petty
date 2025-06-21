"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Stethoscope,
  Pill,
  Shield,
  Heart,
  Phone,
  Calendar,
  MapPin,
  Clock,
  Star,
  Award,
  Users,
  CheckCircle,
  ArrowRight,
  Activity,
  BookOpen,
  MessageCircle,
  Video,
  AlertCircle,
  Zap,
  Globe,
} from "lucide-react";

const healthcareServices = [
  {
    title: "Pet Medicine",
    icon: Pill,
    href: "/medicine",
    description: "Premium quality medicines, supplements, and healthcare products for your pets",
    features: ["Vet Approved Medicines", "Prescription & OTC", "Fast Delivery", "Expert Guidance"],
    color: "from-blue-500 to-purple-600",
    stats: "500+ Products"
  },
  {
    title: "Veterinary Consultancy",
    icon: Stethoscope,
    href: "/veterinary",
    description: "Connect with certified veterinarians for expert pet healthcare consultations",
    features: ["500+ Certified Vets", "24/7 Availability", "Video Consultations", "Emergency Care"],
    color: "from-green-500 to-blue-600",
    stats: "24/7 Available"
  },
  {
    title: "Pet Insurance",
    icon: Shield,
    href: "/insurance",
    description: "Comprehensive health insurance plans to protect your pet's health and your finances",
    features: ["Cashless Treatment", "1200+ Partner Clinics", "Emergency Coverage", "Affordable Plans"],
    color: "from-purple-500 to-pink-600",
    stats: "Starting ₹99/month"
  }
];

const emergencyContacts = [
  {
    title: "Emergency Vet Helpline",
    number: "1800-VET-HELP",
    description: "24/7 emergency veterinary assistance",
    icon: Phone,
    color: "bg-red-500"
  },
  {
    title: "Pet Insurance Claims",
    number: "1800-PET-CARE",
    description: "Insurance support and claims processing",
    icon: Shield,
    color: "bg-blue-500"
  },
  {
    title: "Medicine Support",
    number: "1800-MED-HELP",
    description: "Medication guidance and support",
    icon: Pill,
    color: "bg-green-500"
  }
];

const quickStats = [
  { label: "Certified Veterinarians", value: "500+", icon: Stethoscope },
  { label: "Happy Pet Parents", value: "50,000+", icon: Heart },
  { label: "Partner Clinics", value: "1,200+", icon: MapPin },
  { label: "Medicines Available", value: "1,000+", icon: Pill },
];

export default function HealthcareHubPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 pt-20">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center gap-4 mb-6">
              <div className="p-3 bg-white/20 rounded-full backdrop-blur-lg">
                <Heart className="w-8 h-8" />
              </div>
              <div className="p-3 bg-white/20 rounded-full backdrop-blur-lg">
                <Stethoscope className="w-8 h-8" />
              </div>
              <div className="p-3 bg-white/20 rounded-full backdrop-blur-lg">
                <Shield className="w-8 h-8" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              Complete Pet Healthcare Hub
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-4xl mx-auto">
              Your one-stop destination for all pet healthcare needs. From medicine and consultations to insurance coverage - we've got your pet covered.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full backdrop-blur-lg">
                <Users className="w-4 h-4" />
                <span>500+ Expert Vets</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full backdrop-blur-lg">
                <Clock className="w-4 h-4" />
                <span>24/7 Emergency Care</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full backdrop-blur-lg">
                <Award className="w-4 h-4" />
                <span>Trusted by 50,000+ Pet Parents</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {quickStats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transition-shadow">
              <div className="p-3 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full w-fit mx-auto mb-3">
                <stat.icon className="w-6 h-6 text-blue-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Emergency Banner */}
        <div className="bg-gradient-to-r from-red-500 to-orange-600 text-white rounded-2xl p-6 mb-12">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-white/20 rounded-full animate-pulse">
                <AlertCircle className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Emergency? We're Available 24/7!</h3>
                <p className="text-red-100">Immediate veterinary assistance for critical situations</p>
              </div>
            </div>
            <div className="flex gap-3">
              <Button className="bg-white text-red-600 hover:bg-gray-100">
                <Phone className="w-4 h-4 mr-2" />
                Call: 1800-VET-HELP
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-red-600">
                <Video className="w-4 h-4 mr-2" />
                Video Emergency
              </Button>
            </div>
          </div>
        </div>

        {/* Main Services */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Healthcare Services</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Comprehensive pet healthcare solutions designed to keep your furry friends healthy and happy.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {healthcareServices.map((service, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden border-2 hover:border-blue-300">
                <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <div className={`p-4 bg-gradient-to-r ${service.color} rounded-full w-fit mx-auto mb-4`}>
                      <service.icon className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h3>
                    <Badge className="mb-4">{service.stats}</Badge>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                  </div>

                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link href={service.href}>
                    <Button className={`w-full bg-gradient-to-r ${service.color} hover:scale-105 transition-all duration-300`}>
                      Explore {service.title}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Button className="h-20 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 flex flex-col items-center gap-2">
              <Calendar className="w-6 h-6" />
              <span>Book Consultation</span>
            </Button>
            <Button className="h-20 bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 flex flex-col items-center gap-2">
              <Pill className="w-6 h-6" />
              <span>Order Medicine</span>
            </Button>
            <Button className="h-20 bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 flex flex-col items-center gap-2">
              <Shield className="w-6 h-6" />
              <span>Get Insurance</span>
            </Button>
            <Button className="h-20 bg-gradient-to-r from-red-500 to-orange-600 hover:from-red-600 hover:to-orange-700 flex flex-col items-center gap-2">
              <AlertCircle className="w-6 h-6" />
              <span>Emergency Help</span>
            </Button>
          </div>
        </div>

        {/* Emergency Contacts */}
        <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">Emergency Contacts</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {emergencyContacts.map((contact, index) => (
              <div key={index} className="text-center">
                <div className={`p-4 ${contact.color} rounded-full w-fit mx-auto mb-4`}>
                  <contact.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2">{contact.title}</h3>
                <div className="text-2xl font-bold text-yellow-400 mb-2">{contact.number}</div>
                <p className="text-gray-300 text-sm">{contact.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* How We Help */}
        <div className="bg-gradient-to-r from-blue-500 to-green-600 text-white rounded-2xl p-8 mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center">How We Help Your Pet</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="p-4 bg-white/20 rounded-full w-fit mx-auto mb-4">
                <Activity className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Health Monitoring</h3>
              <p className="text-blue-100">Regular checkups and health tracking</p>
            </div>
            <div className="text-center">
              <div className="p-4 bg-white/20 rounded-full w-fit mx-auto mb-4">
                <Pill className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Medicine Delivery</h3>
              <p className="text-blue-100">Quality medicines delivered to your door</p>
            </div>
            <div className="text-center">
              <div className="p-4 bg-white/20 rounded-full w-fit mx-auto mb-4">
                <Video className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Expert Consultations</h3>
              <p className="text-blue-100">Connect with certified veterinarians</p>
            </div>
            <div className="text-center">
              <div className="p-4 bg-white/20 rounded-full w-fit mx-auto mb-4">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Insurance Protection</h3>
              <p className="text-blue-100">Financial security for pet healthcare</p>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">What Pet Parents Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">"Amazing service! The vet consultation saved my dog's life during an emergency."</p>
              <div className="font-bold text-gray-900">- Sarah M.</div>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">"The insurance plan is so affordable and the coverage is excellent!"</p>
              <div className="font-bold text-gray-900">- Raj K.</div>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">"Medicine delivery is so convenient and the quality is top-notch."</p>
              <div className="font-bold text-gray-900">- Priya D.</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-2xl p-8 text-center">
          <Heart className="w-16 h-16 mx-auto mb-6 text-white/90" />
          <h2 className="text-3xl font-bold mb-4">Ready to Give Your Pet the Best Care?</h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Join thousands of pet parents who trust us with their pet's health and happiness.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 font-semibold px-8 py-3">
              Get Started Today
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600 font-semibold px-8 py-3">
              <Phone className="w-5 h-5 mr-2" />
              Call Us: 1800-PET-CARE
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
