import React from "react";
import { SEO } from "../components/seo";

// component imports
import Layout from "../components/Layout";
import PlaceholderComponent from "../components/PlaceholderComponent";

export default function projects() {
  return (
    <Layout>
      <PlaceholderComponent pageTitle={"Projects"} />
    </Layout>
  );
}

export const Head = () => <SEO title="Projects Page" />;