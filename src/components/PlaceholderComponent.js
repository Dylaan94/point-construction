/* Placeholder Component to demonstrate routing functionality */

import React from "react";
import styled from "styled-components";

// image import
import sampleImage from "../images/sampleImage.png";

export default function PlaceholderComponent({ pageTitle }) {
  return (
    <Root>
      <Container>
        <Header>
          {" "}
          This is a Placeholder Component for the {pageTitle} Page
        </Header>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          luctus quam eu, senectus id. Tempus mauris mi vel adipiscing tempus.
          Malesuada est convallis purus ut. Dignissim curabitur eget dignissim
          tellus ut amet. Eleifend duis vestibulum maecenas ac aliquam nunc.
          Magna aliquet auctor luctus risus pellentesque blandit tincidunt
          auctor. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Aliquam luctus quam eu, senectus id. Tempus mauris mi vel adipiscing
          tempus. Malesuada est convallis purus ut. Dignissim curabitur eget
          dignissim tellus ut amet. Eleifend duis vestibulum maecenas ac aliquam
          nunc. Magna aliquet auctor luctus risus pellentesque blandit tincidunt
          auctor.
        </Text>
        <Image src={sampleImage} />
      </Container>
    </Root>
  );
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px 0px;

  @media screen and (max-width: 1100px) {
    text-align: center;
  }
`;

const Header = styled.h2`
  font-size: 32px;
  font-weight: 600;

  @media screen and (max-width: 550px) {
    font-size: 28px;
  }
`;

const Text = styled.p`
  font-size: 16px;
  font-weight: 400;
  padding: 20px 0px;

  @media screen and (max-width: 550px) {
    font-size: 14px;
  }
`;

const Image = styled.img`
  width: 50%;
  padding: 20px 0px;

  @media screen and (max-width: 1100px) {
    width: 80%;
  }

  @media screen and (max-width: 550px) {
    width: 100%;
  }
`;
