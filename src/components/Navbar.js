/* Nav bar that utilises Gatsby-Link for page navigation.
Clicking the point construction logo will return to home page
Hovering over links will reduce opacity

When screen size hits 1100px, will render mobile version
*/

import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";


// image imports
import logo from "../images/logo.svg";
import phone from "../images/phone.svg";
import hamburger from "../images/hamburger.svg";

export default function Navbar() {
  return (
    <Nav>
      <Container>
        <LogoDiv id="logo-div">
          <Link to="/">
            <Logo src={logo}></Logo>
          </Link>
        </LogoDiv>
        <Links id="links-div">
          <StyledLink to="/services">Our Services</StyledLink>
          <StyledLink to="/about"> About Us </StyledLink>
          <StyledLink to="/team"> Our Team </StyledLink>
          <StyledLink to="/projects"> Projects </StyledLink>
          <StyledLink to="/contact"> Contact Us </StyledLink>
          {/* For mobile */}
          <HamburgerImg src={hamburger} />
        </Links>
        <CallUs id="call-div">
          <p>Call us today: 0115 971 8908</p>
          {/* For mobile */}
          <PhoneImg src={phone} />
        </CallUs>
      </Container>
    </Nav>
  );
}

// styled components

const Nav = styled.nav`
  background: #09041c;
  position: sticky;
  top: 0;
  z-index: 99; // ensures nav does not get stuck behind any other elements
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 150px;
  width: 100%;

  // Fade in animation
  animation: fadeIn 0.9s;
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  // media queries for responsiveness
  @media screen and (max-width: 1100px) {
    // reorders divs when scaling down to mobile

    min-height: 100px;

    #logo-div {
      order: 1;
    }

    #links-div {
      order: 0;
    }

    #call-div {
      order: 2;
    }
  }
`;

const LogoDiv = styled.div`
  width: 22.5%;

  // media queries for responsiveness
  @media screen and (max-width: 1100px) {
    width: 50%;
    display: flex;
    justify-content: center;
  }
`;

const Logo = styled.img`
  height: 63px;

  // media queries for responsiveness
  @media screen and (max-width: 1100px) {
    height: 34px;
  }
`;

const Links = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 50%;

  // media queries for responsiveness
  @media screen and (max-width: 1100px) {
    // hides links and adjusts sizing on mobile
    width: 20%;
    justify-content: flex-start;
    a {
      display: none;
    }
  }
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

const CallUs = styled.div`
  color: white;
  font-size: 16px;
  font-weight: 600;
  width: 22.5%;
  text-align: right;

  // media queries for responsiveness
  @media screen and (max-width: 1100px) {
    width: 20%;
    p {
      display: none;
    }
  }
`;

// Mobile Icons Styling

const PhoneImg = styled.img`
  display: none;

  // media queries for responsiveness
  @media screen and (max-width: 1100px) {
    display: inline;
    height: 24px;
  }
`;

const HamburgerImg = styled.img`
  display: none;

  // media queries for responsiveness
  @media screen and (max-width: 1100px) {
    display: inline;
    height: 20px;
  }
`;
