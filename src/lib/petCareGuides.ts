export interface PetCareGuide {
  id: string;
  title: string;
  description: string;
  category:
    | "nutrition"
    | "health"
    | "training"
    | "grooming"
    | "behavior"
    | "exercise"
    | "safety";
  petType: "Dog" | "Cat" | "Small Pet" | "Fish" | "Bird" | "All";
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  duration: string;
  videoId: string; // YouTube video ID
  thumbnail: string;
  tags: string[];  authorName: string;
  authorTitle: string;
  publishedAt: string;
  views: number;
  likes: number;
  keyPoints: string[];
  relatedTopics: string[];
  featured?: boolean;
  trending?: boolean;
}

export const petCareGuides: PetCareGuide[] = [

  {
    id: "dog-nutrition-basics",
    title: "Complete Dog Nutrition Guide: What Every Pet Owner Should Know",
    description:
      "Learn the fundamentals of dog nutrition, including proper feeding schedules, portion sizes, and how to choose the right food for your dog's age and breed.",
    category: "nutrition",
    petType: "Dog",
    difficulty: "Beginner",    duration: "12:45",
    videoId: "mG_bDY4cK48",
    thumbnail: "https://img.youtube.com/vi/mG_bDY4cK48/maxresdefault.jpg",
    tags: ["nutrition", "feeding", "dog food", "health", "diet"],
    authorName: "Dr. Sarah Johnson",
    authorTitle: "Veterinary Nutritionist",
    publishedAt: "2024-01-15",
    views: 45230,
    likes: 1870,
    keyPoints: [
      "Understanding your dog's nutritional needs by age",
      "How to read pet food labels",
      "Proper portion control and feeding schedules",
      "Common nutritional mistakes to avoid",
      "Supplements: when they're needed",
    ],
    relatedTopics: ["weight management", "puppy feeding", "senior dog care"],
    featured: true,
  },
  {
    id: "cat-grooming-essentials",
    title: "Cat Grooming at Home: Professional Tips for Beginners",
    description:
      "Master the art of grooming your cat at home with step-by-step instructions for brushing, nail trimming, and maintaining your cat's hygiene.",
    category: "grooming",
    petType: "Cat",
    difficulty: "Intermediate",    duration: "15:20",
    videoId: "OAyM7f2FM2c",
    thumbnail: "https://img.youtube.com/vi/OAyM7f2FM2c/maxresdefault.jpg",
    tags: ["grooming", "brushing", "nail care", "hygiene", "cat care"],
    authorName: "Lisa Chen",
    authorTitle: "Professional Pet Groomer",
    publishedAt: "2024-01-20",
    views: 32100,
    likes: 1420,
    keyPoints: [
      "Choosing the right grooming tools",
      "Step-by-step brushing techniques",
      "Safe nail trimming methods",
      "Dealing with matted fur",
      "Creating a positive grooming experience",
    ],
    relatedTopics: ["cat behavior", "stress reduction", "tool selection"],
    trending: true,
  },
  {
    id: "puppy-training-basics",
    title: "Puppy Training 101: Essential Commands Every Dog Should Know",
    description:
      "Start your puppy's training journey right with this comprehensive guide covering house training, basic commands, and socialization.",
    category: "training",
    petType: "Dog",
    difficulty: "Beginner",    duration: "18:30",
    videoId: "4dbzPoB7AKE",
    thumbnail: "https://img.youtube.com/vi/4dbzPoB7AKE/maxresdefault.jpg",
    tags: [
      "puppy training",
      "commands",
      "house training",
      "socialization",
      "obedience",
    ],
    authorName: "Mark Rodriguez",
    authorTitle: "Certified Dog Trainer",
    publishedAt: "2024-01-25",
    views: 67800,
    likes: 2340,
    keyPoints: [
      "House training fundamentals",
      "Teaching basic commands (sit, stay, come)",
      "Proper socialization techniques",
      "Dealing with common behavioral issues",
      "Positive reinforcement methods",
    ],
    relatedTopics: [
      "behavior modification",
      "advanced training",
      "problem solving",
    ],
    featured: true,
  },
  {
    id: "fish-tank-setup",
    title: "Setting Up Your First Aquarium: Complete Beginner's Guide",
    description:
      "Everything you need to know about setting up and maintaining a healthy aquarium environment for your fish.",
    category: "health",
    petType: "Fish",
    difficulty: "Beginner",    duration: "22:15",
    videoId: "Ub3d2mtEjY8",
    thumbnail: "https://img.youtube.com/vi/Ub3d2mtEjY8/maxresdefault.jpg",
    tags: ["aquarium", "fish care", "water quality", "setup", "maintenance"],
    authorName: "Aquarium Expert Team",
    authorTitle: "Marine Biologist",
    publishedAt: "2024-02-01",
    views: 28900,
    likes: 980,
    keyPoints: [
      "Choosing the right tank size",
      "Setting up filtration systems",
      "Understanding water chemistry",
      "Fish selection and compatibility",
      "Regular maintenance schedules",
    ],
    relatedTopics: ["water testing", "fish diseases", "aquascaping"],
  },
  {
    id: "small-pet-housing",
    title: "Creating the Perfect Home for Your Small Pet",
    description:
      "Learn how to set up comfortable and enriching habitats for hamsters, guinea pigs, rabbits, and other small pets.",
    category: "health",
    petType: "Small Pet",
    difficulty: "Intermediate",    duration: "16:40",
    videoId: "rN6p6KcmY2Y",
    thumbnail: "https://img.youtube.com/vi/rN6p6KcmY2Y/maxresdefault.jpg",
    tags: ["small pets", "housing", "enrichment", "habitat", "welfare"],
    authorName: "Dr. Emily Watson",
    authorTitle: "Exotic Animal Veterinarian",
    publishedAt: "2024-02-05",
    views: 19500,
    likes: 765,
    keyPoints: [
      "Cage size requirements for different species",
      "Essential enrichment items",
      "Proper bedding and substrate choices",
      "Temperature and humidity control",
      "Creating hiding spots and play areas",
    ],
    relatedTopics: [
      "small pet nutrition",
      "health monitoring",
      "exercise needs",
    ],
  },
  {
    id: "pet-first-aid",
    title: "Pet First Aid: Emergency Care Every Owner Should Know",
    description:
      "Essential first aid techniques that could save your pet's life in emergency situations.",
    category: "safety",
    petType: "All",
    difficulty: "Advanced",    duration: "25:10",
    videoId: "1nGNO9QeMfE",
    thumbnail: "https://img.youtube.com/vi/1nGNO9QeMfE/maxresdefault.jpg",
    tags: ["first aid", "emergency", "safety", "health", "critical care"],
    authorName: "Dr. Michael Adams",
    authorTitle: "Emergency Veterinarian",
    publishedAt: "2024-02-10",
    views: 54200,
    likes: 2100,
    keyPoints: [
      "Recognizing emergency situations",
      "Basic life support techniques",
      "Wound care and bleeding control",
      "Choking and breathing emergencies",
      "When to rush to the vet vs. first aid",
    ],
    relatedTopics: [
      "emergency preparedness",
      "vet clinic locations",
      "pet insurance",
    ],
    featured: true,
    trending: true,
  },
  {
    id: "cat-behavior-understanding",
    title: "Understanding Your Cat's Behavior and Body Language",
    description:
      "Decode your cat's mysterious behaviors and learn what they're really trying to tell you.",
    category: "behavior",
    petType: "Cat",
    difficulty: "Intermediate",    duration: "14:25",
    videoId: "Si-yk1KxYX0",
    thumbnail: "https://img.youtube.com/vi/Si-yk1KxYX0/maxresdefault.jpg",
    tags: [
      "cat behavior",
      "body language",
      "communication",
      "psychology",
      "bonding",
    ],
    authorName: "Dr. Jennifer Lee",
    authorTitle: "Animal Behaviorist",
    publishedAt: "2024-02-12",
    views: 41300,
    likes: 1650,
    keyPoints: [
      "Understanding tail positions and movements",
      "Decoding vocalizations and purring",
      "Reading facial expressions and ear positions",
      "Recognizing stress and anxiety signs",
      "Building stronger bonds with your cat",
    ],
    relatedTopics: [
      "stress management",
      "environmental enrichment",
      "cat psychology",
    ],
  },
  {
    id: "dog-exercise-needs",
    title: "Meeting Your Dog's Exercise Needs: A Complete Activity Guide",
    description:
      "Discover fun and effective ways to keep your dog physically and mentally stimulated with appropriate exercise routines.",
    category: "exercise",
    petType: "Dog",
    difficulty: "Beginner",    duration: "19:50",
    videoId: "cWhqcm8lAsw",
    thumbnail: "https://img.youtube.com/vi/cWhqcm8lAsw/maxresdefault.jpg",
    tags: ["exercise", "activities", "mental stimulation", "fitness", "play"],
    authorName: "Carlos Martinez",
    authorTitle: "Canine Fitness Specialist",
    publishedAt: "2024-02-15",
    views: 36700,
    likes: 1340,
    keyPoints: [
      "Exercise needs by breed and age",
      "Indoor vs. outdoor activity options",
      "Mental stimulation games and puzzles",
      "Signs of over-exercise and fatigue",
      "Seasonal exercise considerations",
    ],
    relatedTopics: ["weight management", "senior dog care", "puppy exercise"],
    trending: true,
  },


];

export const getCareGuideById = (id: string): PetCareGuide | undefined => {
  return petCareGuides.find((guide) => guide.id === id);
};

export const getCareGuidesByCategory = (category: string): PetCareGuide[] => {
  return petCareGuides.filter((guide) => guide.category === category);
};

export const getCareGuidesByPetType = (petType: string): PetCareGuide[] => {
  return petCareGuides.filter(
    (guide) => guide.petType === petType || guide.petType === "All"
  );
};

export const getFeaturedGuides = (): PetCareGuide[] => {
  return petCareGuides.filter((guide) => guide.featured);
};

export const getTrendingGuides = (): PetCareGuide[] => {
  return petCareGuides.filter((guide) => guide.trending);
};

export const searchCareGuides = (searchTerm: string): PetCareGuide[] => {
  const term = searchTerm.toLowerCase();
  return petCareGuides.filter(
    (guide) =>
      guide.title.toLowerCase().includes(term) ||
      guide.description.toLowerCase().includes(term) ||
      guide.tags.some((tag) => tag.toLowerCase().includes(term)) ||
      guide.keyPoints.some((point) => point.toLowerCase().includes(term))
  );
};

export const getCareGuideCategories = () => {
  return [
    {
      id: "nutrition",
      name: "Nutrition & Diet",
      icon: "🍖",
      color: "bg-green-100 text-green-600",
    },
    {
      id: "health",
      name: "Health & Wellness",
      icon: "🏥",
      color: "bg-blue-100 text-blue-600",
    },
    {
      id: "training",
      name: "Training & Behavior",
      icon: "🎯",
      color: "bg-purple-100 text-purple-600",
    },
    {
      id: "grooming",
      name: "Grooming & Hygiene",
      icon: "✂️",
      color: "bg-pink-100 text-pink-600",
    },
    {
      id: "exercise",
      name: "Exercise & Activity",
      icon: "🏃",
      color: "bg-orange-100 text-orange-600",
    },
    {
      id: "safety",
      name: "Safety & Emergency",
      icon: "🚨",
      color: "bg-red-100 text-red-600",
    },
    {
      id: "behavior",
      name: "Behavior & Psychology",
      icon: "🧠",
      color: "bg-indigo-100 text-indigo-600",
    },
  ];
};

export const getYouTubeEmbedUrl = (videoId: string): string => {
  return `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`;
};
