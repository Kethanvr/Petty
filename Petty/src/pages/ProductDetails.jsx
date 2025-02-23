import { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { products, suggestedProducts } from "../data/products";

const Container = styled.div`
  max-width: 1200px;
  margin: 2rem auto;
  padding: 0 2rem;
`;

const ProductContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  gap: 2rem;
  margin-bottom: 3rem;
`;

const ProductImages = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  img {
    width: 100%;
    height: 80px;
    object-fit: cover;
    cursor: pointer;
    border: 2px solid transparent;
    border-radius: 4px;

    &.active {
      border-color: #333;
    }
  }
`;

const MainImage = styled.div`
  img {
    width: 100%;
    height: 500px;
    object-fit: cover;
    border-radius: 8px;
  }
`;

const ProductInfo = styled.div`
  h1 {
    margin: 0 0 1rem;
    font-size: 1.8rem;
    color: #333;
  }

  .rating {
    color: #ffd700;
    margin-bottom: 1rem;
  }

  .price {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1.5rem;

    span:first-child {
      font-size: 2rem;
      font-weight: bold;
    }

    .original-price {
      text-decoration: line-through;
      color: #999;
    }

    .discount {
      background: #ff4444;
      color: white;
      padding: 0.3rem 0.8rem;
      border-radius: 4px;
    }
  }

  p {
    color: #666;
    line-height: 1.6;
    margin-bottom: 2rem;
  }
`;

const OptionsContainer = styled.div`
  margin-bottom: 2rem;

  h3 {
    margin-bottom: 1rem;
    color: #333;
  }
`;

const AgeOptions = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;

  button {
    padding: 0.5rem 1.5rem;
    border: 2px solid #ddd;
    background: white;
    border-radius: 25px;
    cursor: pointer;
    transition: all 0.2s;

    &.active {
      border-color: #333;
      background: #333;
      color: white;
    }
  }
`;

const QuantityOptions = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;

  label {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1.5rem;
    border: 2px solid #ddd;
    border-radius: 25px;
    cursor: pointer;

    &.active {
      border-color: #333;
      background: #333;
      color: white;
    }
  }

  input {
    display: none;
  }
`;

const QuantityCounter = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;

  button {
    width: 40px;
    height: 40px;
    border: 2px solid #ddd;
    background: white;
    border-radius: 50%;
    cursor: pointer;
    font-size: 1.2rem;

    &:hover {
      background: #f5f5f5;
    }
  }

  input {
    width: 60px;
    height: 40px;
    text-align: center;
    border: 2px solid #ddd;
    border-radius: 4px;
  }
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 1rem;

  button {
    flex: 1;
    padding: 1rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-weight: bold;
    transition: background-color 0.2s;

    &.add-to-cart {
      background: white;
      border: 2px solid #333;
      color: #333;

      &:hover {
        background: #f5f5f5;
      }
    }

    &.buy-now {
      background: #333;
      color: white;

      &:hover {
        background: #444;
      }
    }
  }
`;

const SuggestedProducts = styled.div`
  h2 {
    margin-bottom: 1.5rem;
    color: #333;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 2rem;
  }
`;

const ProductCard = styled.div`
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-5px);
  }

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }

  .info {
    padding: 1rem;

    h3 {
      margin: 0 0 0.5rem;
      font-size: 1rem;
    }

    .price {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      .discount {
        background: #ff4444;
        color: white;
        padding: 0.2rem 0.5rem;
        border-radius: 4px;
        font-size: 0.8rem;
      }
    }
  }
`;

function ProductDetails() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number.parseInt(id, 10));
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedAge, setSelectedAge] = useState(product.ageCategories[0]);
  const [selectedQuantity, setSelectedQuantity] = useState(
    product.quantities[0]
  );
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <Container>
      <ProductContainer>
        <ProductImages>
          {product.images.map((image, index) => (
            <button
              key={`${product.id}-image-${index}`}
              type="button"
              onClick={() => setSelectedImage(index)}
              className={selectedImage === index ? "active" : ""}
              style={{
                padding: 0,
                border: "none",
                background: "none",
                width: "100%",
              }}
            >
              <img src={image} alt={`${product.name} view ${index + 1}`} />
            </button>
          ))}
        </ProductImages>

        <MainImage>
          <img src={product.images[selectedImage]} alt={product.name} />
        </MainImage>

        <ProductInfo>
          <h1>{product.name}</h1>
          <div className="rating">
            {"★".repeat(Math.floor(product.rating))}
            {"☆".repeat(5 - Math.floor(product.rating))} {product.rating}/5
          </div>

          <div className="price">
            <span>₹{product.price}</span>
            <span className="original-price">₹{product.originalPrice}</span>
            <span className="discount">-{product.discount}%</span>
          </div>

          <p>{product.description}</p>

          <OptionsContainer>
            <h3>Age Category</h3>
            <AgeOptions>
              {product.ageCategories.map((age) => (
                <button
                  key={age}
                  className={selectedAge === age ? "active" : ""}
                  onClick={() => setSelectedAge(age)}
                  type="button"
                >
                  {age}
                </button>
              ))}
            </AgeOptions>

            <h3>Quantity Size</h3>
            <QuantityOptions>
              {product.quantities.map((qty) => (
                <label
                  key={qty}
                  className={selectedQuantity === qty ? "active" : ""}
                >
                  <input
                    type="radio"
                    name="quantity"
                    value={qty}
                    checked={selectedQuantity === qty}
                    onChange={() => setSelectedQuantity(qty)}
                  />
                  {qty}
                </label>
              ))}
            </QuantityOptions>

            <h3>Amount</h3>
            <QuantityCounter>
              <button
                type="button"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              >
                -
              </button>
              <input
                type="number"
                value={quantity}
                onChange={(e) =>
                  setQuantity(
                    Math.max(1, Number.parseInt(e.target.value, 10) || 1)
                  )
                }
                min="1"
              />
              <button type="button" onClick={() => setQuantity((q) => q + 1)}>
                +
              </button>
            </QuantityCounter>

            <ActionButtons>
              <button type="button" className="add-to-cart">
                Add to Cart
              </button>
              <button type="button" className="buy-now">
                Buy Now
              </button>
            </ActionButtons>
          </OptionsContainer>
        </ProductInfo>
      </ProductContainer>

      <SuggestedProducts>
        <h2>You Might Also Like</h2>
        <div className="grid">
          {suggestedProducts.map((product) => (
            <ProductCard key={product.id}>
              <img src={product.image} alt={product.name} />
              <div className="info">
                <h3>{product.name}</h3>
                <div className="price">
                  <span>₹{product.price}</span>
                  <span className="discount">-{product.discount}%</span>
                </div>
              </div>
            </ProductCard>
          ))}
        </div>
      </SuggestedProducts>
    </Container>
  );
}

export default ProductDetails;
