# Products Library Documentation

This document outlines the enhanced features and structure of the products library after extracting information from HTML files and adding advanced search and filtering capabilities.

## Enhanced Product Interface

The `Product` interface has been expanded with the following new fields:

### Core Fields
- `id`: Unique identifier
- `name`: Product name
- `price`: Current price
- `originalPrice`: Original price before discount
- `discount`: Discount percentage
- `rating`: Product rating (0-5)
- `description`: Detailed product description
- `images`: Array of product images
- `category`: Product category
- `brand`: Brand name
- `ageCategories`: Suitable age categories
- `quantities`: Available quantity options

### Enhanced Fields for Search and Filtering
- `searchIndex`: Combined searchable text for efficient searching
- `tags`: Array of tags for filtering and categorization
- `petType`: Type of pet (Dog, Cat, Fish, Small Pet, etc.)
- `nutritionalInfo`: Optional nutritional information object
- `specialFeatures`: Array of special product features
- `targetLife`: Target life stages (Puppy, Adult, Senior, etc.)
- `flavor`: Product flavor (optional)
- `weight`: Primary weight/size
- `inStock`: Stock availability
- `isNew`: New product flag (optional)
- `isBestSeller`: Best seller flag (optional)

## Product Data Overview

### Total Products: 16

### Product Categories:
- **Dog Food**: 4 products
- **Cat Food**: 3 products
- **Small Pet Food**: 4 products
- **Fish Food**: 4 products
- **Cat Treats**: 1 product

### Pet Types:
- **Dog**: 4 products
- **Cat**: 4 products
- **Small Pet**: 4 products (Hamster-focused)
- **Fish**: 4 products

### Price Range:
- **Minimum**: ₹250 (Cat Treats)
- **Maximum**: ₹3200 (Premium Dog Food)
- **Average**: ₹883

### Top Rated Products (4.7+ rating):
1. Pedigree PRO Adult Small Breed Dog Food (4.7⭐)
2. Sheba Melty Premium Cat Treats (4.7⭐)
3. Boltz Freeze Dried Tubifex Worms (4.8⭐)
4. Sera Discus Granules (4.7⭐)
5. Sheba Kitten and Adult Cat Food (4.8⭐)

## Enhanced Utility Functions

### Basic Search and Filtering
- `getProductById(id)`: Get product by ID
- `getProductsByCategory(category)`: Filter by category
- `getProductsByPetType(petType)`: Filter by pet type
- `searchProducts(searchTerm)`: Search across names, brands, tags, and search index

### Advanced Filtering
- `getProductsByTags(tags)`: Filter by multiple tags
- `getProductsByPriceRange(min, max)`: Filter by price range
- `getProductsByBrand(brand)`: Filter by brand
- `getProductsBySpecialFeatures(features)`: Filter by special features
- `getProductsByRating(minRating)`: Filter by minimum rating
- `getBestSellerProducts()`: Get best seller products
- `getNewProducts()`: Get new products

### Comprehensive Filtering
- `filterProducts(filters)`: Advanced filtering with multiple criteria:
  - petType
  - category
  - brand
  - price range (min/max)
  - minimum rating
  - tags
  - special features
  - stock availability

### Sorting
- `getSortedProducts(sortBy, order)`: Sort by price, rating, discount, or name

### Data Analysis
- `getUniqueCategories()`: Get all unique categories
- `getUniqueBrands()`: Get all unique brands
- `getUniquePetTypes()`: Get all unique pet types
- `getAllTags()`: Get all available tags
- `getSpecialFeatures()`: Get all special features
- `getProductStats()`: Get comprehensive statistics

### Legacy Functions (Maintained for Compatibility)
- `getFeaturedProducts()`: Get first 6 products

## Usage Examples

### Basic Search
```typescript
// Search for dog food
const dogProducts = getProductsByPetType('Dog');

// Search by keyword
const chickenProducts = searchProducts('chicken');

// Get products by price range
const budgetProducts = getProductsByPriceRange(200, 500);
```

### Advanced Filtering
```typescript
// Complex filtering
const filteredProducts = filterProducts({
  petType: 'Cat',
  minPrice: 200,
  maxPrice: 800,
  minRating: 4.5,
  tags: ['premium', 'adult'],
  inStock: true
});

// Get premium dog food
const premiumDogFood = getProductsBySpecialFeatures(['Premium Quality']);
```

### Sorting and Analysis
```typescript
// Sort by price (low to high)
const cheapestFirst = getSortedProducts('price', 'asc');

// Get statistics
const stats = getProductStats();
console.log(`Total products: ${stats.totalProducts}`);
console.log(`Average price: ₹${stats.averagePrice}`);
```

## Tags System

Products are tagged with relevant keywords for better searchability:
- Pet type tags: "dog", "cat", "fish", "hamster", "small pet"
- Life stage tags: "puppy", "kitten", "adult", "senior", "all life stages"
- Feature tags: "premium", "grain free", "high protein", "natural", "organic"
- Health tags: "immune health", "digestive health", "weight management"
- Format tags: "dry food", "wet food", "treats", "pellets", "granules"

## Special Features Categories

Products include special features for highlighting unique benefits:
- **Nutritional**: "High-Quality Protein", "Omega-6 Enriched", "Essential Nutrients"
- **Dietary**: "Grain-Free", "Natural Ingredients", "Complete Nutrition"
- **Health**: "Immune Support", "Digestive Health", "Weight Management"
- **Life Stage**: "All Life Stages", "Small Breed Formula", "Adult Formula"
- **Quality**: "Premium Quality", "Premium Formula", "Easily Digestible"

## Data Sources

Product information was extracted from 16 HTML files in the `webcompnents/productslist/` directory:
- Product names, descriptions, and pricing
- Product images and ratings
- Category and brand information
- Enhanced with search indices, tags, and special features for improved functionality

## Future Enhancements

Potential areas for expansion:
1. **Nutritional Information**: Add detailed nutritional facts
2. **Reviews System**: Integrate customer reviews and ratings
3. **Inventory Management**: Real-time stock tracking
4. **Related Products**: Product recommendation algorithms
5. **Multi-language Support**: Internationalization of product data
6. **Image Management**: Advanced image handling and optimization
