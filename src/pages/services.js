import React from "react";
import { SEO } from "../components/seo";

// component imports
import Layout from "../components/Layout";
import PlaceholderComponent from "../components/PlaceholderComponent";

export default function services() {
  return (
    <Layout>
      <PlaceholderComponent pageTitle={"Our Services"} />
    </Layout>
  );
}

export const Head = () => <SEO title="Services Page" />;