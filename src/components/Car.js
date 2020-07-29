import React from "react";

import { Card, ListGroup, Col, Carousel } from "react-bootstrap";

import SoldImage from "../assets/sold.png";

import { IconContext } from "react-icons";
import {
  FaCalendarAlt,
  FaTachometerAlt,
  FaGasPump,
  FaCar,
  FaTruckMonster,
  FaCogs,
  FaHandHoldingUsd,
} from "react-icons/fa";

const Car = ({ car }) => {
  return (
    <Col xs={12} sm={6} md={4} className="my-3">
      <Card style={{ position: "relative" }}>
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: `url("${SoldImage}")`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            zIndex: 999,
            borderRadius: 5,
            color: "white",
            textAlign: "center",
            fontSize: 25,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            visibility: car.sold ? "visible" : "hidden",
          }}
        />
        <Carousel indicators={false}>
          {car.photos.map((photo, index) => (
            <Carousel.Item key={index}>
              <img
                className="d-block w-100"
                src={photo.asset.url + "?h=360&w=640&fit=min"}
                alt=""
              />
            </Carousel.Item>
          ))}
        </Carousel>
        <Card.Body>
          <Card.Title>
            {car.brand} {car.model}
          </Card.Title>
          <Card.Text>{car.description}</Card.Text>
        </Card.Body>
        <ListGroup>
          <ListGroup.Item>
            <IconContext.Provider value={{ style: { marginRight: "0.75em" } }}>
              <FaCalendarAlt />
            </IconContext.Provider>
            Год выпуска: {car.manufacturingYear}
          </ListGroup.Item>
          <ListGroup.Item>
            <IconContext.Provider value={{ style: { marginRight: "0.75em" } }}>
              <FaCar />
            </IconContext.Provider>
            Объём двигателя: {car.engineDisplacement}
          </ListGroup.Item>
          <ListGroup.Item>
            <IconContext.Provider value={{ style: { marginRight: "0.75em" } }}>
              <FaTachometerAlt />
            </IconContext.Provider>
            Пробег: {car.mileage} км
          </ListGroup.Item>
          <ListGroup.Item>
            <IconContext.Provider value={{ style: { marginRight: "0.75em" } }}>
              <FaGasPump />
            </IconContext.Provider>
            Тип топлива: {car.fuelType}
          </ListGroup.Item>
          <ListGroup.Item>
            <IconContext.Provider value={{ style: { marginRight: "0.75em" } }}>
              <FaCogs />
            </IconContext.Provider>
            КПП: {car.gearbox}
          </ListGroup.Item>
          <ListGroup.Item>
            <IconContext.Provider value={{ style: { marginRight: "0.75em" } }}>
              <FaTruckMonster />
            </IconContext.Provider>
            Тип привода: {car.driveType}
          </ListGroup.Item>
          <ListGroup.Item>
            <IconContext.Provider value={{ style: { marginRight: "0.75em" } }}>
              <FaHandHoldingUsd />
            </IconContext.Provider>
            <b>Цена: {car.price}$</b>
          </ListGroup.Item>
        </ListGroup>
      </Card>
    </Col>
  );
};

export default Car;
