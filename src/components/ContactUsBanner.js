/* Component for the 'Have a project in mind?' banner. 
At 800px the contact us button will be positioned under the text as in the design
'Contact us' is rendered as a gatsby link so will link to the contact page when clicked
*/

import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { InView } from "react-intersection-observer";

export default function ContactUsBanner() {
  const startAnimations = () => {
    // banner animation
    let banner = document.getElementById("contactUs-banner");
    banner.animate(
      [
        // keyframes
        { opacity: 0 },
        { opacity: 1 },
      ],
      { duration: 800 }
    );
  };

  return (
    <InView
      as="div"
      triggerOnce={true}
      onChange={(inView) =>
        inView ? startAnimations() : console.log("Inview: ", inView)
      }
    >
      <Container id="contactUs-banner">
        <TextDiv>
          <p>Have a project in mind?</p>
        </TextDiv>
        <ContactDiv>
          <StyledLink to="/contact">
            <p>Contact us</p>
          </StyledLink>
        </ContactDiv>
      </Container>
    </InView>
  );
}

const Container = styled.div`
  height: 180px;
  background-color: #ffed00;
  display: flex;

  @media screen and (max-width: 800px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const TextDiv = styled.div`
  width: 80%;
  align-self: center;
  margin-left: 2.5%;

  p {
    font-size: 36px;
    font-weight: 600;

    @media screen and (max-width: 1100px) {
      font-size: 24px;
    }
  }

  @media screen and (max-width: 800px) {
    text-align: center;
    margin: 20px;
  }
`;

const ContactDiv = styled.div`
  width: 20%;
  background-color: #120938;

  p {
    color: #ffed00;
    font-size: 36px;
    font-weight: 600;

    @media screen and (max-width: 1100px) {
      font-size: 20px;
    }
  }

  @media screen and (max-width: 800px) {
    height: 75px;
    width: 220px;
    margin-bottom: 10px;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  :visited {
    color: #ffed00;
  }
`;
