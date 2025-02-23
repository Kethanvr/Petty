import { Link } from "react-router-dom";
import styled from "styled-components";

const Main = styled.main`
  display: flex;
  justify-content: space-between;
  padding: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 20px;
  }
`;

const Intro = styled.section`
  max-width: 600px;

  h2 {
    font-size: 48px;
    font-weight: bold;
    color: #222;
    margin-bottom: 20px;

    @media (max-width: 480px) {
      font-size: 32px;
    }
  }

  p {
    font-size: 18px;
    margin-bottom: 20px;
    color: #666;

    @media (max-width: 480px) {
      font-size: 16px;
    }
  }

  button {
    padding: 15px 30px;
    background: #7e22ce;
    color: rgb(255, 253, 253);
    border: none;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      background: #6b21a8;
      color: black;
    }
  }
`;

const ArtGrid = styled.section`
  background-color: #d7b3ff;
  border-radius: 30px;
  padding: 20px;

  .grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;

    @media (max-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 480px) {
      grid-template-columns: 1fr;
    }
  }
`;

const ArtBox = styled.div`
  width: 250px;
  height: 250px;
  background: #eee;
  border-radius: 20px;
  overflow: hidden;

  @media (max-width: 480px) {
    width: 100%;
    height: auto;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 20px;
  }
`;

function Home() {
  return (
    <Main>
      <Intro>
        <h2>Introducing Petty</h2>
        <p>
          When it comes to buy food for yours pets its always a difficult choice
          for us to buy food with high quality and at a resonale price but if
          you are at this sitution then worry not
        </p>
        <p>
          Because "Petty offers you High Quality Pet Foods With An Affordable
          Cost" so no more confusion from here now just click here👇 check out
          our products
        </p>
        <Link to="/products">
          <button type="button" id="browse-button">
            Browse Petty
          </button>
        </Link>
      </Intro>

      <ArtGrid>
        <div className="grid">
          <ArtBox>
            <img
              src="https://www.wiggles.in/cdn/shop/products/2RightNutritioncopy-100.jpg?v=1706864496&width=1445"
              alt="Pet Food 1"
            />
          </ArtBox>
          <ArtBox>
            <img
              src="https://petsnpets.com/cdn/shop/files/MiowMiowAdultTunaFishCatFood1.2kg.png?v=1716185686&width=1000"
              alt="Pet Food 2"
            />
          </ArtBox>
          <ArtBox>
            <img
              src="https://m.media-amazon.com/images/I/81vGiZuZbhL._AC_UF1000,1000_QL80_.jpg"
              alt="Pet Food 3"
            />
          </ArtBox>
          <ArtBox>
            <img
              src="https://5.imimg.com/data5/ECOM/Default/2024/1/378810208/RF/HJ/GK/12142841/71krmfpgpjl-sx679.jpg"
              alt="Pet Food 4"
            />
          </ArtBox>
          <ArtBox>
            <img
              src="https://m.media-amazon.com/images/I/71MyS7BUCgL.jpg"
              alt="Pet Food 5"
            />
          </ArtBox>
          <ArtBox>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6BqpASnBJrw8ZnGpYLLWkgQyPvvXoOiP4cQ&s"
              alt="Pet Food 6"
            />
          </ArtBox>
        </div>
      </ArtGrid>
    </Main>
  );
}

export default Home;
