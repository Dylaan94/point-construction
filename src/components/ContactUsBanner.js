import React from "react";
import styled from "styled-components";

export default function ContactUsBanner() {
  return (
    <Container>
      <TextDiv>
        <p>Have a project in mind?</p>
      </TextDiv>
      <ContactDiv>
        <p>Contact us</p>
      </ContactDiv>
    </Container>
  );
}

const Container = styled.div`
  height: 180px;
  background-color: #ffed00;
  display: flex;
`;

const TextDiv = styled.div`
  width: 80%;
  align-self: center;
  margin-left: 2.5%;

  p {
    font-size: 36px;
    font-weight: 600;
  }
`;

const ContactDiv = styled.div`
  width: 20%;
  background-color: #120938;
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    color: #ffed00;
    font-size: 36px;
    font-weight: 600;
  }
`;
