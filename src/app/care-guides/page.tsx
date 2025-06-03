"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Play,
  Search,
  Filter,
  Clock,
  Eye,
  ThumbsUp,
  Star,
  BookOpen,
  TrendingUp,
} from "lucide-react";
import {
  petCareGuides,
  getCareGuideCategories,
  getFeaturedGuides,
  getTrendingGuides,
  searchCareGuides,
  getCareGuidesByCategory,
  getCareGuidesByPetType,
  getYouTubeEmbedUrl,
  type PetCareGuide,
} from "@/lib/petCareGuides";

export default function CareGuidesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedPetType, setSelectedPetType] = useState<string>("all");
  const [selectedVideo, setSelectedVideo] = useState<PetCareGuide | null>(null);

  const categories = getCareGuideCategories();
  const featuredGuides = getFeaturedGuides();
  const trendingGuides = getTrendingGuides();

  const petTypes = ["All", "Dog", "Cat", "Small Pet", "Fish", "Bird"];

  const getFilteredGuides = () => {
    let filtered = petCareGuides;

    if (searchTerm) {
      filtered = searchCareGuides(searchTerm);
    }

    if (selectedCategory !== "all") {
      filtered = filtered.filter(
        (guide) => guide.category === selectedCategory
      );
    }

    if (selectedPetType !== "all") {
      filtered = filtered.filter(
        (guide) => guide.petType === selectedPetType || guide.petType === "All"
      );
    }

    return filtered;
  };

  const filteredGuides = getFilteredGuides();

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner":
        return "bg-green-100 text-green-600";
      case "Intermediate":
        return "bg-yellow-100 text-yellow-600";
      case "Advanced":
        return "bg-red-100 text-red-600";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  const formatViews = (views: number) => {
    if (views >= 1000) {
      return `${(views / 1000).toFixed(1)}K`;
    }
    return views.toString();
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
            <span className="text-gray-900">Pet Care Guides</span>
          </nav>
        </div>
      </div>      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#7E22CE] to-[#9333EA] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <BookOpen className="w-16 h-16 mx-auto mb-6 text-white/90" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Complete Pet Care Guide Collection
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Your one-stop destination for expert pet care knowledge! Watch educational videos, follow step-by-step guides, and learn from veterinarians and professional trainers. Everything you need to keep your beloved pets happy, healthy, and well-cared for.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm max-w-3xl mx-auto mb-8">
              <div className="flex items-center gap-2 bg-white/10 rounded-lg px-3 py-2">
                <Play className="w-4 h-4" />
                <span>Video Tutorials</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 rounded-lg px-3 py-2">
                <Star className="w-4 h-4" />
                <span>Expert Content</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 rounded-lg px-3 py-2">
                <BookOpen className="w-4 h-4" />
                <span>Step-by-Step Guides</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 rounded-lg px-3 py-2">
                <TrendingUp className="w-4 h-4" />
                <span>Latest Tips</span>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 max-w-2xl mx-auto">
              <h3 className="text-lg font-semibold mb-3">📚 What You'll Find Here:</h3>
              <div className="grid md:grid-cols-2 gap-3 text-sm text-left">
                <div className="flex items-start gap-2">
                  <span className="text-green-300">✓</span>
                  <span>Feeding & nutrition guides</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-300">✓</span>
                  <span>Training & behavior tips</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-300">✓</span>
                  <span>Health & wellness videos</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-300">✓</span>
                  <span>Grooming tutorials</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-300">✓</span>
                  <span>Emergency care procedures</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-300">✓</span>
                  <span>Pet product reviews</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-4 border-b flex justify-between items-center">
              <h3 className="text-lg font-semibold">{selectedVideo.title}</h3>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setSelectedVideo(null)}
              >
                ✕ Close
              </Button>
            </div>
            <div className="p-4">
              <div className="aspect-video mb-4">
                <iframe
                  src={getYouTubeEmbedUrl(selectedVideo.videoId)}
                  title={selectedVideo.title}
                  className="w-full h-full rounded-lg"
                  allowFullScreen
                />
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {selectedVideo.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <Eye className="w-4 h-4" />
                    {formatViews(selectedVideo.views)} views
                  </span>
                  <span className="flex items-center gap-1">
                    <ThumbsUp className="w-4 h-4" />
                    {selectedVideo.likes} likes
                  </span>
                </div>
                <p className="text-gray-700">{selectedVideo.description}</p>
                <div>
                  <h4 className="font-semibold mb-2">Key Learning Points:</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    {selectedVideo.keyPoints.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Search and Filters */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Search Bar */}
            <div className="relative mb-6">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search for pet care topics, training tips, health guides..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-3 text-lg border-gray-300 focus:border-[#7E22CE] focus:ring-[#7E22CE]"
              />
            </div>

            {/* Filter Buttons */}
            <div className="space-y-4">
              {/* Categories */}
              <div>
                <h3 className="text-sm font-medium text-gray-700 mb-2">
                  Categories:
                </h3>
                <div className="flex flex-wrap gap-2">
                  <Button
                    variant={selectedCategory === "all" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory("all")}
                    className={
                      selectedCategory === "all"
                        ? "bg-[#7E22CE] hover:bg-[#6b1fa3]"
                        : ""
                    }
                  >
                    All Categories
                  </Button>
                  {categories.map((category) => (
                    <Button
                      key={category.id}
                      variant={
                        selectedCategory === category.id ? "default" : "outline"
                      }
                      size="sm"
                      onClick={() => setSelectedCategory(category.id)}
                      className={`${
                        selectedCategory === category.id
                          ? "bg-[#7E22CE] hover:bg-[#6b1fa3]"
                          : ""
                      }`}
                    >
                      {category.icon} {category.name}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Pet Types */}
              <div>
                <h3 className="text-sm font-medium text-gray-700 mb-2">
                  Pet Types:
                </h3>
                <div className="flex flex-wrap gap-2">
                  {petTypes.map((petType) => (
                    <Button
                      key={petType}
                      variant={
                        selectedPetType === petType.toLowerCase()
                          ? "default"
                          : "outline"
                      }
                      size="sm"
                      onClick={() => setSelectedPetType(petType.toLowerCase())}
                      className={
                        selectedPetType === petType.toLowerCase()
                          ? "bg-[#7E22CE] hover:bg-[#6b1fa3]"
                          : ""
                      }
                    >
                      {petType}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Guides */}
      {!searchTerm &&
        selectedCategory === "all" &&
        selectedPetType === "all" && (
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="flex items-center gap-3 mb-8">
                <Star className="w-6 h-6 text-[#7E22CE]" />
                <h2 className="text-3xl font-bold text-gray-900">
                  Featured Guides
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {featuredGuides.map((guide) => (
                  <Card
                    key={guide.id}
                    className="group hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden"
                  >
                    <div className="relative aspect-video">
                      <Image
                        src={guide.thumbnail}
                        alt={guide.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <Button
                          size="lg"
                          className="bg-[#7E22CE] hover:bg-[#6b1fa3] text-white"
                          onClick={() => setSelectedVideo(guide)}
                        >
                          <Play className="w-5 h-5 mr-2" />
                          Watch Now
                        </Button>
                      </div>
                      <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
                        {guide.duration}
                      </div>
                    </div>

                    <CardContent className="p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge className={getDifficultyColor(guide.difficulty)}>
                          {guide.difficulty}
                        </Badge>
                        <Badge variant="outline">{guide.petType}</Badge>
                      </div>

                      <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                        {guide.title}
                      </h3>

                      <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                        {guide.description}
                      </p>

                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <span>By {guide.authorName}</span>
                        <div className="flex items-center gap-3">
                          <span className="flex items-center gap-1">
                            <Eye className="w-3 h-3" />
                            {formatViews(guide.views)}
                          </span>
                          <span className="flex items-center gap-1">
                            <ThumbsUp className="w-3 h-3" />
                            {guide.likes}
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )}

      {/* Trending Guides */}
      {!searchTerm &&
        selectedCategory === "all" &&
        selectedPetType === "all" && (
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="flex items-center gap-3 mb-8">
                <TrendingUp className="w-6 h-6 text-[#7E22CE]" />
                <h2 className="text-3xl font-bold text-gray-900">
                  Trending Now
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {trendingGuides.map((guide) => (
                  <Card
                    key={guide.id}
                    className="group hover:shadow-lg transition-all duration-300 cursor-pointer"
                  >
                    <div className="flex">
                      <div className="relative w-48 aspect-video flex-shrink-0">
                        <Image
                          src={guide.thumbnail}
                          alt={guide.title}
                          fill
                          className="object-cover rounded-l-lg"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                          <Button
                            size="sm"
                            className="bg-[#7E22CE] hover:bg-[#6b1fa3] text-white"
                            onClick={() => setSelectedVideo(guide)}
                          >
                            <Play className="w-4 h-4" />
                          </Button>
                        </div>
                        <div className="absolute bottom-1 right-1 bg-black bg-opacity-70 text-white text-xs px-1 py-0.5 rounded">
                          {guide.duration}
                        </div>
                      </div>

                      <CardContent className="flex-1 p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge
                            className={getDifficultyColor(guide.difficulty)}
                            variant="outline"
                          >
                            {guide.difficulty}
                          </Badge>
                          <Badge variant="outline">{guide.petType}</Badge>
                        </div>

                        <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                          {guide.title}
                        </h3>

                        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                          {guide.description}
                        </p>

                        <div className="flex items-center justify-between text-xs text-gray-500">
                          <span>By {guide.authorName}</span>
                          <div className="flex items-center gap-3">
                            <span className="flex items-center gap-1">
                              <Eye className="w-3 h-3" />
                              {formatViews(guide.views)}
                            </span>
                            <span className="flex items-center gap-1">
                              <ThumbsUp className="w-3 h-3" />
                              {guide.likes}
                            </span>
                          </div>
                        </div>
                      </CardContent>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )}

      {/* All Guides / Search Results */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            {searchTerm
              ? `Search Results (${filteredGuides.length})`
              : "All Care Guides"}
          </h2>

          {filteredGuides.length === 0 ? (
            <div className="text-center py-12">
              <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">
                No guides found
              </h3>
              <p className="text-gray-500">
                Try adjusting your search or filters
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredGuides.map((guide) => (
                <Card
                  key={guide.id}
                  className="group hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden"
                >
                  <div className="relative aspect-video">
                    <Image
                      src={guide.thumbnail}
                      alt={guide.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <Button
                        size="sm"
                        className="bg-[#7E22CE] hover:bg-[#6b1fa3] text-white"
                        onClick={() => setSelectedVideo(guide)}
                      >
                        <Play className="w-4 h-4 mr-1" />
                        Play
                      </Button>
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
                      {guide.duration}
                    </div>
                    {guide.trending && (
                      <div className="absolute top-2 left-2">
                        <Badge className="bg-red-500 hover:bg-red-500 text-white">
                          Trending
                        </Badge>
                      </div>
                    )}
                  </div>

                  <CardContent className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge
                        className={getDifficultyColor(guide.difficulty)}
                        variant="outline"
                      >
                        {guide.difficulty}
                      </Badge>
                      <Badge variant="outline">{guide.petType}</Badge>
                    </div>

                    <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 text-sm">
                      {guide.title}
                    </h3>

                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>{guide.authorName}</span>
                      <div className="flex items-center gap-2">
                        <span className="flex items-center gap-1">
                          <Eye className="w-3 h-3" />
                          {formatViews(guide.views)}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
