import React from "react";
import { Container, Row, Nav, Card } from "react-bootstrap"; // Combined import

import v1 from "./project/v1.png";
import v2 from "./project/v2.png";
import v3 from "./project/v3.png";
import n1 from "./project/n1.png";
import n2 from "./project/n2.png";
import f1 from "./project/f1.png";
import f2 from "./project/f1.png";
import S1 from "./project/parcel.png";
import S2 from "./project/G2.png";
import { Navigation } from "./Navigation";
import { Link } from "react-router-dom";
import { Col } from "react-bootstrap";
import { Button } from "react-bootstrap";

export default function Stuff() {
  const menustyle = {
    textDecoration: "none",
    color: "black",
    textAlign: "center",
    marginLeft: "5px",
  };
  const cardStyle = {
    marginTop: "20px",
    width: "21rem",
    height: "20rem",
    border: "1px solid white",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
  };

  const ContentImage = [
    {
      Image: v1,
      Name: "Veg Wrap",
      Price: "60/-",
    },
    {
      Image: v2,
      Name: "Paneer wrap",
      Price: "70/-",
    },
    {
      Image: v3,
      Name: "Spicy Jalpeno",
      Price: "80/-",
    },
    {
      Image: n1,
      Name: "Noodle",
      Price: "60/-",
    },
    {
      Image: n2,
      Name: "Hakka Noodle",
      Price: "100/-",
    },
    {
      Image: f1,
      Name: "French Fries",
      Price: "60/-",
    },
    {
      Image: f2,
      Name: "Peri-Peri",
      Price: "70/-",
    },
    {
      Image: S1,
      Name: "Stuff Garlic",
      Price: "60/-",
    },
    {
      Image: S2,
      Name: "Calzone Pocket",
      Price: "50/-",
    },
  ];

  return (
    <>
      <Navigation />
      <Container className="pt-4" fluid>
        <h2 className="text-center text-danger cursive-font fs">OUR MENU</h2>
        <Nav style={menustyle} className="justify-content-center">
          <Nav.Link style={menustyle} as={Link} to={"/menu"}>
            Veg Pizza
          </Nav.Link>
          <Nav.Link style={menustyle} as={Link} to={"/burger"}>
            Burger
          </Nav.Link>
          <Nav.Link style={menustyle} as={Link} to={"/sandwich"}>
            Sandwich
          </Nav.Link>
          <Nav.Link style={menustyle} as={Link} to={"/pasta"}>
            Pasta
          </Nav.Link>
          <Nav.Link style={menustyle} as={Link} to={"/shakes"}>
            Shakes/Drinks
          </Nav.Link>
          <Nav.Link style={menustyle} as={Link} to={"/stuff"}>
            Stuff
          </Nav.Link>
          <Nav.Link style={menustyle} as={Link} to={"/chinese"}>
            Chinese
          </Nav.Link>
        </Nav>

        <Container>
          <Row className="d-flex justify-content-around">
            {ContentImage.map((item, index) => (
              <Card
                key={index} // Unique key for each item
                style={cardStyle}
              >
                <Card.Body className=" position-relative">
                  <Row xs={12}>
                    <Col xs={2}></Col>
                    <Col xs={8}>
                      {" "}
                      <img
                        className=" w-100 "
                        src={item.Image}
                        alt={item.Name}
                      />
                    </Col>
                    <Col xs={2}></Col>
                  </Row>
                  <Row>
                    <Col xs={2}></Col>
                    <Col xs={8}>
                      <h5 className="text-center w-100">{item.Name}</h5>
                    </Col>
                    <Col xs={2}></Col>
                  </Row>
                  <Row>
                    <Col xs={2}></Col>
                    <Col xs={8}>
                      <h5 className="text-center text-danger">
                        <span className="text-black">Price : &#8377; </span>
                        {item.Price}
                      </h5>
                    </Col>
                    <Col xs={2}></Col>
                  </Row>
                  <Row xs={12}>
                    <Col xs={2}></Col>
                    <Col xs={8}>
                      {" "}
                      <Button
                        as={Link}
                        to={"/reg"}
                        className="btn-hvr "
                        style={{
                          width: "100%",
                          color: "black",
                          textAlign: "center",
                        }}
                        variant="outline-danger"
                      >
                        Order Now
                      </Button>
                    </Col>
                    <Col xs={2}></Col>
                  </Row>
                </Card.Body>
              </Card>
            ))}
          </Row>
        </Container>
      </Container>
    </>
  );
}
