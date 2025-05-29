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
  },
  {
    id: 4,
    name: "Whiskas Adult (1+ Years) Dry Cat Food",
    price: 240,
    originalPrice: 350,
    discount: 30,
    rating: 4.4,
    description:
      "Whiskas Adult Dry Cat Food is specially formulated for cats aged 1 year and above. This nutritious meal provides essential vitamins and minerals for optimal health and vitality.",
    images: [
      "https://m.media-amazon.com/images/I/71NoSSYytvL._SX466_.jpg",
      "https://petsnpets.com/cdn/shop/files/MiowMiowAdultTunaFishCatFood1.2kg.png?v=1716185686&width=1000",
      "https://5.imimg.com/data5/ECOM/Default/2024/1/378810208/RF/HJ/GK/12142841/71krmfpgpjl-sx679.jpg",
    ],
    category: "Cat Food",
    brand: "Whiskas",
    ageCategories: ["Adult", "Senior"],
    quantities: ["250g", "500g", "750g", "1kg"],
  },
  {
    id: 5,
    name: "Drools Adult Dry Dog Food, Chicken and Rice",
    price: 320,
    originalPrice: 400,
    discount: 20,
    rating: 4.3,
    description:
      "Drools Adult Dry Dog Food with real chicken and rice provides complete nutrition for adult dogs. Rich in protein and essential nutrients for healthy growth and development.",
    images: [
      "https://www.wiggles.in/cdn/shop/products/2RightNutritioncopy-100.jpg?v=1706864496&width=1445",
      "https://m.media-amazon.com/images/I/81vGiZuZbhL._AC_UF1000,1000_QL80_.jpg",
      "https://m.media-amazon.com/images/I/71MyS7BUCgL.jpg",
    ],
    category: "Dog Food",
    brand: "Drools",
    ageCategories: ["Adult", "Senior"],
    quantities: ["250g", "500g", "750g", "1kg"],
  },
  {
    id: 6,
    name: "Royal Canin Persian Adult Cat Food",
    price: 680,
    originalPrice: 750,
    discount: 9,
    rating: 4.7,
    description:
      "Royal Canin Persian Adult Cat Food is specially designed for Persian cats with its unique kibble shape and tailored nutrition for long-haired breeds.",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6BqpASnBJrw8ZnGpYLLWkgQyPvvXoOiP4cQ&s",
      "https://m.media-amazon.com/images/I/71BdAbA9D7L._SX522_.jpg",
      "https://headsupfortails.com/cdn/shop/files/8906002482832.jpg?v=1715947995",
    ],
    category: "Cat Food",
    brand: "Royal Canin",
    ageCategories: ["Adult", "Senior"],
    quantities: ["250g", "500g", "750g", "1kg"],
  },
  {
    id: 7,
    name: "Farmina N&D Ocean Cod & Orange Adult Dog Food",
    price: 1200,
    originalPrice: 1350,
    discount: 11,
    rating: 4.8,
    description:
      "Farmina N&D Ocean features wild-caught cod and orange for a natural, grain-free diet. Perfect for adult dogs with sensitive digestion.",
    images: [
      "https://www.petsy.online/cdn/shop/products/7_7a3eda57-823d-4637-8701-2aea66c9dfc2.jpg?v=1676621537",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrTN50PGyBoDXP3W0qh71LzXi1Li2wId-qOA&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCnR-xgTM42Du77zOgbuClO_aanhte9Fx0nA&s",
    ],
    category: "Dog Food",
    brand: "Farmina",
    ageCategories: ["Adult", "Senior"],
    quantities: ["250g", "500g", "750g", "1kg"],
  },
  {
    id: 8,
    name: "Purina Pro Plan Adult Dog Food with Chicken",
    price: 580,
    originalPrice: 650,
    discount: 11,
    rating: 4.5,
    description:
      "Purina Pro Plan Adult Dog Food is formulated with real chicken as the first ingredient, providing high-quality protein for muscle maintenance and overall health.",
    images: [
      "https://m.media-amazon.com/images/I/71BdAbA9D7L._SX522_.jpg",
      "https://headsupfortails.com/cdn/shop/files/8906002482832.jpg?v=1715947995",
      "https://www.petsy.online/cdn/shop/products/7_7a3eda57-823d-4637-8701-2aea66c9dfc2.jpg?v=1676621537",
    ],
    category: "Dog Food",
    brand: "Purina Pro Plan",
    ageCategories: ["Adult", "Senior"],
    quantities: ["250g", "500g", "750g", "1kg"],
  },
  {
    id: 9,
    name: "Meo Persian Adult Cat Food",
    price: 420,
    originalPrice: 480,
    discount: 13,
    rating: 4.3,
    description:
      "Meo Persian Adult Cat Food is specially formulated for Persian and long-haired cat breeds, promoting healthy skin and coat with omega fatty acids.",
    images: [
      "https://5.imimg.com/data5/ECOM/Default/2024/1/378810208/RF/HJ/GK/12142841/71krmfpgpjl-sx679.jpg",
      "https://m.media-amazon.com/images/I/71MyS7BUCgL.jpg",
      "https://petsnpets.com/cdn/shop/files/MiowMiowAdultTunaFishCatFood1.2kg.png?v=1716185686&width=1000",
    ],
    category: "Cat Food",
    brand: "Meo",
    ageCategories: ["Adult", "Senior"],
    quantities: ["250g", "500g", "750g", "1kg"],
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
  },
  {
    id: 16,
    name: "Purina Fancy Feast Medleys Gourmet Wet Cat Food",
    price: 180,
    originalPrice: 220,
    discount: 18,
    rating: 4.4,
    description:
      "Purina Fancy Feast Medleys offers gourmet wet cat food with tender cuts of chicken, beef, or seafood in delicious sauce. Perfect for adult cats who enjoy variety in their meals.",
    images: [
      "https://www.wiggles.in/cdn/shop/products/2RightNutritioncopy-100.jpg?v=1706864496&width=1445",
      "https://petsnpets.com/cdn/shop/files/MiowMiowAdultTunaFishCatFood1.2kg.png?v=1716185686&width=1000",
      "https://m.media-amazon.com/images/I/81vGiZuZbhL._AC_UF1000,1000_QL80_.jpg",
    ],
    category: "Cat Food",
    brand: "Purina",
    ageCategories: ["Adult", "Senior"],
    quantities: ["85g", "170g", "340g"],
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
