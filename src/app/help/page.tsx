import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function HelpPage() {
  return (
    <div className="min-h-screen bg-[#f0f4ff]">
      {/* Hero Section */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold text-[#222] mb-6">Help & Support</h1>
            <p className="text-xl text-[#666] leading-relaxed">
              Need assistance with your pet food orders or have questions about our products?
              Our support team is here to help you every step of the way!
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <Card className="shadow-lg">              <CardHeader>
                <CardTitle className="text-2xl text-[#222]">
                  Get Support
                </CardTitle>
                <p className="text-[#666]">
                  Having trouble with your order or need help choosing the right food for your pet?
                  Send us a message and we'll get back to you quickly.
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-[#222] mb-2"
                    >
                      First Name *
                    </label>
                    <Input
                      id="firstName"
                      type="text"
                      placeholder="Your first name"
                      className="border-[#7E22CE] focus:ring-[#7E22CE]"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-[#222] mb-2"
                    >
                      Last Name *
                    </label>
                    <Input
                      id="lastName"
                      type="text"
                      placeholder="Your last name"
                      className="border-[#7E22CE] focus:ring-[#7E22CE]"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-[#222] mb-2"
                  >
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    className="border-[#7E22CE] focus:ring-[#7E22CE]"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-[#222] mb-2"
                  >
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+91 12345 67890"
                    className="border-[#7E22CE] focus:ring-[#7E22CE]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-[#222] mb-2"
                  >
                    Subject *
                  </label>
                  <Input
                    id="subject"
                    type="text"
                    placeholder="What is this regarding?"
                    className="border-[#7E22CE] focus:ring-[#7E22CE]"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-[#222] mb-2"
                  >
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell us how we can help you..."
                    rows={5}
                    className="border-[#7E22CE] focus:ring-[#7E22CE]"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-[#7E22CE] hover:bg-[#6b1fa3] text-white py-3 text-lg font-semibold"
                >
                  Send Message
                </Button>

                <p className="text-sm text-[#666] text-center">
                  * Required fields. We'll respond within 24 hours.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="grid gap-6">
              <Card className="shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-[#d7b3ff] rounded-full p-3">
                      <MapPin className="w-6 h-6 text-[#7E22CE]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#222] mb-2">
                        Our Address
                      </h3>                      <p className="text-[#666]">
                        Brookfield, Bangalore
                        <br />
                        Karnataka 560032
                        <br />
                        India
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-[#d7b3ff] rounded-full p-3">
                      <Phone className="w-6 h-6 text-[#7E22CE]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#222] mb-2">
                        Phone Number
                      </h3>                      <p className="text-[#666]">
                        +91 98765 43210
                        <br />
                        +91 87654 32109
                      </p>
                      <p className="text-sm text-[#666] mt-1">
                        Mon-Sat: 9:00 AM - 7:00 PM
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-[#d7b3ff] rounded-full p-3">
                      <Mail className="w-6 h-6 text-[#7E22CE]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#222] mb-2">
                        Email Address
                      </h3>
                      <p className="text-[#666]">
                        support@petty.com
                        <br />
                        orders@petty.com
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-[#d7b3ff] rounded-full p-3">
                      <Clock className="w-6 h-6 text-[#7E22CE]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#222] mb-2">
                        Business Hours
                      </h3>
                      <div className="text-[#666] space-y-1">
                        <p>Monday - Friday: 9:00 AM - 7:00 PM</p>
                        <p>Saturday: 10:00 AM - 5:00 PM</p>
                        <p>Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* FAQ Section */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl text-[#222]">
                  Frequently Asked Questions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-[#222] mb-2">
                    How long does delivery take?
                  </h4>
                  <p className="text-[#666] text-sm">
                    Standard delivery takes 2-3 business days. Express delivery
                    is available for 1-2 business days.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-[#222] mb-2">
                    Do you offer free shipping?
                  </h4>
                  <p className="text-[#666] text-sm">
                    Yes! We offer free delivery on all orders above ₹500.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-[#222] mb-2">
                    What if my pet doesn't like the food?
                  </h4>
                  <p className="text-[#666] text-sm">
                    We offer a 100% satisfaction guarantee. If your pet doesn't
                    love our food, we'll refund your purchase.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-[#222] mb-2">
                    How can I track my order?
                  </h4>
                  <p className="text-[#666] text-sm">
                    Once your order ships, you'll receive a tracking number via
                    email to monitor your delivery.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Help Section */}
        <section className="mt-16">
          <div className="bg-white rounded-[30px] p-8 md:p-12 shadow-lg text-center">
            <h2 className="text-3xl font-bold text-[#222] mb-4">
              Need Immediate Help?
            </h2>
            <p className="text-[#666] mb-8 max-w-2xl mx-auto">
              For urgent inquiries or order-related issues, don't hesitate to
              call us directly. Our customer service team is standing by to
              assist you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-[#7E22CE] hover:bg-[#6b1fa3] text-white px-8 py-3">
                Call Now: +91 98765 43210
              </Button>
              <Button
                variant="outline"
                className="border-[#7E22CE] text-[#7E22CE] hover:bg-[#7E22CE] hover:text-white px-8 py-3"
              >
                Chat Support
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
