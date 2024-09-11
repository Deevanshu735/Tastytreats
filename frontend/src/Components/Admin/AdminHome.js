import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const cardStyle = {
  margin: "1rem",
  borderRadius: "0px",
  height: "5rem",
  marginTop: "2rem",
  boxShadow: "0px 1px 6px grey",
};

export default function AdminHome({ onSelectSection }) {
  return (
    <Container>
      <Row xs={12}>
        <Col xs={6}>
          <Card
            className="w-75"
            style={cardStyle}
            onClick={() => onSelectSection("users")}
          >
            <Card.Body className="pt-1">
              <p className="fs-4 mt-3 text-center text-danger">All Users</p>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={6}>
          <Card
            className="w-75"
            style={cardStyle}
            onClick={() => onSelectSection("managemenu")}
          >
            <Card.Body className="pt-1">
              <p className="fs-4 mt-3 text-center text-danger">Manage Menu</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row xs={12}>
        <Col xs={6}>
          <Card
            className="w-75"
            style={cardStyle}
            onClick={() => onSelectSection("order")}
          >
            <Card.Body className="pt-1">
              <p className="fs-4 mt-3 text-center text-danger">Order</p>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={6}>
          <Card
            className="w-75"
            style={cardStyle}
            onClick={() => onSelectSection("reservation")}
          >
            <Card.Body className="pt-1">
              <p className="fs-4 mt-3 text-center text-danger">Reservation</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
