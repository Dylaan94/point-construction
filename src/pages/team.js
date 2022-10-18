import React from "react";
import { SEO } from "../components/seo";

// component imports
import Layout from "../components/Layout";
import PlaceholderComponent from "../components/PlaceholderComponent";

export default function team() {
  return (
    <Layout>
      <PlaceholderComponent pageTitle={"Team"} />
    </Layout>
  );
}

export const Head = () => <SEO title="Team Page" />;
