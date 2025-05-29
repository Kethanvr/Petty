import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Heart, Briefcase, Star, Upload } from "lucide-react";

export default function WorkWithUsPage() {
  return (
    <div className="min-h-screen bg-[#f0f4ff]">
      {/* Hero Section */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold text-[#222] mb-6">
              Work With Us
            </h1>
            <p className="text-xl text-[#666] leading-relaxed">
              Join our mission to make high-quality pet nutrition accessible to
              every pet family. Whether you're looking for a career opportunity
              or want to partner with us, we'd love to hear from you!
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Why Work With Us */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-[#222] text-center mb-12">
            Why Choose Petty?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="shadow-md hover:shadow-lg transition-shadow text-center">
              <CardContent className="p-8">
                <div className="bg-[#d7b3ff] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-[#7E22CE]" />
                </div>
                <h3 className="font-bold text-[#222] mb-3">
                  Pet-First Culture
                </h3>
                <p className="text-[#666] text-sm">
                  Everything we do is driven by our love for pets and commitment
                  to their wellbeing.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-md hover:shadow-lg transition-shadow text-center">
              <CardContent className="p-8">
                <div className="bg-[#d7b3ff] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-[#7E22CE]" />
                </div>
                <h3 className="font-bold text-[#222] mb-3">Amazing Team</h3>
                <p className="text-[#666] text-sm">
                  Work alongside passionate professionals who share your love
                  for animals.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-md hover:shadow-lg transition-shadow text-center">
              <CardContent className="p-8">
                <div className="bg-[#d7b3ff] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-[#7E22CE]" />
                </div>
                <h3 className="font-bold text-[#222] mb-3">
                  Growth Opportunities
                </h3>
                <p className="text-[#666] text-sm">
                  Advance your career in a rapidly growing company with endless
                  possibilities.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-md hover:shadow-lg transition-shadow text-center">
              <CardContent className="p-8">
                <div className="bg-[#d7b3ff] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Briefcase className="w-8 h-8 text-[#7E22CE]" />
                </div>
                <h3 className="font-bold text-[#222] mb-3">Great Benefits</h3>
                <p className="text-[#666] text-sm">
                  Competitive salary, health benefits, and pet-friendly
                  workplace policies.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Job Openings */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-[#222] text-center mb-12">
            Current Openings
          </h2>
          <div className="grid gap-6">
            <Card className="shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="text-xl font-bold text-[#222]">
                        Marketing Manager
                      </h3>
                      <Badge className="bg-green-100 text-green-700">
                        Full-Time
                      </Badge>
                      <Badge
                        variant="outline"
                        className="text-[#7E22CE] border-[#7E22CE]"
                      >
                        Remote
                      </Badge>
                    </div>
                    <p className="text-[#666] mb-4">
                      Lead our marketing efforts to reach more pet families.
                      Experience in digital marketing, social media, and content
                      creation required.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="text-xs">
                        Marketing
                      </Badge>
                      <Badge variant="secondary" className="text-xs">
                        Social Media
                      </Badge>
                      <Badge variant="secondary" className="text-xs">
                        Content Creation
                      </Badge>
                    </div>
                  </div>
                  <Button className="bg-[#7E22CE] hover:bg-[#6b1fa3] text-white">
                    Apply Now
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="text-xl font-bold text-[#222]">
                        Customer Success Specialist
                      </h3>
                      <Badge className="bg-green-100 text-green-700">
                        Full-Time
                      </Badge>
                      <Badge
                        variant="outline"
                        className="text-[#7E22CE] border-[#7E22CE]"
                      >
                        Mumbai
                      </Badge>
                    </div>
                    <p className="text-[#666] mb-4">
                      Help our customers find the perfect nutrition solutions
                      for their pets. Strong communication skills and pet
                      knowledge preferred.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="text-xs">
                        Customer Service
                      </Badge>
                      <Badge variant="secondary" className="text-xs">
                        Pet Knowledge
                      </Badge>
                      <Badge variant="secondary" className="text-xs">
                        Communication
                      </Badge>
                    </div>
                  </div>
                  <Button className="bg-[#7E22CE] hover:bg-[#6b1fa3] text-white">
                    Apply Now
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="text-xl font-bold text-[#222]">
                        Supply Chain Coordinator
                      </h3>
                      <Badge className="bg-green-100 text-green-700">
                        Full-Time
                      </Badge>
                      <Badge
                        variant="outline"
                        className="text-[#7E22CE] border-[#7E22CE]"
                      >
                        Hybrid
                      </Badge>
                    </div>
                    <p className="text-[#666] mb-4">
                      Manage relationships with suppliers and ensure smooth
                      product flow. Experience in logistics and supply chain
                      management required.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="text-xs">
                        Supply Chain
                      </Badge>
                      <Badge variant="secondary" className="text-xs">
                        Logistics
                      </Badge>
                      <Badge variant="secondary" className="text-xs">
                        Vendor Management
                      </Badge>
                    </div>
                  </div>
                  <Button className="bg-[#7E22CE] hover:bg-[#6b1fa3] text-white">
                    Apply Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Partnership Opportunities */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-[#222] text-center mb-12">
            Partnership Opportunities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl text-[#222] text-center">
                  Brand Partners
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-4xl mb-4">🤝</div>
                <p className="text-[#666] mb-6">
                  Pet food manufacturers looking to expand their reach through
                  our platform.
                </p>
                <Button
                  variant="outline"
                  className="border-[#7E22CE] text-[#7E22CE] hover:bg-[#7E22CE] hover:text-white"
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>

            <Card className="shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl text-[#222] text-center">
                  Distributors
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-4xl mb-4">🚚</div>
                <p className="text-[#666] mb-6">
                  Local distributors interested in carrying our curated
                  selection of pet foods.
                </p>
                <Button
                  variant="outline"
                  className="border-[#7E22CE] text-[#7E22CE] hover:bg-[#7E22CE] hover:text-white"
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>

            <Card className="shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl text-[#222] text-center">
                  Veterinarians
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-4xl mb-4">🏥</div>
                <p className="text-[#666] mb-6">
                  Veterinary clinics interested in recommending quality
                  nutrition to pet parents.
                </p>
                <Button
                  variant="outline"
                  className="border-[#7E22CE] text-[#7E22CE] hover:bg-[#7E22CE] hover:text-white"
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Application Form */}
        <section>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* General Application */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-[#222]">
                  General Application
                </CardTitle>
                <p className="text-[#666]">
                  Don't see a position that fits? Send us your resume and we'll
                  keep you in mind for future opportunities.
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-[#222] mb-2"
                    >
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Your full name"
                      className="border-[#7E22CE] focus:ring-[#7E22CE]"
                      required
                    />
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
                    htmlFor="position"
                    className="block text-sm font-medium text-[#222] mb-2"
                  >
                    Position of Interest
                  </label>
                  <Input
                    id="position"
                    type="text"
                    placeholder="e.g. Marketing, Customer Service, etc."
                    className="border-[#7E22CE] focus:ring-[#7E22CE]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="experience"
                    className="block text-sm font-medium text-[#222] mb-2"
                  >
                    Brief Experience Summary *
                  </label>
                  <Textarea
                    id="experience"
                    placeholder="Tell us about your relevant experience..."
                    rows={4}
                    className="border-[#7E22CE] focus:ring-[#7E22CE]"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="resume"
                    className="block text-sm font-medium text-[#222] mb-2"
                  >
                    Resume/CV
                  </label>
                  <div className="border-2 border-dashed border-[#7E22CE] rounded-lg p-6 text-center hover:bg-purple-50 transition-colors cursor-pointer">
                    <Upload className="w-8 h-8 text-[#7E22CE] mx-auto mb-2" />
                    <p className="text-[#666] text-sm">
                      Click to upload or drag and drop
                    </p>
                    <p className="text-[#666] text-xs mt-1">
                      PDF, DOC, DOCX up to 5MB
                    </p>
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-[#7E22CE] hover:bg-[#6b1fa3] text-white py-3 text-lg font-semibold"
                >
                  Submit Application
                </Button>
              </CardContent>
            </Card>

            {/* Partnership Inquiry */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-[#222]">
                  Partnership Inquiry
                </CardTitle>
                <p className="text-[#666]">
                  Interested in partnering with Petty? Let's discuss how we can
                  work together.
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <label
                    htmlFor="companyName"
                    className="block text-sm font-medium text-[#222] mb-2"
                  >
                    Company Name *
                  </label>
                  <Input
                    id="companyName"
                    type="text"
                    placeholder="Your company name"
                    className="border-[#7E22CE] focus:ring-[#7E22CE]"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="contactName"
                      className="block text-sm font-medium text-[#222] mb-2"
                    >
                      Contact Name *
                    </label>
                    <Input
                      id="contactName"
                      type="text"
                      placeholder="Your full name"
                      className="border-[#7E22CE] focus:ring-[#7E22CE]"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contactEmail"
                      className="block text-sm font-medium text-[#222] mb-2"
                    >
                      Email Address *
                    </label>
                    <Input
                      id="contactEmail"
                      type="email"
                      placeholder="your.email@company.com"
                      className="border-[#7E22CE] focus:ring-[#7E22CE]"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="partnershipType"
                    className="block text-sm font-medium text-[#222] mb-2"
                  >
                    Partnership Type *
                  </label>
                  <Input
                    id="partnershipType"
                    type="text"
                    placeholder="e.g. Brand Partner, Distributor, Vendor"
                    className="border-[#7E22CE] focus:ring-[#7E22CE]"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="proposal"
                    className="block text-sm font-medium text-[#222] mb-2"
                  >
                    Partnership Proposal *
                  </label>
                  <Textarea
                    id="proposal"
                    placeholder="Describe your partnership proposal and how we can work together..."
                    rows={6}
                    className="border-[#7E22CE] focus:ring-[#7E22CE]"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-[#7E22CE] hover:bg-[#6b1fa3] text-white py-3 text-lg font-semibold"
                >
                  Submit Inquiry
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
}
