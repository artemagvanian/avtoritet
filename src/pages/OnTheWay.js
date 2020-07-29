import React from "react";
import CarList from "../components/CarList";

import SEO from "../components/SEO";
import Layout from "../components/Layout";

import { useQuery } from "@apollo/react-hooks";

import gql from "graphql-tag";

const GET_ON_THE_WAY_PAGE = gql`
  query {
    OnTheWayPage(id: "onTheWayPage") {
      title
      description
      cars {
        brand
        model
        manufacturingYear
        engineDisplacement
        mileage
        gearbox
        fuelType
        driveType
        price
        sold
        description
        photos {
          asset {
            url
          }
        }
      }
    }
  }
`;

const OnTheWay = () => {
  const { loading, error, data } = useQuery(GET_ON_THE_WAY_PAGE);

  if (loading) return "Загрузка...";
  if (error) return `Ошибка! ${error.message}`;

  return (
    <Layout>
      <SEO title={data.OnTheWayPage.title} />
      <CarList
        title={data.OnTheWayPage.title}
        description={data.OnTheWayPage.description}
        cars={data.OnTheWayPage.cars}
      />
    </Layout>
  );
};

export default OnTheWay;
