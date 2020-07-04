import React, { useCallback } from "react";

import Layout from "../components/Layout";
import DefaultCarousel from "../components/DefaultCarousel";
import SEO from "../components/SEO";

import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";

import { Col, Row, Container, Image } from "react-bootstrap";
import BlockContent from "@sanity/block-content-to-react";

import mapboxgl from "mapbox-gl";

import "./Home.scss";

const GET_HOME_PAGE = gql`
  query {
    HomePage(id: "homePage") {
      descriptionRaw
      descriptionImage {
        asset {
          url
        }
      }
      carousel {
        title
        photo {
          asset {
            url
          }
        }
      }
    }
  }
`;

function Home() {
  const { loading, error, data } = useQuery(GET_HOME_PAGE);

  const mapContainer = useCallback((element) => {
    if (element != null) {
      var map = new mapboxgl.Map({
        container: element,
        style: "mapbox://styles/mapbox/streets-v11",
        center: [37.518999, 47.091617],
        zoom: 16,
      });

      var el = document.createElement("div");
      el.className = "marker";

      new mapboxgl.Marker(el).setLngLat([37.518999, 47.091617]).addTo(map);
    }
  }, []);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return (
    <Layout>
      <SEO title="Главная" />
      <DefaultCarousel data={data.HomePage.carousel} />
      <Container className="my-5">
        <h1 style={{ textAlign: "center" }}>О нас</h1>
        <Row className="my-5">
          <Col xs={12} md={6}>
            <BlockContent blocks={data.HomePage.descriptionRaw} />
          </Col>
          <Col xs={12} md={6}>
            <Image
              className="w-100"
              src={
                data.HomePage.descriptionImage.asset.url +
                "?h=1000&w=1000&fit=min"
              }
            ></Image>
          </Col>
        </Row>
      </Container>
      <Container className="my-5">
        <h1 className="text-center">Как нас можно найти</h1>
        <p className="text-center lead">ул. Бахчиванджи 24а, Мариуполь</p>
        <div className="my-5">
          <div
            ref={mapContainer}
            style={{
              width: "100%",
              height: 500,
            }}
          />
        </div>
      </Container>
    </Layout>
  );
}
export default Home;
