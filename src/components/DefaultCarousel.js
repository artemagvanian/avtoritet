import React from "react";
import { Carousel, Container } from "react-bootstrap";

function DefaultCarousel({ data }) {
  return (
    <Container className="mt-4">
      <Carousel>
        {data.map((item, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100"
              src={item.photo.asset.url + "?w=1280&h=800&fit=min"}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>{item.title}</h3>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
}

export default DefaultCarousel;
