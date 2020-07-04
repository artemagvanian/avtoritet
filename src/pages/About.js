import React from "react";
import { Container, Image } from "react-bootstrap";

import SEO from "../components/SEO";
import Layout from "../components/Layout";

import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";

import BlockContent from "@sanity/block-content-to-react";

const GET_ABOUT_PAGE = gql`
  query {
    AboutPage(id: "aboutPage") {
      title
      descriptionRaw
      upperBanner {
        asset {
          url
        }
      }
      lowerBanner {
        asset {
          url
        }
      }
    }
  }
`;

function About() {
  const { loading, error, data } = useQuery(GET_ABOUT_PAGE);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return (
    <Layout>
      <SEO title="О нас" />
      <Container>
        <div className="my-4 bg-secondary p-3 rounded">
          <h1 className="text-center mt-4 d-block display-1">
            {data.AboutPage.title}
          </h1>
          <Image
            className="w-100 my-4"
            src={data.AboutPage.upperBanner.asset.url}
          />
          <BlockContent blocks={data.AboutPage.descriptionRaw} />
          <Image
            className="w-100 my-4"
            src={data.AboutPage.lowerBanner.asset.url}
          />
        </div>
      </Container>
    </Layout>
  );
}

export default About;
