import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

export default function MainSection() {
  return (
    <>
      <Container>
        <TextDiv>
          <TagLine>creating genuinely affordable housing</TagLine>
          <SubTagLine>making a difference to communities</SubTagLine>
        </TextDiv>
        {/* Styled Link redirects to project page */}
        <SectionFooter>
          <StyledLink to="/projects">SEE OUR PROJECTS</StyledLink>
        </SectionFooter>
      </Container>
    </>
  );
}

const Container = styled.div`
  background: #09041c;
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

/* Text div is flexed 80% across main container. The two text divs are aligned at flex-start and flex-end 
to create the effect given in the figma document.

Tag and SubTag are seperated so that sizing can be adjusted when on mobile
*/

const TextDiv = styled.div`
  width: 80%;
  height: 95%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  p {
    margin: 10px;
  }
`;

const TagLine = styled.p`
  color: white;
  font-size: 50px;
  font-weight: 300;
  align-self: flex-start;

  // fly in animation
  animation: flyInLeft 0.8s linear;
  @keyframes flyInLeft {
    0% {
      transform: translateX(-200%);
    }
    100% {
      transform: translateX(0%);
    }
  }

  // media queries for responsiveness
  @media screen and (max-width: 1130px) {
    font-size: 40px;
    align-self: center;
    width: auto;
    margin-left: auto;
    margin-right: auto;
  }

  @media screen and (max-width: 920px) {
    font-size: 32px;
  }
`;

const SubTagLine = styled.p`
  color: white;
  font-size: 50px;
  font-weight: 300;
  align-self: flex-end;
  text-align: right;

  // fly in animation
  animation: flyInRight 0.8s linear;
  @keyframes flyInRight {
    0% {
      transform: translateX(200%);
    }
    100% {
      transform: translateX(0%);
    }
  }

  // media queries for responsiveness
  @media screen and (max-width: 1130px) {
    font-size: 40px;
    align-self: center;
    text-align: left;
    margin-left: auto;
    margin-right: auto;
  }

  @media screen and (max-width: 920px) {
    font-size: 24px;
  }
`;

const SectionFooter = styled.div`
  height: 10%;
  display: flex;
  align-items: center;

  // fade in animation. Fades in slightly after main text animation finishes
  animation: fadeIn 3s;
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 16px;
  font-weight: 300;

  :visited {
    color: white;
  }

  :hover {
    opacity: 0.8;
    cursor: pointer;
  }
`;
