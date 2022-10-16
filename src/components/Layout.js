// Layout component that can be used across all pages that share content. E.g Navbar and Footer

import React from "react";
import styled from "styled-components";

// component imports

import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <Container>
      <Navbar />
      {children}
    </Container>
  );
}

const Container = styled.div`
`;
