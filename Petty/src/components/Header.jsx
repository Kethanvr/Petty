import { Link } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: #7e22ce;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 1rem;
  }
`;

const Logo = styled.div`
  h1 {
    font-family: "Indie Flower", cursive;
    font-size: 2.5rem;
    color: white;
    margin: 0;
  }
`;

const SearchBar = styled.div`
  flex: 1;
  max-width: 600px;
  margin: 0 2rem;
  position: relative;

  input {
    width: 100%;
    padding: 0.8rem 1rem 0.8rem 2.5rem;
    border-radius: 25px;
    border: none;
    font-size: 1rem;
    background: white;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

    &::placeholder {
      color: #666;
    }
  }

  .search-icon {
    position: absolute;
    left: 1rem;
    top: 50%;
    transform: translateY(-50%);
    color: #666;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin: 1rem 0;
  }
`;

const Nav = styled.nav`
  ul {
    display: flex;
    list-style: none;
    gap: 2rem;
    margin: 0;
    padding: 0;

    li {
      a {
        color: white;
        text-decoration: none;
        font-size: 1rem;
        font-weight: 500;
        transition: color 0.3s;

        &:hover {
          color: rgba(255, 255, 255, 0.8);
        }
      }
    }

    @media (max-width: 768px) {
      flex-direction: column;
      gap: 1rem;
    }
  }
`;

const Profile = styled.div`
  background-color: white;
  padding: 0.6rem 1.2rem;
  border-radius: 25px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #f0f0f0;
  }

  .profile-icon {
    color: #333;
    font-size: 0.9rem;
  }
`;

function Header() {
  return (
    <HeaderContainer>
      <Logo>
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <h1>Petty</h1>
        </Link>
      </Logo>

      <SearchBar>
        <FontAwesomeIcon icon={faSearch} className="search-icon" />
        <input
          type="text"
          placeholder="Search high quality foods for your lovely pets"
        />
      </SearchBar>

      <Nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About us</Link>
          </li>
          <li>
            <Link to="/contact">Contact us</Link>
          </li>
          <li>
            <Link to="/careers">Work with us</Link>
          </li>
        </ul>
      </Nav>

      <Profile>
        <span className="profile-icon">signup/login</span>
      </Profile>
    </HeaderContainer>
  );
}

export default Header;
