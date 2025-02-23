import { Link } from "react-router-dom";
import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: black;
  color: white;
  padding: 20px 40px;
  display: flex;
  justify-content: space-between;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

const FooterLinks = styled.div`
  a {
    color: white;
    margin-right: 20px;
    text-decoration: none;

    &:hover {
      color: #ffffff;
    }
  }

  @media (max-width: 480px) {
    margin-bottom: 10px;
  }
`;

const FooterLogo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  @media (max-width: 480px) {
    align-items: center;
  }
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterLinks>
        <Link to="/help" className="bottom-link">
          Help
        </Link>
        <Link to="/contact" className="bottom-link">
          Contact us
        </Link>
        <Link to="/about" className="bottom-link">
          About us
        </Link>
        <Link to="/careers" className="bottom-link">
          Work with us
        </Link>
      </FooterLinks>
      <FooterLogo>
        <p>©Petty {new Date().getFullYear()}</p>
      </FooterLogo>
    </FooterContainer>
  );
}

export default Footer;
