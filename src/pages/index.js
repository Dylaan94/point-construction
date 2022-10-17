import * as React from "react";
import styled from "styled-components";

// component imports
import Layout from "../components/Layout";
import MainSection from "../components/MainSection";
import WelcomeSection from "../components/WelcomeSection";
import ContactUsBanner from "../components/ContactUsBanner";
import CustomSlider from "../components/CustomCarousel";
import CustomTextSection from "../components/CustomTextSection";

const IndexPage = () => {
  return (
    <Layout>
      <MainSection />
      <WelcomeSection />
      <CustomSlider />
      <CustomTextSection />
      <ContactUsBanner />
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
