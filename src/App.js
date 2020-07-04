import React from "react";
import { SiteRouter } from "./components/Routing";

import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";

import mapboxgl from "mapbox-gl";

import "./App.scss";

const client = new ApolloClient({
  uri: "https://qo48dfrl.apicdn.sanity.io/v1/graphql/production/default",
});

mapboxgl.accessToken =
  "pk.eyJ1IjoiYXZhbmdsaW9uNTkiLCJhIjoiY2pibDF6enpuNGc5dDJxcWdiZDRpcDU0bSJ9.BQztSi6LFVuqmISRRRiD9g";

export default function App() {
  return (
    <ApolloProvider client={client}>
      <SiteRouter />
    </ApolloProvider>
  );
}
