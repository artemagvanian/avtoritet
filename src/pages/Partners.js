import React from "react";
import { Container, Card, Row, Col, Button } from "react-bootstrap";
import Layout from "../components/Layout";
import SEO from "../components/SEO";

import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";

const GET_PARTNER_PAGE = gql`
  query {
    PartnerPage(id: "partnerPage") {
      partners {
        title
        description
        link
        linkText
        image {
          asset {
            url
          }
        }
      }
    }
  }
`;

const Partners = () => {
  const { loading, error, data } = useQuery(GET_PARTNER_PAGE);

  if (loading) return "Загрузка...";
  if (error) return `Ошибка! ${error.message}`;

  return (
    <Layout>
      <SEO title="Партнёры" />
      <Container>
        <Row>
          {data.PartnerPage.partners.map((partner, index) => (
            <Col key={index} xs={12} sm={6} md={4} style={{ margin: "15px 0" }}>
              <Card>
                <Card.Img
                  src={partner.image.asset.url + "?h=500&w=500&fit=min"}
                  alt=""
                />
                <Card.Body>
                  <Card.Title className="text-center">
                    {partner.title}
                  </Card.Title>
                  <Button
                    block
                    className="my-4"
                    href={partner.link}
                    target="_blank"
                  >
                    {partner.linkText}
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </Layout>
  );
};

export default Partners;
