import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

// image imports

import logo from "../images/logo.svg";

export default function Navbar() {
  return (
    <Nav>
      <Container>
        <LogoDiv>
          <Logo src={logo}></Logo>
        </LogoDiv>
        <Links>
          <StyledLink to="/services">Our Services</StyledLink>
          <StyledLink to="/about"> About Us </StyledLink>
          <StyledLink to="/team"> Our Team </StyledLink>
          <StyledLink to="/projects"> Projects </StyledLink>
          <StyledLink to="/contact"> Contact Us </StyledLink>
        </Links>
        <CallUs>Call us today: 0115 971 8908</CallUs>
      </Container>
    </Nav>
  );
}

const Nav = styled.nav`
  background: #09041c;
  position: sticky;
  top: 0;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 150px;
  width: 100%;
`;

const LogoDiv = styled.div`
  width: 22.5%;
`;

const Logo = styled.img`
  height: 63px;
`;

const Links = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 50%;
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 16px;
  font-weight: 400;

  :visited {
    color: white;
  }

  :hover {
    opacity: 0.8;
  }
`;

const CallUs = styled.p`
  color: white;
  font-size: 16px;
  font-weight: 600;
  width: 22.5%;
  text-align: right;
`;
