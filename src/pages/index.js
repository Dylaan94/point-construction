import * as React from "react";
import styled from "styled-components";

// component imports
import Layout from "../components/Layout";
import MainSection from "../components/MainSection";

const IndexPage = () => {
  return (
    <Layout>
      <MainSection />
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;

