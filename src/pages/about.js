import React from "react";
import { SEO } from "../components/seo";

// component imports
import Layout from "../components/Layout";
import PlaceholderComponent from "../components/PlaceholderComponent";

export default function about() {
  return (
    <Layout>
      <PlaceholderComponent pageTitle={"About Us"} />
    </Layout>
  );
}

export const Head = () => <SEO title="About Us Page" />;
