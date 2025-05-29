import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, Linkedin, Twitter, MessageCircle, ExternalLink } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#f0f4ff]">
      {/* Hero Section */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold text-[#222] mb-6">About the Creator</h1>
            <p className="text-xl text-[#666] leading-relaxed">
              Meet the passionate developer behind Petty - your trusted pet food companion
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* About Section */}
          <div>
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-3xl text-[#222] mb-4">
                  Hey there! I'm Kethan VR 👋
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-[#666] space-y-4 leading-relaxed">
                  <p>
                    I'm a passionate engineering student at <strong>CMRIT, Bangalore</strong>, deeply immersed 
                    in the world of web development and tech innovation. From building clean, mobile-first 
                    web apps to experimenting with AI integrations, I love crafting meaningful digital experiences.
                  </p>
                  
                  <p>
                    I'm also a <strong>social media influencer and content creator</strong>, sharing knowledge, 
                    project breakdowns, dev tips, and sometimes just vibing with the community. I'm all about 
                    learning in public and helping others grow along the way.
                  </p>
                  
                  <p>
                    With a solid foundation in <strong>JavaScript, React, Node.js, and Tailwind CSS</strong> – 
                    plus a growing curiosity for AI and machine learning – I'm always pushing the boundaries 
                    of what I can build. Whether it's a health-tech solution like MediScan or a creative tool 
                    like InstaScan, my goal is to solve real problems in smart ways.
                  </p>
                  
                  <p className="text-[#7E22CE] font-semibold">
                    If you're into code, design, startups, or just want to connect with a fellow tech geek – hit me up!
                  </p>
                </div>

                <div className="pt-6 border-t">
                  <h3 className="text-xl font-bold text-[#222] mb-4">Why I Created Petty</h3>
                  <p className="text-[#666] leading-relaxed">
                    As a pet lover and tech enthusiast, I noticed how challenging it can be for pet owners 
                    to find the right nutrition for their furry friends. Petty was born from the idea of 
                    combining my passion for web development with the mission to make pet care easier and 
                    more accessible for everyone. This platform represents my commitment to solving real-world 
                    problems through innovative technology.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Connect Section */}
          <div className="space-y-8">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-[#222]">
                  Connect With Me 🚀
                </CardTitle>
                <p className="text-[#666]">
                  Let's build something awesome together! Find me on these platforms:
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4">
                  {/* GitHub */}
                  <a 
                    href="https://github.com/Kethanvr" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-[#f8f9ff] rounded-lg hover:bg-[#e6eaff] transition-colors group"
                  >
                    <div className="bg-[#24292e] rounded-full p-3">
                      <Github className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-[#222]">GitHub</h4>
                      <p className="text-sm text-[#666]">Check out my projects and code</p>
                    </div>
                    <ExternalLink className="w-5 h-5 text-[#666] group-hover:text-[#7E22CE]" />
                  </a>

                  {/* LinkedIn */}
                  <a 
                    href="https://www.linkedin.com/in/kethan-vr-433ab532b/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-[#f8f9ff] rounded-lg hover:bg-[#e6eaff] transition-colors group"
                  >
                    <div className="bg-[#0077b5] rounded-full p-3">
                      <Linkedin className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-[#222]">LinkedIn</h4>
                      <p className="text-sm text-[#666]">Professional networking</p>
                    </div>
                    <ExternalLink className="w-5 h-5 text-[#666] group-hover:text-[#7E22CE]" />
                  </a>

                  {/* Twitter/X */}
                  <a 
                    href="https://x.com/VrKethan" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-[#f8f9ff] rounded-lg hover:bg-[#e6eaff] transition-colors group"
                  >
                    <div className="bg-[#1da1f2] rounded-full p-3">
                      <Twitter className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-[#222]">X (Twitter)</h4>
                      <p className="text-sm text-[#666]">Daily thoughts and tech updates</p>
                    </div>
                    <ExternalLink className="w-5 h-5 text-[#666] group-hover:text-[#7E22CE]" />
                  </a>

                  {/* YouTube */}
                  {/* <a 
                    href="https://www.youtube.com/@kethanvr" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-[#f8f9ff] rounded-lg hover:bg-[#e6eaff] transition-colors group"
                  >
                    <div className="bg-[#ff0000] rounded-full p-3">
                      <Youtube className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-[#222]">YouTube</h4>
                      <p className="text-sm text-[#666]">Tutorials and project walkthroughs</p>
                    </div>
                    <ExternalLink className="w-5 h-5 text-[#666] group-hover:text-[#7E22CE]" />
                  </a> */}

                  {/* Threads */}
                  <a 
                    href="https://www.threads.net/@kethan_vr_" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-[#f8f9ff] rounded-lg hover:bg-[#e6eaff] transition-colors group"
                  >
                    <div className="bg-[#1a1a1a] rounded-full p-3">
                      <MessageCircle className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-[#222]">Threads</h4>
                      <p className="text-sm text-[#666]">Creative content and discussions</p>
                    </div>
                    <ExternalLink className="w-5 h-5 text-[#666] group-hover:text-[#7E22CE]" />
                  </a>

                  {/* Discord */}
                  {/* <a 
                    href="https://discord.gg/PcbfmP6j" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-[#f8f9ff] rounded-lg hover:bg-[#e6eaff] transition-colors group"
                  >
                    <div className="bg-[#5865f2] rounded-full p-3">
                      <MessageCircle className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-[#222]">Discord</h4>
                      <p className="text-sm text-[#666]">Join our dev community</p>
                    </div>
                    <ExternalLink className="w-5 h-5 text-[#666] group-hover:text-[#7E22CE]" />
                  </a> */}
                </div>
              </CardContent>
            </Card>

            {/* Tech Stack
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl text-[#222]">
                  Tech Stack & Skills
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {[
                    'JavaScript', 'React', 'Node.js', 'TypeScript', 'Next.js',
                    'Tailwind CSS', 'MongoDB', 'PostgreSQL', 'AI/ML', 'Web3'
                  ].map((tech) => (
                    <div key={tech} className="bg-[#7E22CE] text-white px-3 py-2 rounded-lg text-sm text-center font-medium">
                      {tech}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card> */}

            {/* Call to Action */}
            <Card className="shadow-lg bg-gradient-to-r from-[#7E22CE] to-[#9333ea] text-white">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Let's Collaborate!</h3>
                <p className="mb-6 opacity-90">
                  Have an exciting project idea or want to collaborate on something amazing? 
                  I'm always open to new opportunities and creative partnerships.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    variant="secondary" 
                    className="bg-white text-[#7E22CE] hover:bg-gray-100"
                    asChild
                  >
                    <a href="mailto:kethanvr@outlook.com">
                      Email Me
                    </a>
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-white text-white hover:bg-white hover:text-[#7E22CE]"
                    asChild
                  >
                    <a href="https://github.com/Kethanvr" target="_blank" rel="noopener noreferrer">
                      View My Work
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Education & Experience */}
        <section className="mt-16">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-[#222] text-center">
                Education & Journey
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="bg-[#d7b3ff] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🎓</span>
                  </div>
                  <h3 className="font-bold text-[#222] mb-2">Education</h3>
                  <p className="text-[#666]">
                    Engineering Student at<br />
                    <strong>CMRIT, Bangalore</strong><br />
                    Specializing in Technology & Innovation
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-[#d7b3ff] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">💡</span>
                  </div>
                  <h3 className="font-bold text-[#222] mb-2">Philosophy</h3>
                  <p className="text-[#666]">
                    Learning in public, building in the open,<br />
                    and helping others grow along the way.<br />
                    <strong>Code. Create. Connect.</strong>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
