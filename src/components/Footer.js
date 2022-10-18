import React from "react";
import styled from "styled-components";

export default function Footer() {
  return (
    <Root>
      <Container>
        <Section>
          <Header>Point Construction</Header>
          <UList>
            <ListItem>Point Construction</ListItem>
            <ListItem>15 The Point</ListItem>
            <ListItem>Nottingham</ListItem>
            <ListItem>NG1 1LL</ListItem>
          </UList>
        </Section>
        <Section>
          <Header>Our Services</Header>
          <UList>
            <ListItem>New Builds</ListItem>
            <ListItem>Landscaping</ListItem>
            <ListItem>Apartment Blocks</ListItem>
            <ListItem>Residental Refurbishment</ListItem>
          </UList>
        </Section>
        <Section>
          <Header>About Us</Header>
          <UList>
            <ListItem>Our History</ListItem>
            <ListItem>Our Team</ListItem>
            <ListItem>Our Ethos</ListItem>
          </UList>
        </Section>
        <Section>
          <Header>Contact Us</Header>
          <UList>
            <ListItem>0115 971 8908</ListItem>
            <ListItem>
              <a href="mailto:sales@point.co.uk">sales@point.co.uk</a>
            </ListItem>
          </UList>
        </Section>
      </Container>
    </Root>
  );
}

const Root = styled.div`
  display: flex;
  justify-content: center;
  background-color: #09041c;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  width: 90%;
  margin: 30px 0px;

  @media screen and (max-width: 800px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

const Section = styled.section`
  color: white;
`;

const Header = styled.h2`
  font-size: 20px;
  font-weight: 600;
  padding: 20px 0px;

  @media screen and (max-width: 550px) {
    font-size: 16px;
  }
`;

const UList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const ListItem = styled.li`
  font-size: 16px;
  font-weight: 400;
  padding: 10px 0px;

  a {
    color: white;
  }

  a:link {
    text-decoration: none;
  }

  a:visited {
    color: white;
  }

  @media screen and (max-width: 550px) {
    font-size: 14px;
  }
`;
