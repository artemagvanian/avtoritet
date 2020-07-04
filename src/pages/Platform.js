import React from "react";
import CarList from "../components/CarList";

import SEO from "../components/SEO";
import Layout from "../components/Layout";

function Platform() {
  return (
    <Layout>
      <SEO title="Автоплощадка" />
      <CarList />
    </Layout>
  );
}

export default Platform;
