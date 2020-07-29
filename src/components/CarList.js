import React from "react";
import { Container, Row } from "react-bootstrap";
import Car from "./Car";

const CarList = ({ title, description, cars }) => {
  return (
    <Container className="py-4">
      <h3>{title}</h3>
      <p>{description}</p>
      <Row>
        {cars.map((car, index) => (
          <Car key={index} car={car}></Car>
        ))}
      </Row>
    </Container>
  );
};

export default CarList;
