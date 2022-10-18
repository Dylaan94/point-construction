import React from "react";
import { SEO } from "../components/seo";

// component imports
import Layout from "../components/Layout";
import PlaceholderComponent from "../components/PlaceholderComponent";

export default function contact() {
  return (
    <Layout>
      <PlaceholderComponent pageTitle={"Contact Us"} />
    </Layout>
  );
}

export const Head = () => <SEO title="Contact Us Page" />;