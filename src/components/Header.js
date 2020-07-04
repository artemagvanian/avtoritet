import React, { useState } from "react";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import { Link } from "@reach/router";
import InfoModal from "./InfoModal";

import { routes } from "./Routing";

const Header = () => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <header>
      <Navbar bg="dark" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand className="text-light">
            <Link to="/" style={{ color: "white" }}>
              Avtoritet
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              {routes.map((link, index) => (
                <Link
                  to={link.route}
                  key={index}
                  className="text-light ml-4 my-2 d-block"
                >
                  {link.title}
                </Link>
              ))}
            </Nav>
            <div>
              <Button
                className="ml-lg-3 ml-0 my-2"
                block
                onClick={() => setShowInfo(true)}
              >
                Свяжитесь с нами
              </Button>
              <InfoModal
                show={showInfo}
                handleClose={() => setShowInfo(false)}
              />
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
