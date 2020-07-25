import React from "react";
import { Container } from "react-bootstrap";

const Footer = () => (
  <footer className="bg-dark text-light mt-5 py-3">
    <Container>
      <div>&copy; Avtoritet, 2020</div>
      <div>
        По вопросам смежных и авторских прав можно обратиться по телефонам +380
        96 219 65 81, +380 99 256 17 17
      </div>
      <div>
        Icons made by{" "}
        <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
          Freepik
        </a>{" "}
        from{" "}
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
      </div>
    </Container>
  </footer>
);

export default Footer;
