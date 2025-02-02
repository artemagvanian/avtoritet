import React from "react";
import CarList from "../components/CarList";

import SEO from "../components/SEO";
import Layout from "../components/Layout";

import { useQuery } from "@apollo/react-hooks";

import gql from "graphql-tag";

const GET_PLATFORM_PAGE = gql`
  query {
    PlatformPage(id: "platformPage") {
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

const Platform = () => {
  const { loading, error, data } = useQuery(GET_PLATFORM_PAGE);

  if (loading) return "Загрузка...";
  if (error) return `Ошибка! ${error.message}`;

  return (
    <Layout>
      <SEO title={data.PlatformPage.title} />
      <CarList
        title={data.PlatformPage.title}
        description={data.PlatformPage.description}
        cars={data.PlatformPage.cars}
      />
    </Layout>
  );
};

export default Platform;
