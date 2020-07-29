import React, { useState, useEffect } from "react";
import { Toast, Image } from "react-bootstrap";

import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";

const GET_CURRENT_OFFER = gql`
  query {
    CurrentOffer(id: "currentOffer") {
      title
      image {
        asset {
          url
        }
      }
    }
  }
`;

const CurrentOffer = () => {
  const [show, setShow] = useState(false);
  const { loading, error, data } = useQuery(GET_CURRENT_OFFER);

  useEffect(() => {
    setTimeout(() => setShow(true), 3000);
  }, []);

  if (loading) return "Загрузка...";
  if (error) return `Ошибка! ${error.message}`;

  return (
    <Toast
      style={{ position: "fixed", bottom: 10, right: 10, zIndex: 9999 }}
      show={show}
      onClose={() => setShow(false)}
    >
      <Toast.Header>
        <strong className="mr-auto" style={{ color: "red" }}>
          {data.CurrentOffer.title}
        </strong>
      </Toast.Header>
      <Toast.Body>
        <Image
          src={data.CurrentOffer.image.asset.url + "?h=500&w=500&fit=min"}
          fluid
        />
      </Toast.Body>
    </Toast>
  );
};

export default CurrentOffer;
