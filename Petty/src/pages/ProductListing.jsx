import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  padding: 2rem;
  min-height: calc(100vh - 140px); // Account for header and footer
  background: #f5f5f5;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1rem;
  }
`;

const Sidebar = styled.div`
  flex: 0 0 250px;
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  height: fit-content;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    flex: none;
    width: 100%;
  }
`;

const FilterSection = styled.div`
  margin-bottom: 2rem;

  h3 {
    font-size: 1.2rem;
    margin-bottom: 1rem;
    color: #333;
  }

  label {
    display: block;
    margin: 0.5rem 0;
    color: #666;
    cursor: pointer;

    &:hover {
      color: #7e22ce;
    }

    input[type="checkbox"] {
      margin-right: 0.5rem;
    }
  }

  input[type="range"] {
    width: 100%;
    margin: 1rem 0;
  }
`;

const ApplyButton = styled.button`
  width: 100%;
  padding: 0.8rem;
  background: #7e22ce;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  transition: background-color 0.3s;

  &:hover {
    background: #6b21a8;
  }
`;

const ProductGrid = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
  align-content: start;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1rem;
  }
`;

const ProductCard = styled.div`
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
  }

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }

  .content {
    padding: 1rem;

    h3 {
      font-size: 1rem;
      margin-bottom: 0.5rem;
      color: #333;
    }

    .price {
      font-size: 1.2rem;
      font-weight: bold;
      color: #7e22ce;
    }

    .discount {
      color: #666;
      text-decoration: line-through;
      margin-left: 0.5rem;
      font-size: 0.9rem;
    }

    .out-of-stock {
      color: #dc2626;
      font-weight: 500;
    }
  }
`;

const products = [
  {
    id: 1,
    name: "PEDIGREE® Chicken and Vegetables for Adult Dogs",
    price: 260,
    discount: 40,
    image: "https://m.media-amazon.com/images/I/61sbRrU9PBL._SX466_.jpg",
    category: "Dog food",
    brand: "Mars Petcare Inc.",
  },
  {
    id: 2,
    name: "Hill's Pet Nutrition Cat food",
    price: 260,
    discount: 40,
    image: "https://m.media-amazon.com/images/I/81WVzsIOzpL._SX466_.jpg",
    category: "Cat food",
    brand: "Hill's Pet Nutrition",
    outOfStock: true,
  },
  {
    id: 3,
    name: "Hill's Pet Nutrition Hamster food",
    price: 260,
    discount: 40,
    image:
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSuB09Z2-Z7v0iBugs1J3FecqiSFmQ-ZllugtRAuolZLgVt_dN3ad4-Mi-GiAb4juKaTrHg64bsAxZix_pDMliUYCp30ziuWR9c1NwEb0UeapsieoRRylZk&usqp=CAE",
    category: "Hamster food",
    brand: "Hill's Pet Nutrition",
  },
  {
    id: 4,
    name: "Hill's Science Diet Dry Dog Food",
    price: 260,
    discount: 40,
    image: "https://m.media-amazon.com/images/I/71BdAbA9D7L._SX522_.jpg",
    category: "Dog food",
    brand: "Hill's Pet Nutrition",
  },
  {
    id: 5,
    name: "Whiskas Adult (1+ Years) Dry Cat Food",
    price: 240,
    discount: 40,
    image: "https://m.media-amazon.com/images/I/71NoSSYytvL._SX466_.jpg",
    category: "Cat food",
    brand: "General Mills",
  },
  {
    id: 6,
    name: "Taiyo Pluss Discovery Premium Hamster Food",
    price: 212,
    discount: 40,
    image: "https://m.media-amazon.com/images/I/61l+ZkxdU6L._SX522_.jpg",
    category: "Hamster food",
    brand: "United Petfood",
  },
  {
    id: 7,
    name: "Pedigree PRO Adult",
    price: 180,
    discount: 40,
    image: "https://m.media-amazon.com/images/I/71Ju0YdimlL._SX522_.jpg",
    category: "Dog food",
    brand: "Mars Petcare Inc.",
  },
  {
    id: 8,
    name: "Tunai Hamster Food",
    price: 212,
    discount: 40,
    image: "https://m.media-amazon.com/images/I/71sG7cI3NJL._SX466_.jpg",
    category: "Hamster food",
    brand: "United Petfood",
  },
  {
    id: 9,
    name: "Sheba Kitten and Adult",
    price: 145,
    discount: 40,
    image:
      "https://m.media-amazon.com/images/I/51MHMmAcoGL._SX300_SY300_QL70_FMwebp_.jpg",
    category: "Cat food",
    brand: "Nestlé Purina PetCare",
  },
  {
    id: 10,
    name: "TED TABBIES Optimum Fish Food",
    price: 120,
    discount: 40,
    image: "https://m.media-amazon.com/images/I/51RAPV0Yq9L._SX466_.jpg",
    category: "Fish food",
    brand: "Nestlé Purina PetCare",
  },
  {
    id: 11,
    name: "Sheba Melty Premium Lickable Creamy Cat Treats",
    price: 145,
    discount: 40,
    image:
      "https://m.media-amazon.com/images/I/51n1FhvXGcL._SX300_SY300_QL70_FMwebp_.jpg",
    category: "Cat food",
    brand: "Nestlé Purina PetCare",
  },
  {
    id: 12,
    name: "BOLTZ Freeze Dried Blood Worms Fish Food",
    price: 120,
    discount: 40,
    image:
      "https://m.media-amazon.com/images/I/41pXMhaBwqL._SY300_SX300_QL70_FMwebp_.jpg",
    category: "Fish food",
    brand: "Hill's Pet Nutrition",
  },
  {
    id: 13,
    name: "Premier Plants Aquarium Fish Food",
    price: 120,
    discount: 40,
    image: "https://m.media-amazon.com/images/I/61I+lw7UuCL._SX522_.jpg",
    category: "Fish food",
    brand: "Hill's Pet Nutrition",
  },
  {
    id: 14,
    name: "Sera Discus Granules Pet Food",
    price: 120,
    discount: 40,
    image: "https://m.media-amazon.com/images/I/7195NwxeIOL._SX522_.jpg",
    category: "Fish food",
    brand: "Hill's Pet Nutrition",
  },
  {
    id: 15,
    name: "Diamond Naturals Grain Free Real Meat Recipe",
    price: 145,
    discount: 40,
    image: "https://m.media-amazon.com/images/I/71asexX132L._AC_SX679_.jpg",
    category: "Dog food",
    brand: "Diamond Pet Foods",
  },
  {
    id: 16,
    name: "PETS EMPIRE Little One Hamsters Food",
    price: 212,
    discount: 40,
    image: "https://m.media-amazon.com/images/I/71lu35kLYmL._SY606_.jpg",
    category: "Hamster food",
    brand: "United Petfood",
  },
];

function ProductListingPage() {
  const navigate = useNavigate();
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [maxPrice, setMaxPrice] = useState(500);
  const [selectedBrands, setSelectedBrands] = useState([]);

  const handleCategoryChange = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const handleBrandChange = (brand) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    );
  };

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  const filteredProducts = products.filter((product) => {
    const categoryMatch =
      selectedCategories.length === 0 ||
      selectedCategories.includes(product.category);
    const priceMatch = product.price <= maxPrice;
    const brandMatch =
      selectedBrands.length === 0 || selectedBrands.includes(product.brand);
    return categoryMatch && priceMatch && brandMatch;
  });

  return (
    <Container>
      <Sidebar>
        <FilterSection>
          <h3>Categories</h3>
          {["Dog food", "Cat food", "Fish food", "Hamster food", "Others"].map(
            (category) => (
              <label key={category}>
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(category)}
                  onChange={() => handleCategoryChange(category)}
                />
                {category}
              </label>
            )
          )}
        </FilterSection>

        <FilterSection>
          <h3>Price Range</h3>
          <input
            type="range"
            min="0"
            max="500"
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
          />
          <div>Max Price: ₹{maxPrice}</div>
        </FilterSection>

        <FilterSection>
          <h3>Brands</h3>
          {[
            "Nestlé Purina PetCare",
            "Mars Petcare Inc.",
            "Hill's Pet Nutrition",
            "General Mills",
            "Diamond Pet Foods",
            "United Petfood",
          ].map((brand) => (
            <label key={brand}>
              <input
                type="checkbox"
                checked={selectedBrands.includes(brand)}
                onChange={() => handleBrandChange(brand)}
              />
              {brand}
            </label>
          ))}
        </FilterSection>

        <ApplyButton onClick={() => {}}>Apply Filters</ApplyButton>
      </Sidebar>

      <ProductGrid>
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            onClick={() => handleProductClick(product.id)}
          >
            <img src={product.image} alt={product.name} />
            <div className="content">
              <h3>{product.name}</h3>
              <div>
                <span className="price">₹{product.price}</span>
                {product.discount && (
                  <span className="discount">
                    ₹{Math.round(product.price / (1 - product.discount / 100))}
                  </span>
                )}
              </div>
              {product.outOfStock && (
                <div className="out-of-stock">Out of Stock</div>
              )}
            </div>
          </ProductCard>
        ))}
      </ProductGrid>
    </Container>
  );
}

export default ProductListingPage;
