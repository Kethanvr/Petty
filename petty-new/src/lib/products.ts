export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice: number;
  discount: number;
  rating: number;
  description: string;
  images: string[];
  category: string;
  brand: string;
  ageCategories: string[];
  quantities: string[];
  // Enhanced fields for search and filtering
  searchIndex: string; // Combined searchable text
  tags: string[]; // Tags for filtering and search
  petType: string; // Dog, Cat, Fish, Small Pet, Bird, etc.
  nutritionalInfo?: {
    protein?: string;
    fat?: string;
    fiber?: string;
    moisture?: string;
  };
  specialFeatures: string[]; // Grain-free, Organic, High-protein, etc.
  targetLife: string[]; // Puppy, Adult, Senior, All Life Stages
  flavor?: string; // Chicken, Beef, Fish, etc.
  weight: string; // Primary weight/size
  inStock: boolean;
  isNew?: boolean;
  isBestSeller?: boolean;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Pedigree Adult Dry Dog Food, Chicken & Vegetables, upto 1kg Pack",
    price: 260,
    originalPrice: 300,
    discount: 40,
    rating: 4.5,
    description:
      "PEDIGREE® Chicken & Vegetables Adult Dry Dog Food is a wholesome meal, packed with essential nutrients vital to the healthy growth of your pet. The natural goodness of cereals, soybean, carrots, peas & milk blend into a tasty treat for your little one.",
    images: [
      "https://m.media-amazon.com/images/I/61sbRrU9PBL._SX466_.jpg",
      "https://m.media-amazon.com/images/I/71xTccspTGL._SX466_.jpg",
      "https://m.media-amazon.com/images/I/71JleyYLj6L._SX466_.jpg",
      "https://m.media-amazon.com/images/I/81sbNHGclRL._SX466_.jpg",
      "https://m.media-amazon.com/images/I/71l17zmvVzL._SX466_.jpg",
      "https://m.media-amazon.com/images/I/719cU634TeL._SX466_.jpg",
    ],
    category: "Dog Food",
    brand: "Pedigree",
    ageCategories: ["Puppy", "Adult", "Senior"],
    quantities: ["250g", "500g", "750g", "1kg"],
    searchIndex: "pedigree adult dry dog food chicken vegetables wholesome meal essential nutrients cereals soybean carrots peas milk",
    tags: ["dog", "adult", "dry food", "chicken", "vegetables", "nutritious", "balanced"],
    petType: "Dog",
    specialFeatures: ["Essential Nutrients", "Wholesome Meal", "Natural Goodness"],
    targetLife: ["Adult"],
    flavor: "Chicken & Vegetables",
    weight: "1kg",
    inStock: true,
    isBestSeller: true,
  },
  {
    id: 2,
    name: "Hill's Science Diet Adult Optimal Care Chicken Recipe Dry Cat Food, 3.5kg Pack",
    price: 850,
    originalPrice: 950,
    discount: 10,
    rating: 4.6,
    description:
      "Hill's Science Diet Adult Optimal Care Chicken Recipe Dry Cat Food provides high-quality protein to help support lean muscles. Enriched with omega-6 and vitamin E, it nourishes skin and promotes a healthy coat. Made with natural ingredients, this recipe offers balanced nutrition for adult cats.",
    images: [
      "https://m.media-amazon.com/images/I/81WVzsIOzpL._SX466_.jpg",
      "https://m.media-amazon.com/images/I/71SsCKRiv9L._SX466_.jpg",
      "https://m.media-amazon.com/images/I/71pDqgsjF+L._SX466_.jpg",
      "https://m.media-amazon.com/images/I/81bxjwsyPGL._SX466_.jpg",
      "https://m.media-amazon.com/images/I/81TLcYNUNgL._SX466_.jpg",
      "https://m.media-amazon.com/images/I/61EhoHv7Q9L._SX466_.jpg",
    ],
    category: "Cat Food",
    brand: "Hill's Science Diet",
    ageCategories: ["Kitten", "Adult", "Senior"],
    quantities: ["250g", "500g", "750g", "1kg"],
    searchIndex: "hills science diet optimal care chicken recipe cat food high quality protein lean muscles omega vitamin natural ingredients",
    tags: ["cat", "adult", "dry food", "chicken", "high protein", "omega-6", "vitamin E", "natural"],
    petType: "Cat",
    specialFeatures: ["High-Quality Protein", "Omega-6 Enriched", "Vitamin E", "Natural Ingredients"],
    targetLife: ["Adult"],
    flavor: "Chicken",
    weight: "3.5kg",
    inStock: true,
  },
  {
    id: 3,
    name: "Petslife Hamster Premium Food, 1 kg Pack",
    price: 399,
    originalPrice: 450,
    discount: 11,
    rating: 4.2,
    description:
      "Petslife Hamster Premium Food is a high-quality feed designed to support the nutrition and overall health of your pet hamster. It contains a blend of essential grains, seeds, and vitamins to ensure a balanced diet that aids growth, energy, and immune health for hamsters.",
    images: [
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSuB09Z2-Z7v0iBugs1J3FecqiSFmQ-ZllugtRAuolZLgVt_dN3ad4-Mi-GiAb4juKaTrHg64bsAxZix_pDMliUYCp30ziuWR9c1NwEb0UeapsieoRRylZk&usqp=CAE",
      "https://m.media-amazon.com/images/I/71Skptfd6KL._SY679_.jpg",
      "https://m.media-amazon.com/images/I/71u0NWk2PDL._SY879_.jpg",
      "https://m.media-amazon.com/images/I/51ClQt+vynL.jpg",
    ],
    category: "Small Pet Food",
    brand: "Petslife",
    ageCategories: ["Young", "Adult", "Senior"],
    quantities: ["250g", "500g", "750g", "1kg"],
    searchIndex: "petslife hamster premium food high quality nutrition health grains seeds vitamins balanced diet growth energy immune",
    tags: ["hamster", "small pet", "premium", "grains", "seeds", "vitamins", "balanced diet", "immune health"],
    petType: "Small Pet",
    specialFeatures: ["Premium Quality", "Essential Grains", "Vitamins", "Immune Support"],
    targetLife: ["All Life Stages"],
    weight: "1kg",
    inStock: true,
  },
  {
    id: 4,
    name: "Hill's Science Diet Adult Perfect Weight Dry Dog Food, Chicken, 1.8 kg",
    price: 850,
    originalPrice: 950,
    discount: 10,
    rating: 4.6,
    description:
      "Hill's Science Diet Adult Perfect Weight Dry Dog Food, Chicken Recipe helps support lean muscle and ideal weight. This balanced formula includes natural ingredients, and is enriched with antioxidants, vitamin E, and omega-6 to promote a healthy coat and immune system.",
    images: [
      "https://m.media-amazon.com/images/I/71BdAbA9D7L._SX522_.jpg",
      "https://m.media-amazon.com/images/I/81Odu0ucTgS._SX522_.jpg",
      "https://m.media-amazon.com/images/I/71yRZLDkl4L._SX522_.jpg",
      "https://m.media-amazon.com/images/I/71-Ga3gClqL._SX522_.jpg",
      "https://m.media-amazon.com/images/I/81NWflMIVTL._SX522_.jpg",
      "https://m.media-amazon.com/images/I/61EhoHv7Q9L._SX522_.jpg",
    ],
    category: "Dog Food",
    brand: "Hill's Science Diet",
    ageCategories: ["Adult", "Senior"],
    quantities: ["250g", "500g", "750g", "1kg"],
    searchIndex: "hills science diet perfect weight chicken recipe lean muscle ideal weight natural ingredients antioxidants vitamin omega",
    tags: ["dog", "adult", "weight management", "chicken", "lean muscle", "antioxidants", "natural", "balanced"],
    petType: "Dog",
    specialFeatures: ["Weight Management", "Lean Muscle Support", "Antioxidants", "Vitamin E", "Omega-6"],
    targetLife: ["Adult"],
    flavor: "Chicken",
    weight: "1.8kg",
    inStock: true,
  },
  {
    id: 5,
    name: "Whiskas Adult (1+ Years) Dry Cat Food, Mackerel Flavour, 3 kg",
    price: 850,
    originalPrice: 950,
    discount: 10,
    rating: 4.6,
    description:
      "Whiskas Adult Dry Cat Food, Mackerel Flavour, is crafted to provide complete and balanced nutrition for adult cats. Enriched with 41 essential nutrients, this formula supports a healthy heart, strong muscles, and a shiny coat for your cat's well-being.",
    images: [
      "https://m.media-amazon.com/images/I/71kQ6sr+bNL._SX522_.jpg",
      "https://m.media-amazon.com/images/I/71NoSSYytvL._SX466_.jpg",
      "https://petsnpets.com/cdn/shop/files/MiowMiowAdultTunaFishCatFood1.2kg.png?v=1716185686&width=1000",
      "https://5.imimg.com/data5/ECOM/Default/2024/1/378810208/RF/HJ/GK/12142841/71krmfpgpjl-sx679.jpg",
    ],
    category: "Cat Food",
    brand: "Whiskas",
    ageCategories: ["Adult", "Senior"],
    quantities: ["250g", "500g", "750g", "1kg"],
    searchIndex: "whiskas adult dry cat food mackerel flavour complete balanced nutrition essential nutrients healthy heart strong muscles shiny coat",
    tags: ["cat", "adult", "dry food", "mackerel", "41 nutrients", "complete nutrition", "healthy heart", "strong muscles"],
    petType: "Cat",
    specialFeatures: ["41 Essential Nutrients", "Complete Nutrition", "Heart Health", "Muscle Support"],
    targetLife: ["Adult"],
    flavor: "Mackerel",
    weight: "3kg",
    inStock: true,
  },
  {
    id: 6,
    name: "Taiyo Pluss Discovery Premium Hamster Food - 1.1 kg",
    price: 450,
    originalPrice: 500,
    discount: 10,
    rating: 4.5,
    description:
      "Taiyo Pluss Discovery Premium Hamster Food provides daily nutrition for hamsters with a balanced mix of grains, seeds, and nutrients. This premium formula supports healthy growth and vitality for your small pet.",
    images: [
      "https://m.media-amazon.com/images/I/71Skptfd6KL._SY679_.jpg",
      "https://m.media-amazon.com/images/I/71u0NWk2PDL._SY879_.jpg",
      "https://m.media-amazon.com/images/I/51ClQt+vynL.jpg",
    ],
    category: "Small Pet Food",
    brand: "Taiyo Pluss Discovery",
    ageCategories: ["Young", "Adult", "Senior"],
    quantities: ["500g", "1kg", "1.1kg"],
    searchIndex: "taiyo pluss discovery premium hamster food daily nutrition balanced grains seeds nutrients healthy growth vitality",
    tags: ["hamster", "small pet", "premium", "daily nutrition", "grains", "seeds", "growth", "vitality"],
    petType: "Small Pet",
    specialFeatures: ["Premium Formula", "Daily Nutrition", "Balanced Mix", "Growth Support"],
    targetLife: ["All Life Stages"],
    weight: "1.1kg",
    inStock: true,
  },
  {
    id: 7,
    name: "Pedigree PRO Adult (9 Months Onwards) Small Breed Dry Dog Food, 1.2 kg",
    price: 900,
    originalPrice: 1000,
    discount: 10,
    rating: 4.7,
    description:
      "Pedigree PRO Adult Small Breed Dry Dog Food is specially formulated for small breed dogs aged 9 months and onwards. This premium formula provides complete nutrition with high-quality protein and essential nutrients for optimal health.",
    images: [
      "https://m.media-amazon.com/images/I/61sbRrU9PBL._SX466_.jpg",
      "https://m.media-amazon.com/images/I/71xTccspTGL._SX466_.jpg",
      "https://m.media-amazon.com/images/I/71JleyYLj6L._SX466_.jpg",
    ],
    category: "Dog Food",
    brand: "Pedigree PRO",
    ageCategories: ["Adult", "Senior"],
    quantities: ["500g", "1kg", "1.2kg"],
    searchIndex: "pedigree pro adult small breed dry dog food premium formula complete nutrition high quality protein essential nutrients",
    tags: ["dog", "adult", "small breed", "premium", "complete nutrition", "high protein", "essential nutrients"],
    petType: "Dog",
    specialFeatures: ["Small Breed Formula", "Premium Quality", "Complete Nutrition", "High-Quality Protein"],
    targetLife: ["Adult"],
    weight: "1.2kg",
    inStock: true,
  },
  {
    id: 8,
    name: "Tunai Hamster Food | 500g + 20% Extra | Fortified with DHA Omega 3 & 6",
    price: 400,
    originalPrice: 450,
    discount: 11,
    rating: 4.5,
    description:
      "Tunai Hamster Food provides complete nutrition for hamsters, fortified with DHA Omega 3 & 6 for brain development and overall health. This premium formula supports healthy growth and cognitive function.",
    images: [
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSuB09Z2-Z7v0iBugs1J3FecqiSFmQ-ZllugtRAuolZLgVt_dN3ad4-Mi-GiAb4juKaTrHg64bsAxZix_pDMliUYCp30ziuWR9c1NwEb0UeapsieoRRylZk&usqp=CAE",
      "https://m.media-amazon.com/images/I/71Skptfd6KL._SY679_.jpg",
    ],
    category: "Small Pet Food",
    brand: "Tunai",
    ageCategories: ["Young", "Adult", "Senior"],
    quantities: ["500g", "600g"],
    searchIndex: "tunai hamster food complete nutrition dha omega brain development health premium formula growth cognitive function",
    tags: ["hamster", "small pet", "dha", "omega 3", "omega 6", "brain development", "complete nutrition", "premium"],
    petType: "Small Pet",
    specialFeatures: ["DHA Fortified", "Omega 3 & 6", "Brain Development", "Complete Nutrition"],
    targetLife: ["All Life Stages"],
    weight: "500g + 20% Extra",
    inStock: true,
  },
  {
    id: 9,
    name: "Sheba Kitten and Adult, Irresistible Dry Cat Food, Salmon Flavor",
    price: 750,
    originalPrice: 850,
    discount: 12,
    rating: 4.8,
    description:
      "Sheba Kitten and Adult Dry Cat Food with irresistible salmon flavor provides complete nutrition for cats of all life stages. Made with high-quality ingredients to support healthy growth and development.",
    images: [
      "https://m.media-amazon.com/images/I/6111QWrWA8L._SX522_PIbundle-48,TopRight,0,0_AA522SH20_.jpg",
      "https://m.media-amazon.com/images/I/61Lvf8A9ggL._SX522_.jpg",
      "https://m.media-amazon.com/images/I/61V3BSTRPkL._SX522_.jpg",
    ],
    category: "Cat Food",
    brand: "Sheba",
    ageCategories: ["Kitten", "Adult", "Senior"],
    quantities: ["500g", "1kg", "2kg"],
    searchIndex: "sheba kitten adult dry cat food salmon flavor complete nutrition high quality ingredients healthy growth development",
    tags: ["cat", "kitten", "adult", "salmon", "dry food", "complete nutrition", "high quality", "all life stages"],
    petType: "Cat",
    specialFeatures: ["All Life Stages", "High-Quality Ingredients", "Complete Nutrition", "Irresistible Flavor"],
    targetLife: ["Kitten", "Adult"],
    flavor: "Salmon",
    weight: "1kg",
    inStock: true,
  },
  {
    id: 10,
    name: "TED TABBIES New Optimum Fish Food 2024 - 1Kg Highly Nutritious Fish Food for All Aquarium Fish",
    price: 450,
    originalPrice: 500,
    discount: 10,
    rating: 4.5,
    description:
      "TED TABBIES New Optimum Fish Food is a highly digestible, nutritious mini-pellet formula designed for all life stages of aquarium fish. It ensures optimal health and vibrant coloration for your aquatic pets.",
    images: [
      "https://m.media-amazon.com/images/I/61zvIh0gtgL._SX522_.jpg",
      "https://m.media-amazon.com/images/I/51twQcqOMWL._SX522_.jpg",
      "https://m.media-amazon.com/images/I/71h84Z4UVAL._SX522_.jpg",
      "https://m.media-amazon.com/images/I/61l2mOAV7QL._SX522_.jpg",
      "https://m.media-amazon.com/images/I/515EzqJoShL._SX522_.jpg",
    ],
    category: "Fish Food",
    brand: "TED TABBIES",
    ageCategories: ["Fry", "Adult", "Senior"],
    quantities: ["100g", "250g", "500g", "1kg"],
    searchIndex: "ted tabbies optimum fish food highly nutritious mini pellet formula aquarium fish optimal health vibrant coloration",
    tags: ["fish", "aquarium", "nutritious", "mini pellet", "all life stages", "optimal health", "vibrant colors"],
    petType: "Fish",
    specialFeatures: ["Highly Digestible", "Mini-Pellet Formula", "All Life Stages", "Vibrant Coloration"],
    targetLife: ["All Life Stages"],
    weight: "1kg",
    inStock: true,
  },
  {
    id: 11,
    name: "Sheba Melty Premium Lickable Creamy Cat Treats, Sasami Selection, Chicken Flavour and Chicken & Whitefish Flavours, 48 g",
    price: 250,
    originalPrice: 300,
    discount: 15,
    rating: 4.7,
    description:
      "Sheba Melty Premium Cat Treats offer a creamy, lickable texture, ideal for bonding moments. This Sasami Selection includes chicken and chicken & whitefish flavors, ensuring a delightful treat for adult cats.",
    images: [
      "https://m.media-amazon.com/images/I/6111QWrWA8L._SX522_PIbundle-48,TopRight,0,0_AA522SH20_.jpg",
      "https://m.media-amazon.com/images/I/61Lvf8A9ggL._SX522_.jpg",
      "https://m.media-amazon.com/images/I/61V3BSTRPkL._SX522_.jpg",
      "https://m.media-amazon.com/images/I/61Tp+fcV6uL._SX522_.jpg",
      "https://m.media-amazon.com/images/I/61DSo-WckeL._SX522_.jpg",
      "https://m.media-amazon.com/images/I/61R+gajgw3L._SX522_.jpg",
    ],
    category: "Cat Treats",
    brand: "Sheba",
    ageCategories: ["Adult", "Senior"],
    quantities: ["48g", "100g", "200g"],
    searchIndex: "sheba melty premium lickable creamy cat treats sasami selection chicken whitefish flavors bonding moments",
    tags: ["cat", "treats", "premium", "lickable", "creamy", "chicken", "whitefish", "bonding", "adult"],
    petType: "Cat",
    specialFeatures: ["Premium Quality", "Lickable Texture", "Creamy", "Bonding Treats"],
    targetLife: ["Adult"],
    flavor: "Chicken & Whitefish",
    weight: "48g",
    inStock: true,
  },
  {
    id: 12,
    name: "Boltz Freeze Dried Tubifex Worms Fish Food 50Gm for Bettas, Tetras, Arowana, Flowerhorn, Oscar Fish of All Life Stages",
    price: 300,
    originalPrice: 350,
    discount: 15,
    rating: 4.8,
    description:
      "Boltz Freeze Dried Tubifex Worms offer a nutritious, high-protein snack for a variety of fish, including Bettas and Oscars, and are ideal for all life stages. This pack provides a natural food source that supports fish health and growth.",
    images: [
      "https://m.media-amazon.com/images/I/61rio5paeJL._SX522_.jpg",
      "https://m.media-amazon.com/images/I/61H0EBKXsjL._SX522_.jpg",
      "https://m.media-amazon.com/images/I/61rpoeT+beL._SX522_.jpg",
      "https://m.media-amazon.com/images/I/61FmT+KHGQL._SX522_.jpg",
      "https://m.media-amazon.com/images/I/61F30yvpVQL._SX522_.jpg",
      "https://m.media-amazon.com/images/I/71C8Q1IydxL._SX522_.jpg",
    ],
    category: "Fish Food",
    brand: "Boltz",
    ageCategories: ["Fry", "Adult", "Senior"],
    quantities: ["50g", "100g", "200g"],
    searchIndex: "boltz freeze dried tubifex worms fish food bettas tetras arowana flowerhorn oscar natural high protein health growth",
    tags: ["fish", "freeze dried", "tubifex worms", "bettas", "tetras", "arowana", "flowerhorn", "oscar", "high protein", "natural"],
    petType: "Fish",
    specialFeatures: ["Freeze Dried", "High Protein", "Natural Food Source", "All Life Stages"],
    targetLife: ["All Life Stages"],
    weight: "50g",
    inStock: true,
  },
  {
    id: 13,
    name: "Premier Plants Aquarium Fish Food Flowerhorn Fish Food with Probiotics Plus Fish Food",
    price: 500,
    originalPrice: 550,
    discount: 9,
    rating: 4.5,
    description:
      "Premier Plants Aquarium Fish Food with Probiotics is specially formulated for Flowerhorn fish, providing a balanced diet that promotes growth and vibrant colors. This probiotic-enriched fish food enhances digestion and supports immune health, making it ideal for all stages.",
    images: [
      "https://m.media-amazon.com/images/I/61I+lw7UuCL._SX522_.jpg",
      "https://m.media-amazon.com/images/I/51zq+STYwgL._SX522_.jpg",
      "https://m.media-amazon.com/images/I/614EFIQWbVL._SX522_.jpg",
      "https://m.media-amazon.com/images/I/61TOLVjXPTL._SX522_.jpg",
    ],
    category: "Fish Food",
    brand: "Premier Plants",
    ageCategories: ["Juvenile", "Adult", "Senior"],
    quantities: ["250g", "500g", "750g", "1kg"],
    searchIndex: "premier plants aquarium fish food flowerhorn probiotics balanced diet growth vibrant colors digestion immune health",
    tags: ["fish", "aquarium", "flowerhorn", "probiotics", "balanced diet", "growth", "vibrant colors", "immune health"],
    petType: "Fish",
    specialFeatures: ["Probiotic-Enriched", "Balanced Diet", "Growth Promotion", "Vibrant Colors", "Immune Support"],
    targetLife: ["All Life Stages"],
    weight: "500g",
    inStock: true,
  },
  {
    id: 14,
    name: "Sera Discus Granules 1.1 lb 1000 ml Pet Food, One Size",
    price: 1200,
    originalPrice: 1350,
    discount: 11,
    rating: 4.7,
    description:
      "Sera Discus Granules are specifically crafted for discus fish, providing a balanced diet with optimal protein levels to support vibrant colors and healthy growth. Ideal for daily feeding, these granules are easily digestible and promote strong immune function.",
    images: [
      "https://m.media-amazon.com/images/I/7195NwxeIOL._SX522_.jpg",
      "https://m.media-amazon.com/images/I/71Tt0KIwSvL._SX522_.jpg",
      "https://m.media-amazon.com/images/I/71Xi3d3MzxL._SX522_.jpg",
      "https://m.media-amazon.com/images/I/71IAbi4lLcL._SX522_.jpg",
      "https://m.media-amazon.com/images/I/81pikc8fwlL._SX522_.jpg",
      "https://m.media-amazon.com/images/I/81x0PhJGuDL._SX522_.jpg",
    ],
    category: "Fish Food",
    brand: "Sera",
    ageCategories: ["Juvenile", "Adult", "Senior"],
    quantities: ["500g", "1000ml"],
    searchIndex: "sera discus granules fish food balanced diet optimal protein vibrant colors healthy growth easily digestible immune function",
    tags: ["fish", "discus", "granules", "balanced diet", "optimal protein", "vibrant colors", "easily digestible", "immune function"],
    petType: "Fish",
    specialFeatures: ["Discus Specific", "Optimal Protein", "Easily Digestible", "Vibrant Colors", "Immune Support"],
    targetLife: ["All Life Stages"],
    weight: "1000ml",
    inStock: true,
  },
  {
    id: 15,
    name: "Diamond Naturals Grain Free Real Meat Recipe Premium Dry Dog Food with Real Pasture Raised Beef, 28 lb",
    price: 3200,
    originalPrice: 3500,
    discount: 8,
    rating: 4.5,
    description:
      "Diamond Naturals Grain-Free Dog Food features real pasture-raised beef, providing high-quality protein for muscle maintenance. This premium dry dog food is crafted without grains, supporting a balanced diet and promoting digestive health for active dogs.",
    images: [
      "https://m.media-amazon.com/images/I/71asexX132L._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/81rQnA579NL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/81nB+QP4GBL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/81fkJ58eYbL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/81ynSi8yKUL._AC_SX679_.jpg",
    ],
    category: "Dog Food",
    brand: "Diamond Naturals",
    ageCategories: ["Adult", "Senior"],
    quantities: ["5lb", "15lb", "28lb"],
    searchIndex: "diamond naturals grain free real meat recipe premium dry dog food pasture raised beef high quality protein muscle maintenance digestive health",
    tags: ["dog", "adult", "grain free", "real meat", "premium", "pasture raised beef", "high protein", "digestive health"],
    petType: "Dog",
    specialFeatures: ["Grain-Free", "Real Pasture-Raised Beef", "Premium Quality", "High-Quality Protein", "Digestive Health"],
    targetLife: ["Adult"],
    flavor: "Beef",
    weight: "28lb",
    inStock: true,
  },
  {
    id: 16,
    name: "PETS EMPIRE Little One Hamsters Food, Complete Nutritional Pet Feed with Dried Carrot & Yuca, 900g",
    price: 540,
    originalPrice: 600,
    discount: 10,
    rating: 4.4,
    description:
      "PETS EMPIRE Little One Hamsters Food provides complete nutritional pet feed with dried carrot and yuca. This premium formula supports healthy growth and development for hamsters of all ages.",
    images: [
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSuB09Z2-Z7v0iBugs1J3FecqiSFmQ-ZllugtRAuolZLgVt_dN3ad4-Mi-GiAb4juKaTrHg64bsAxZix_pDMliUYCp30ziuWR9c1NwEb0UeapsieoRRylZk&usqp=CAE",
      "https://m.media-amazon.com/images/I/71Skptfd6KL._SY679_.jpg",
      "https://m.media-amazon.com/images/I/71u0NWk2PDL._SY879_.jpg",
    ],
    category: "Small Pet Food",
    brand: "PETS EMPIRE",
    ageCategories: ["Young", "Adult", "Senior"],
    quantities: ["500g", "900g", "1kg"],
    searchIndex: "pets empire little one hamsters food complete nutritional pet feed dried carrot yuca premium formula healthy growth development",
    tags: ["hamster", "small pet", "complete nutrition", "dried carrot", "yuca", "premium formula", "healthy growth"],
    petType: "Small Pet",
    specialFeatures: ["Complete Nutrition", "Dried Carrot & Yuca", "Premium Formula", "Growth Support"],
    targetLife: ["All Life Stages"],
    weight: "900g",
    inStock: true,
  },
];

export const getProductById = (id: number): Product | undefined => {
  return products.find((product) => product.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter((product) => product.category === category);
};

export const getFeaturedProducts = (): Product[] => {
  return products.slice(0, 6);
};

// Enhanced utility functions for better search and filtering

export const getProductsByPetType = (petType: string): Product[] => {
  return products.filter((product) => 
    product.petType.toLowerCase() === petType.toLowerCase()
  );
};

export const searchProducts = (searchTerm: string): Product[] => {
  const term = searchTerm.toLowerCase();
  return products.filter((product) => 
    product.searchIndex.toLowerCase().includes(term) ||
    product.name.toLowerCase().includes(term) ||
    product.brand.toLowerCase().includes(term) ||
    product.tags.some(tag => tag.toLowerCase().includes(term))
  );
};

export const getProductsByTags = (tags: string[]): Product[] => {
  return products.filter((product) =>
    tags.some(tag => 
      product.tags.some(productTag => 
        productTag.toLowerCase().includes(tag.toLowerCase())
      )
    )
  );
};

export const getProductsByPriceRange = (minPrice: number, maxPrice: number): Product[] => {
  return products.filter((product) => 
    product.price >= minPrice && product.price <= maxPrice
  );
};

export const getProductsByBrand = (brand: string): Product[] => {
  return products.filter((product) => 
    product.brand.toLowerCase() === brand.toLowerCase()
  );
};

export const getProductsBySpecialFeatures = (features: string[]): Product[] => {
  return products.filter((product) =>
    features.some(feature => 
      product.specialFeatures.some(productFeature => 
        productFeature.toLowerCase().includes(feature.toLowerCase())
      )
    )
  );
};

export const getBestSellerProducts = (): Product[] => {
  return products.filter((product) => product.isBestSeller);
};

export const getNewProducts = (): Product[] => {
  return products.filter((product) => product.isNew);
};

export const getProductsByRating = (minRating: number): Product[] => {
  return products.filter((product) => product.rating >= minRating);
};

export const getSortedProducts = (
  sortBy: 'price' | 'rating' | 'discount' | 'name',
  order: 'asc' | 'desc' = 'asc'
): Product[] => {
  return [...products].sort((a, b) => {
    let comparison = 0;
    
    switch (sortBy) {
      case 'price':
        comparison = a.price - b.price;
        break;
      case 'rating':
        comparison = a.rating - b.rating;
        break;
      case 'discount':
        comparison = a.discount - b.discount;
        break;
      case 'name':
        comparison = a.name.localeCompare(b.name);
        break;
    }
    
    return order === 'desc' ? -comparison : comparison;
  });
};

export const getUniqueCategories = (): string[] => {
  return [...new Set(products.map(product => product.category))];
};

export const getUniqueBrands = (): string[] => {
  return [...new Set(products.map(product => product.brand))];
};

export const getUniquePetTypes = (): string[] => {
  return [...new Set(products.map(product => product.petType))];
};

export const getAllTags = (): string[] => {
  const allTags = products.flatMap(product => product.tags);
  return [...new Set(allTags)];
};

export const getSpecialFeatures = (): string[] => {
  const allFeatures = products.flatMap(product => product.specialFeatures);
  return [...new Set(allFeatures)];
};

// Advanced filtering function
export const filterProducts = (filters: {
  petType?: string;
  category?: string;
  brand?: string;
  minPrice?: number;
  maxPrice?: number;
  minRating?: number;
  tags?: string[];
  specialFeatures?: string[];
  inStock?: boolean;
}): Product[] => {
  return products.filter((product) => {
    if (filters.petType && product.petType.toLowerCase() !== filters.petType.toLowerCase()) {
      return false;
    }
    
    if (filters.category && product.category.toLowerCase() !== filters.category.toLowerCase()) {
      return false;
    }
    
    if (filters.brand && product.brand.toLowerCase() !== filters.brand.toLowerCase()) {
      return false;
    }
    
    if (filters.minPrice && product.price < filters.minPrice) {
      return false;
    }
    
    if (filters.maxPrice && product.price > filters.maxPrice) {
      return false;
    }
    
    if (filters.minRating && product.rating < filters.minRating) {
      return false;
    }
    
    if (filters.tags && filters.tags.length > 0) {
      const hasMatchingTag = filters.tags.some(tag => 
        product.tags.some(productTag => 
          productTag.toLowerCase().includes(tag.toLowerCase())
        )
      );
      if (!hasMatchingTag) return false;
    }
    
    if (filters.specialFeatures && filters.specialFeatures.length > 0) {
      const hasMatchingFeature = filters.specialFeatures.some(feature => 
        product.specialFeatures.some(productFeature => 
          productFeature.toLowerCase().includes(feature.toLowerCase())
        )
      );
      if (!hasMatchingFeature) return false;
    }
    
    if (filters.inStock !== undefined && product.inStock !== filters.inStock) {
      return false;
    }
    
    return true;
  });
};

// Statistics functions
export const getProductStats = () => {
  const totalProducts = products.length;
  const averagePrice = products.reduce((sum, product) => sum + product.price, 0) / totalProducts;
  const averageRating = products.reduce((sum, product) => sum + product.rating, 0) / totalProducts;
  const inStockCount = products.filter(product => product.inStock).length;
  
  const categoryStats = getUniqueCategories().map(category => ({
    category,
    count: products.filter(product => product.category === category).length
  }));
  
  const petTypeStats = getUniquePetTypes().map(petType => ({
    petType,
    count: products.filter(product => product.petType === petType).length
  }));
  
  return {
    totalProducts,
    averagePrice: Math.round(averagePrice),
    averageRating: Math.round(averageRating * 10) / 10,
    inStockCount,
    outOfStockCount: totalProducts - inStockCount,
    categoryStats,
    petTypeStats
  };
};

// Existing functions (keeping for backward compatibility)
