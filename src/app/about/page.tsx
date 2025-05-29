import React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Bot, Brain, MessageCircle, Search, Zap, Shield } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#f0f4ff]">
      {/* Hero Section */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center max-w-4xl mx-auto">            <h1 className="text-5xl font-bold text-[#222] mb-6">About Petty</h1>
            <p className="text-xl text-[#666] leading-relaxed mb-4">
              We believe every pet deserves the best nutrition at an affordable
              price. Petty is the first AI-powered pet food platform that combines 
              premium quality products with intelligent assistance.
            </p>
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-100 to-purple-200 px-6 py-3 rounded-full">
              <Bot className="w-5 h-5 text-purple-600" />
              <span className="text-purple-700 font-semibold">Powered by Artificial Intelligence</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Mission Section */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-[#222] mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-[#666] mb-6 leading-relaxed">
                When it comes to buying food for your pets, it's always a
                difficult choice to find products with high quality at a
                reasonable price. That's where Petty comes in.
              </p>              <p className="text-lg text-[#666] leading-relaxed">
                We've made it our mission to bridge this gap by offering premium
                pet foods from trusted brands at prices that don't break the
                bank. Every product we offer is carefully selected for its
                nutritional value and quality ingredients.
              </p>
              <div className="mt-8 p-6 bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl border border-purple-100">
                <h4 className="text-lg font-bold text-purple-700 mb-3 flex items-center gap-2">
                  <Bot className="w-5 h-5" />
                  Enhanced with AI Technology
                </h4>
                <p className="text-[#666] leading-relaxed">
                  What sets Petty apart is our revolutionary AI assistant that provides 
                  personalized pet care advice, intelligent product recommendations, and 
                  24/7 expert guidance to help you make the best decisions for your pet's health and happiness.
                </p>
              </div>
            </div>
            <div className="bg-[#d7b3ff] rounded-[30px] p-8 text-center">
              <div className="text-6xl mb-4">🐕🐱</div>
              <h3 className="text-2xl font-bold text-[#7E22CE] mb-4">
                Happy Pets, Happy Families
              </h3>
              <p className="text-[#666]">
                Over 10,000+ satisfied pet owners trust Petty for their pet's
                nutrition needs.
              </p>
            </div>
          </div>        </section>

        {/* Petty AI Section */}
        {/* <section className="mb-16">
          <div className="bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800 rounded-[30px] p-8 md:p-12 text-white">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-3 bg-white/20 px-6 py-3 rounded-full mb-6">
                <Bot className="w-6 h-6 text-white" />
                <span className="text-white font-semibold">Meet Petty AI</span>
              </div>
              <h2 className="text-4xl font-bold mb-6">Revolutionizing Pet Care with AI</h2>
              <p className="text-xl text-purple-100 max-w-3xl mx-auto leading-relaxed">
                Petty AI is more than just a chatbot - it's your intelligent pet care companion, 
                designed to provide expert guidance and personalized recommendations for your furry friends.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              <Card className="bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Brain className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Intelligent Analysis</h3>
                  <p className="text-purple-100 text-sm leading-relaxed">
                    Advanced AI algorithms analyze your pet's needs and provide tailored nutrition advice 
                    based on breed, age, health conditions, and dietary preferences.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Search className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Smart Discovery</h3>
                  <p className="text-purple-100 text-sm leading-relaxed">
                    Find the perfect products instantly with AI-powered search and comparison features 
                    that understand ingredient benefits and nutritional values.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <MessageCircle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">24/7 Support</h3>
                  <p className="text-purple-100 text-sm leading-relaxed">
                    Get instant answers to your pet care questions any time of day. 
                    From feeding schedules to health concerns, Petty AI is always ready to help.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-6">How Petty AI Helps You</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                      <Zap className="w-4 h-4 text-yellow-300" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Instant Nutrition Guidance</h4>
                      <p className="text-purple-100 text-sm">Get immediate advice on feeding schedules, portion sizes, and dietary requirements.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                      <Shield className="w-4 h-4 text-green-300" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Health & Wellness Tips</h4>
                      <p className="text-purple-100 text-sm">Receive expert advice on maintaining your pet's health and preventing common issues.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                      <Search className="w-4 h-4 text-blue-300" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Product Recommendations</h4>
                      <p className="text-purple-100 text-sm">Discover products perfectly suited to your pet's specific needs and preferences.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <div className="relative">
                  <div className="w-64 h-64 mx-auto bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20">
                    <Bot className="w-24 h-24 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center animate-bounce">
                    <span className="text-2xl">🧠</span>
                  </div>
                  <div className="absolute -bottom-2 -left-2 w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center animate-pulse">
                    <span className="text-xl">💡</span>
                  </div>
                </div>
                
                <h4 className="text-xl font-bold mt-6 mb-2">Always Learning, Always Improving</h4>
                <p className="text-purple-100 text-sm">
                  Our AI continuously learns from the latest veterinary research and user feedback 
                  to provide you with the most accurate and up-to-date pet care information.
                </p>
              </div>
            </div>
          </div>
        </section> */}

        {/* Values Section */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-[#222] text-center mb-12">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="text-4xl mb-4">🏆</div>
                <h3 className="text-xl font-bold text-[#222] mb-4">
                  Quality First
                </h3>
                <p className="text-[#666]">
                  We source only the finest ingredients and partner with
                  reputable brands to ensure your pets get the nutrition they
                  deserve.
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="text-4xl mb-4">💰</div>
                <h3 className="text-xl font-bold text-[#222] mb-4">
                  Affordable Pricing
                </h3>
                <p className="text-[#666]">
                  High-quality pet food shouldn't be a luxury. We work hard to
                  keep our prices competitive while maintaining superior
                  quality.
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="text-4xl mb-4">❤️</div>
                <h3 className="text-xl font-bold text-[#222] mb-4">Pet Love</h3>
                <p className="text-[#666]">
                  Every decision we make is driven by our love for pets and our
                  commitment to their health and happiness.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Story Section */}
        <section className="mb-16">
          <div className="bg-white rounded-[30px] p-8 md:p-12 shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-[#222] mb-6">
                  Our Story
                </h2>
                <p className="text-lg text-[#666] mb-6 leading-relaxed">
                  Petty was born from a simple observation: pet parents wanted
                  the best for their furry friends but often had to choose
                  between quality and affordability.
                </p>
                <p className="text-lg text-[#666] mb-6 leading-relaxed">
                  Founded by passionate pet lovers, we started with a vision to
                  eliminate this compromise. Through careful partnerships with
                  manufacturers and smart supply chain management, we've made
                  premium pet nutrition accessible to everyone.
                </p>
                <p className="text-lg text-[#666] leading-relaxed">
                  Today, thousands of pets across the country enjoy healthier,
                  happier lives thanks to Petty's commitment to quality and
                  affordability.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="art-box">
                  <Image
                    src="https://www.wiggles.in/cdn/shop/products/2RightNutritioncopy-100.jpg?v=1706864496&width=1445"
                    alt="Premium pet food"
                    width={250}
                    height={250}
                    className="w-full h-full object-cover rounded-[20px]"
                  />
                </div>
                <div className="art-box">
                  <Image
                    src="https://petsnpets.com/cdn/shop/files/MiowMiowAdultTunaFishCatFood1.2kg.png?v=1716185686&width=1000"
                    alt="Cat food nutrition"
                    width={250}
                    height={250}
                    className="w-full h-full object-cover rounded-[20px]"
                  />
                </div>
                <div className="art-box">
                  <Image
                    src="https://m.media-amazon.com/images/I/81vGiZuZbhL._AC_UF1000,1000_QL80_.jpg"
                    alt="Dog food quality"
                    width={250}
                    height={250}
                    className="w-full h-full object-cover rounded-[20px]"
                  />
                </div>
                <div className="art-box">
                  <Image
                    src="https://5.imimg.com/data5/ECOM/Default/2024/1/378810208/RF/HJ/GK/12142841/71krmfpgpjl-sx679.jpg"
                    alt="Pet nutrition"
                    width={250}
                    height={250}
                    className="w-full h-full object-cover rounded-[20px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section>
          <h2 className="text-4xl font-bold text-[#222] text-center mb-12">
            Why Choose Petty?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-[#d7b3ff] rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📦</span>
              </div>
              <h3 className="font-bold text-[#222] mb-2">Fast Delivery</h3>
              <p className="text-[#666] text-sm">
                Quick and reliable delivery to your doorstep
              </p>
            </div>
            <div className="text-center">
              <div className="bg-[#d7b3ff] rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔒</span>
              </div>
              <h3 className="font-bold text-[#222] mb-2">Secure Shopping</h3>
              <p className="text-[#666] text-sm">
                Safe and secure payment processing
              </p>
            </div>
            <div className="text-center">
              <div className="bg-[#d7b3ff] rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💯</span>
              </div>
              <h3 className="font-bold text-[#222] mb-2">Quality Guaranteed</h3>
              <p className="text-[#666] text-sm">
                100% satisfaction guarantee on all products
              </p>
            </div>
            <div className="text-center">
              <div className="bg-[#d7b3ff] rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💬</span>
              </div>
              <h3 className="font-bold text-[#222] mb-2">Expert Support</h3>
              <p className="text-[#666] text-sm">
                Friendly customer service team ready to help
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
