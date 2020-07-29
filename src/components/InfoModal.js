import React from "react";
import { Modal, Button, Row, Col } from "react-bootstrap";

import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";

const LINKS_QUERY = gql`
  query {
    HomePage(id: "homePage") {
      mediaLinks {
        icon {
          asset {
            url
          }
        }
        link
      }
    }
  }
`;

const InfoModal = ({ show, handleClose }) => {
  const { loading, error, data } = useQuery(LINKS_QUERY);

  if (loading) return "Загрузка...";
  if (error) return `Ошибка! ${error.message}`;

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Узнать больше</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          Для того, чтобы узнать дополнительную информацию, позвоните по одному
          из номеров, предоставленных ниже
        </p>
        <p className="display-4">+380 96 219 65 81</p>
        <p className="display-4">+380 99 256 17 17</p>
        <Row>
          {data.HomePage.mediaLinks.map((media, index) => (
            <Col key={index}>
              <a href={media.link}>
                <img
                  width={64}
                  height={64}
                  className="mx-auto d-block"
                  src={media.icon.asset.url + "?h=64&w=64&fit=min"}
                  alt="Generic placeholder"
                />
              </a>
            </Col>
          ))}
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleClose}>
          Закрыть
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default InfoModal;
