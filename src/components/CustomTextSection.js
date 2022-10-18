import React from "react";
import styled from "styled-components";
import { InView } from "react-intersection-observer";

export default function CustomTextSection() {
  const startAnimations = () => {
    // text animation
    let text = document.getElementById("customText-text");
    text.animate(
      [
        // keyframes
        { opacity: 0 },
        { opacity: 1 },
      ],
      { duration: 1500 }
    );
  };

  return (
    <Root>
      <Container>
        <InView
          as="div"
          triggerOnce={true}
          onChange={(inView) =>
            inView ? startAnimations() : console.log("Inview: ", inView)
          }
        >
          <Text id="customText-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            luctus quam eu, senectus id. Tempus mauris mi vel adipiscing tempus.
            Malesuada est convallis purus ut. Dignissim curabitur eget dignissim
            tellus ut amet. Eleifend duis vestibulum maecenas ac aliquam nunc.
            Magna aliquet auctor luctus risus pellentesque blandit tincidunt
            auctor.
          </Text>
        </InView>
      </Container>
    </Root>
  );
}

const Root = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 400px;

  @media screen and (max-width: 550px) {
    height: auto;
  }
`;

const Container = styled.div`
  width: 50%;

  @media screen and (max-width: 920px) {
    width: 80%;
  }
`;

const Text = styled.p`
  font-size: 24px;
  font-weight: 600;

  @media screen and (max-width: 920px) {
    text-align: center;
    font-size: 20px;
  }

  @media screen and (max-width: 550px) {
    font-size: 16px;
  }
`;
