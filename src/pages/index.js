import * as React from "react";
import styled from "styled-components";

// component imports
import Layout from "../components/Layout";

const IndexPage = () => {
  return (
    <Layout>
      <h1> This is the Index Page! hey</h1>
      <Para>hello there this a test</Para>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;

const Para = styled.p`
  font-size: 100px;
  font-weight: 300;
`;
