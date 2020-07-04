import React from "react";
import { Modal, Button } from "react-bootstrap";

const InfoModal = ({ show, handleClose }) => (
  <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>Узнать больше</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <p>
        Для того, чтобы узнать дополнительную информацию, позвоните по одному из
        номеров, предоставленных ниже
      </p>
      <p className="display-4">+380 96 219 65 81</p>
      <p className="display-4">+380 99 256 17 17</p>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="primary" onClick={handleClose}>
        Закрыть
      </Button>
    </Modal.Footer>
  </Modal>
);

export default InfoModal;
