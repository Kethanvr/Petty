"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Stethoscope,
  Calendar,
  Clock,
  MapPin,
  Phone,
  Mail,
  Star,
  Heart,
  Shield,
  Users,
  Award,
  Video,
  MessageCircle,
  FileText,
  CheckCircle,
  AlertCircle,
  Zap,
  Globe,
  DollarSign,
  BookOpen,
  Camera,
  Pill,
  Activity,
} from "lucide-react";

// Mock veterinarian data
const veterinarians = [
  {
    id: 1,
    name: "Dr. Priya Sharma",
    specialization: "Small Animal Medicine",
    experience: "12 years",
    rating: 4.9,
    reviews: 342,
    languages: ["Hindi", "English", "Marathi"],
    education: "BVSc & AH, IVRI Bareilly",
    consultationFee: 299,
    availability: "Available Now",
    image: "/public/file.svg",
    address: "Pet Care Clinic, Sector 18, Noida",
    phone: "+91 98765 43210",
    email: "dr.priya@petcare.com",
    specialties: ["Vaccination", "Surgery", "Emergency Care", "Dental Care"],
    nextAvailable: "Today 2:30 PM"
  },
  {
    id: 2,
    name: "Dr. Rajesh Kumar",
    specialization: "Exotic Animal Care",
    experience: "8 years",
    rating: 4.8,
    reviews: 256,
    languages: ["Hindi", "English", "Punjabi"],
    education: "MVSc Animal Surgery, GADVASU",
    consultationFee: 399,
    availability: "Busy until 4 PM",
    image: "/public/file.svg",
    address: "Animal Hospital, MG Road, Gurgaon",
    phone: "+91 98765 43211",
    email: "dr.rajesh@animalhospital.com",
    specialties: ["Birds", "Reptiles", "Small Mammals", "Nutrition"],
    nextAvailable: "Today 4:30 PM"
  },
  {
    id: 3,
    name: "Dr. Meera Patel",
    specialization: "Veterinary Dermatology",
    experience: "15 years",
    rating: 4.9,
    reviews: 428,
    languages: ["Hindi", "English", "Gujarati"],
    education: "PhD Veterinary Medicine, IVRI",
    consultationFee: 499,
    availability: "Available Now",
    image: "/public/file.svg",
    address: "Skin & Coat Clinic, Bandra West, Mumbai",
    phone: "+91 98765 43212",
    email: "dr.meera@skincoat.com",
    specialties: ["Skin Allergies", "Hair Loss", "Parasite Control", "Grooming"],
    nextAvailable: "Today 1:00 PM"
  },
  {
    id: 4,
    name: "Dr. Amit Singh",
    specialization: "Emergency & Critical Care",
    experience: "10 years",
    rating: 4.7,
    reviews: 298,
    languages: ["Hindi", "English"],
    education: "BVSc & AH, College of Veterinary Science",
    consultationFee: 599,
    availability: "24/7 Emergency",
    image: "/public/file.svg",
    address: "Emergency Pet Hospital, Koramangala, Bangalore",
    phone: "+91 98765 43213",
    email: "dr.amit@emergency.com",
    specialties: ["Emergency Surgery", "ICU Care", "Trauma", "Poison Cases"],
    nextAvailable: "Available 24/7"
  },
];

const consultationTypes = [
  {
    title: "Video Consultation",
    icon: Video,
    price: "₹199",
    duration: "15-20 mins",
    description: "Online consultation from comfort of your home",
    benefits: ["Instant consultation", "No travel required", "Record keeping", "Follow-up included"]
  },
  {
    title: "In-Clinic Visit",
    icon: Stethoscope,
    price: "₹399",
    duration: "30-45 mins",
    description: "Complete physical examination and diagnosis",
    benefits: ["Physical examination", "Diagnostic tests", "Treatment plan", "Medication prescription"]
  },
  {
    title: "Emergency Care",
    icon: AlertCircle,
    price: "₹799",
    duration: "Immediate",
    description: "24/7 emergency veterinary services",
    benefits: ["Immediate attention", "Critical care", "Surgery if needed", "ICU facilities"]
  },
  {
    title: "Home Visit",
    icon: Heart,
    price: "₹699",
    duration: "45-60 mins",
    description: "Vet comes to your home for examination",
    benefits: ["Comfortable for pet", "No stress travel", "Home environment", "Convenience"]
  }
];

const services = [
  {
    category: "General Care",
    icon: Heart,
    services: ["Health Checkups", "Vaccination", "Deworming", "Microchipping", "Health Certificates"]
  },
  {
    category: "Specialized Care",
    icon: Stethoscope,
    services: ["Surgery", "Dental Care", "Dermatology", "Cardiology", "Ophthalmology"]
  },
  {
    category: "Emergency Services",
    icon: AlertCircle,
    services: ["24/7 Emergency", "Critical Care", "Trauma Surgery", "Poison Treatment", "ICU Care"]
  },
  {
    category: "Diagnostic Services",
    icon: Activity,
    services: ["X-Ray", "Ultrasound", "Blood Tests", "Urine Analysis", "ECG"]
  }
];

export default function VeterinaryPage() {
  const [selectedType, setSelectedType] = useState("all");
  const [selectedSpecialty, setSelectedSpecialty] = useState("all");
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [selectedVet, setSelectedVet] = useState(null);

  const filteredVets = veterinarians.filter(vet => {
    if (selectedSpecialty === "all") return true;
    return vet.specialties.some(specialty => 
      specialty.toLowerCase().includes(selectedSpecialty.toLowerCase())
    );
  });

  const handleBookConsultation = (vet) => {
    setSelectedVet(vet);
    setShowBookingModal(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 pt-20">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-white/20 rounded-full backdrop-blur-lg">
                <Stethoscope className="w-12 h-12" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-green-100 bg-clip-text text-transparent">
              Veterinary Consultancy
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-green-100 max-w-3xl mx-auto">
              Connect with certified veterinarians for expert pet healthcare. Available 24/7 for consultations, emergencies, and specialized care.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full backdrop-blur-lg">
                <Users className="w-4 h-4" />
                <span>500+ Certified Vets</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full backdrop-blur-lg">
                <Clock className="w-4 h-4" />
                <span>24/7 Availability</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full backdrop-blur-lg">
                <Video className="w-4 h-4" />
                <span>Online & Offline</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {consultationTypes.map((type, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden border-2 hover:border-green-300">
              <CardContent className="p-6 text-center">
                <div className="p-4 bg-gradient-to-br from-green-100 to-blue-100 rounded-full w-fit mx-auto mb-4">
                  <type.icon className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{type.title}</h3>
                <div className="text-2xl font-bold text-green-600 mb-2">{type.price}</div>
                <div className="text-sm text-gray-600 mb-4">{type.duration}</div>
                <p className="text-gray-700 text-sm mb-4">{type.description}</p>
                <ul className="text-xs text-gray-600 mb-4 space-y-1">
                  {type.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center gap-1">
                      <CheckCircle className="w-3 h-3 text-green-500" />
                      {benefit}
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700">
                  Book Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Emergency Banner */}
        <div className="bg-gradient-to-r from-red-500 to-orange-600 text-white rounded-2xl p-6 mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-white/20 rounded-full animate-pulse">
                <AlertCircle className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Pet Emergency? We're Here 24/7!</h3>
                <p className="text-red-100">Immediate veterinary assistance for critical situations</p>
              </div>
            </div>
            <div className="flex gap-3">
              <Button className="bg-white text-red-600 hover:bg-gray-100">
                <Phone className="w-4 h-4 mr-2" />
                Emergency: 1800-VET-HELP
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-red-600">
                <Video className="w-4 h-4 mr-2" />
                Video Call Now
              </Button>
            </div>
          </div>
        </div>

        {/* Filter Section */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Find the Right Veterinarian</h3>
              <p className="text-gray-600">Filter by specialization and consultation type</p>
            </div>
            <div className="flex gap-4">
              <select
                value={selectedSpecialty}
                onChange={(e) => setSelectedSpecialty(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                <option value="all">All Specialties</option>
                <option value="vaccination">Vaccination</option>
                <option value="surgery">Surgery</option>
                <option value="emergency">Emergency Care</option>
                <option value="dental">Dental Care</option>
                <option value="skin">Skin & Allergies</option>
              </select>
            </div>
          </div>
        </div>

        {/* Veterinarians List */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Expert Veterinarians</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredVets.map((vet) => (
              <Card key={vet.id} className="group hover:shadow-2xl transition-all duration-300 hover:scale-102 overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <div className="relative">
                      <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-blue-100 rounded-full flex items-center justify-center">
                        <Stethoscope className="w-10 h-10 text-green-600" />
                      </div>
                      <div className={`absolute -bottom-1 -right-1 w-6 h-6 rounded-full border-2 border-white ${
                        vet.availability === "Available Now" ? "bg-green-500" : "bg-orange-500"
                      }`}></div>
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">{vet.name}</h3>
                          <p className="text-green-600 font-medium">{vet.specialization}</p>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 text-yellow-500 fill-current" />
                            <span className="font-bold">{vet.rating}</span>
                            <span className="text-sm text-gray-500">({vet.reviews})</span>
                          </div>
                          <div className="text-2xl font-bold text-green-600">₹{vet.consultationFee}</div>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                        <div>
                          <div className="text-gray-500">Experience</div>
                          <div className="font-medium">{vet.experience}</div>
                        </div>
                        <div>
                          <div className="text-gray-500">Next Available</div>
                          <div className="font-medium text-green-600">{vet.nextAvailable}</div>
                        </div>
                      </div>

                      <div className="mb-4">
                        <div className="text-gray-500 text-sm mb-1">Specialties</div>
                        <div className="flex flex-wrap gap-1">
                          {vet.specialties.slice(0, 3).map((specialty, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              {specialty}
                            </Badge>
                          ))}
                          {vet.specialties.length > 3 && (
                            <Badge variant="outline" className="text-xs">
                              +{vet.specialties.length - 3} more
                            </Badge>
                          )}
                        </div>
                      </div>

                      <div className="mb-4 text-sm text-gray-600">
                        <div className="flex items-center gap-2 mb-1">
                          <MapPin className="w-4 h-4" />
                          <span>{vet.address}</span>
                        </div>
                        <div className="flex items-center gap-2 mb-1">
                          <Phone className="w-4 h-4" />
                          <span>{vet.phone}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Mail className="w-4 h-4" />
                          <span>{vet.email}</span>
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <Button 
                          className="flex-1 bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700"
                          onClick={() => handleBookConsultation(vet)}
                        >
                          <Calendar className="w-4 h-4 mr-2" />
                          Book Consultation
                        </Button>
                        <Button variant="outline" className="flex-1">
                          <MessageCircle className="w-4 h-4 mr-2" />
                          Quick Chat
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Services Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Our Veterinary Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="text-center">
                <div className="p-4 bg-gradient-to-br from-green-100 to-blue-100 rounded-full w-fit mx-auto mb-4">
                  <service.icon className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{service.category}</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  {service.services.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <CheckCircle className="w-3 h-3 text-green-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* How It Works */}
        <div className="bg-gradient-to-r from-blue-500 to-green-600 text-white rounded-2xl p-8 mb-8">
          <h2 className="text-3xl font-bold mb-8 text-center">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="p-4 bg-white/20 rounded-full w-fit mx-auto mb-4">
                <Calendar className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">1. Book Appointment</h3>
              <p className="text-blue-100">Choose your preferred vet and time slot</p>
            </div>
            <div className="text-center">
              <div className="p-4 bg-white/20 rounded-full w-fit mx-auto mb-4">
                <Video className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">2. Connect Online/Offline</h3>
              <p className="text-blue-100">Video call or visit the clinic</p>
            </div>
            <div className="text-center">
              <div className="p-4 bg-white/20 rounded-full w-fit mx-auto mb-4">
                <FileText className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">3. Get Diagnosis</h3>
              <p className="text-blue-100">Receive expert medical advice</p>
            </div>
            <div className="text-center">
              <div className="p-4 bg-white/20 rounded-full w-fit mx-auto mb-4">
                <Pill className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">4. Follow Treatment</h3>
              <p className="text-blue-100">Get medicines and follow-up care</p>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Contact Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="p-4 bg-green-100 rounded-full w-fit mx-auto mb-4">
                <Phone className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Emergency Helpline</h3>
              <p className="text-gray-600">1800-VET-HELP</p>
              <p className="text-gray-600">Available 24/7</p>
            </div>
            <div>
              <div className="p-4 bg-blue-100 rounded-full w-fit mx-auto mb-4">
                <Mail className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Email Support</h3>
              <p className="text-gray-600">support@petvet.com</p>
              <p className="text-gray-600">Response within 2 hours</p>
            </div>
            <div>
              <div className="p-4 bg-purple-100 rounded-full w-fit mx-auto mb-4">
                <MessageCircle className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Live Chat</h3>
              <p className="text-gray-600">Instant messaging</p>
              <p className="text-gray-600">Mon-Fri 9AM-9PM</p>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Modal */}
      {showBookingModal && selectedVet && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 relative">
            <button
              onClick={() => setShowBookingModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <X className="w-6 h-6" />
            </button>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-green-600" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Book Consultation with {selectedVet.name}
              </h3>
              
              <p className="text-gray-600 mb-6">
                This booking feature is currently under development. We're working hard to bring you seamless appointment booking soon!
              </p>
              
              <div className="space-y-3">
                <Button
                  onClick={() => setShowBookingModal(false)}
                  className="w-full bg-green-600 hover:bg-green-700 text-white"
                >
                  Got it, thanks!
                </Button>
                
                <p className="text-sm text-gray-500">
                  For now, please call {selectedVet.phone} to book your appointment.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
