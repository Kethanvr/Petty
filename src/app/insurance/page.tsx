"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Check,
  Shield,
  Heart,
  Phone,
  X,
} from "lucide-react";
import {
  insurancePlans,
  getInsuranceFeatures,
  calculateYearlySavings,
  type InsurancePlan,
} from "@/lib/insurance";

export default function InsurancePage() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">(
    "monthly"
  );
  const [showBetaOverlay, setShowBetaOverlay] = useState(false);
  const features = getInsuranceFeatures();

  const formatPrice = (plan: InsurancePlan) => {
    if (billingCycle === "monthly") {
      return `₹${plan.monthlyPrice}/month`;
    } else {
      return `₹${plan.yearlyPrice}/year`;
    }
  };
  const getSavingsText = (plan: InsurancePlan) => {
    if (billingCycle === "yearly") {
      const savings = calculateYearlySavings(plan);
      return `Save ₹${savings} annually`;
    }
    return null;
  };

  const handleChoosePlan = () => {
    setShowBetaOverlay(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-3">
          <nav className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-[#7E22CE]">
              Home
            </Link>
            <span>/</span>
            <span className="text-gray-900">Pet Insurance</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#7E22CE] to-[#9333EA] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <Shield className="w-16 h-16 mx-auto mb-6 text-white/90" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Protect Your Pet's Health with Comprehensive Insurance
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Affordable health insurance plans starting from ₹99/month. Get
              cashless treatment, 24/7 emergency support, and peace of mind for
              your furry family.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-lg">
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5" />
                <span>Cashless Treatment</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5" />
                <span>24/7 Emergency Support</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5" />
                <span>1200+ Partner Clinics</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Billing Toggle */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <div className="flex items-center justify-center bg-white rounded-full p-2 shadow-lg border">
              <button
                onClick={() => setBillingCycle("monthly")}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  billingCycle === "monthly"
                    ? "bg-[#7E22CE] text-white shadow-md"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle("yearly")}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  billingCycle === "yearly"
                    ? "bg-[#7E22CE] text-white shadow-md"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Yearly
                <Badge className="ml-2 bg-green-100 text-green-600 hover:bg-green-100">
                  Save Up to 17%
                </Badge>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Insurance Plans */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Choose the Perfect Plan for Your Pet
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              From basic emergency care to comprehensive health coverage, we
              have the right plan for every pet and budget.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {insurancePlans.map((plan) => (
              <Card
                key={plan.id}
                className={`relative h-full transition-all duration-300 hover:shadow-2xl ${
                  plan.popularPlan || plan.bestValue
                    ? "border-[#7E22CE] shadow-lg scale-105"
                    : "border-gray-200 hover:border-[#7E22CE]/50"
                }`}
              >
                {(plan.popularPlan || plan.bestValue) && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-[#7E22CE] hover:bg-[#7E22CE] text-white px-4 py-1">
                      {plan.popularPlan ? "Most Popular" : "Best Value"}
                    </Badge>
                  </div>
                )}

                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl font-bold text-gray-900 mb-2">
                    {plan.name}
                  </CardTitle>
                  <div className="mb-4">
                    <div className="text-4xl font-bold text-[#7E22CE] mb-1">
                      {formatPrice(plan)}
                    </div>
                    {getSavingsText(plan) && (
                      <div className="text-sm text-green-600 font-medium">
                        {getSavingsText(plan)}
                      </div>
                    )}
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {plan.description}
                  </p>
                </CardHeader>

                <CardContent className="pt-0">
                  {/* Key Features */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3 text-sm">
                      Coverage Includes:
                    </h4>
                    <ul className="space-y-2">
                      {plan.coverage.map((item, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-2 text-sm"
                        >
                          <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Plan Details */}
                  <div className="grid grid-cols-2 gap-4 mb-6 text-xs">
                    <div>
                      <div className="text-gray-500">Max Claim</div>
                      <div className="font-semibold">
                        ₹{plan.maxClaimAmount.toLocaleString()}
                      </div>
                    </div>
                    <div>
                      <div className="text-gray-500">Reimbursement</div>
                      <div className="font-semibold">
                        {plan.reimbursementRate}%
                      </div>
                    </div>
                    <div>
                      <div className="text-gray-500">Waiting Period</div>
                      <div className="font-semibold">{plan.waitingPeriod}</div>
                    </div>
                    <div>
                      <div className="text-gray-500">Age Limit</div>
                      <div className="font-semibold">Up to {plan.ageLimit}</div>
                    </div>
                  </div>                  <Button
                    onClick={handleChoosePlan}
                    className={`w-full py-3 font-semibold transition-all ${
                      plan.popularPlan || plan.bestValue
                        ? "bg-[#7E22CE] hover:bg-[#6b1fa3] text-white"
                        : "border-[#7E22CE] text-[#7E22CE] hover:bg-[#7E22CE] hover:text-white"
                    }`}
                    variant={
                      plan.popularPlan || plan.bestValue ? "default" : "outline"
                    }
                  >
                    Choose {plan.name}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Our Pet Insurance?
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We've designed our insurance plans with your pet's health and your
              peace of mind in focus.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      {/* <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
            <div>
              <div className="text-3xl font-bold text-[#7E22CE] mb-2">
                50,000+
              </div>
              <div className="text-gray-600">Happy Pets Insured</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#7E22CE] mb-2">
                1,200+
              </div>
              <div className="text-gray-600">Partner Clinics</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#7E22CE] mb-2">48hr</div>
              <div className="text-gray-600">Claim Processing</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#7E22CE] mb-2">4.8★</div>
              <div className="text-gray-600">Customer Rating</div>
            </div>
          </div>
        </div>
      </section> */}

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              {[
                {
                  question: "How does cashless treatment work?",
                  answer:
                    "Simply show your pet insurance card at any of our 1,200+ partner clinics. The clinic bills us directly, so you don't need to pay upfront for covered treatments.",
                },
                {
                  question: "What is the waiting period?",
                  answer:
                    "Waiting periods vary by plan (3-15 days). Emergency coverage starts immediately after enrollment, while routine care coverage begins after the waiting period.",
                },
                {
                  question: "Can I change my plan later?",
                  answer:
                    "Yes, you can upgrade your plan at renewal. Downgrades are subject to waiting periods for additional benefits.",
                },
                {
                  question: "Are pre-existing conditions covered?",
                  answer:
                    "Pre-existing conditions are covered only in our Premium Complete plan, subject to a longer waiting period and veterinary assessment.",
                },
              ].map((faq, index) => (
                <Card key={index} className="border-gray-200">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      {faq.question}
                    </h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#7E22CE]">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto text-white">
            <Heart className="w-16 h-16 mx-auto mb-6 text-white/90" />
            <h2 className="text-3xl font-bold mb-4">
              Ready to Protect Your Pet?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join thousands of pet parents who trust us with their pet's
              health. Get instant coverage and peace of mind starting today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-[#7E22CE] hover:bg-gray-100 font-semibold px-8 py-3"
              >
                Get Free Quote              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#7E22CE] font-semibold px-8 py-3"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Us: 1800-PET-CARE
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Beta Testing Overlay */}
      {showBetaOverlay && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-md w-full p-6 relative">
            <button
              onClick={() => setShowBetaOverlay(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <X className="w-6 h-6" />
            </button>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-yellow-600" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Website Under Beta Testing
              </h3>
              
              <p className="text-gray-600 mb-6">
                Our pet insurance feature is currently under development and beta testing. 
                This functionality will be implemented in future updates to provide you with 
                the best possible insurance experience for your pets.
              </p>
              
              <div className="space-y-3">
                <Button
                  onClick={() => setShowBetaOverlay(false)}
                  className="w-full bg-[#7E22CE] hover:bg-[#6b1fa3] text-white"
                >
                  Got it, thanks!
                </Button>
                
                <p className="text-sm text-gray-500">
                  Stay tuned for updates! We're working hard to bring you comprehensive pet insurance soon.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
