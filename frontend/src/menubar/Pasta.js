import React from "react";
import { Container, Row, Nav, Card } from "react-bootstrap"; // Combined import

import p1 from "./project/p1.png";
import p2 from "./project/Pasta2.png";
import p3 from "./project/P3.png";
import p4 from "./project/P4.png";
import m1 from "./project/m1.png";
import m2 from "./project/m1.png";
import { Navigation } from "./Navigation";
import { Link } from "react-router-dom";
import { Col } from "react-bootstrap";
import { Button } from "react-bootstrap";
import Footer from "./Footer";

export default function Pasta() {
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
      Image: p2,
      Name: "Red Souce ",
      Price: "70/-",
    },
    {
      Image: p1,
      Name: "White Souce",
      Price: "70/-",
    },
    {
      Image: p3,
      Name: "Mix Pasta",
      Price: "80/-",
    },
    {
      Image: p4,
      Name: "Makhni Pasta",
      Price: "80/-",
    },
    {
      Image: m1,
      Name: "Maggie",
      Price: "30/-",
    },
    {
      Image: m2,
      Name: "Masala Maggie",
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
                        className="img-fluid w-100"
                        src={item.Image}
                        alt={item.Name}
                      />
                    </Col>
                    <Col xs={2}></Col>
                  </Row>
                  <Row>
                    <Col xs={2}></Col>
                    <Col xs={8}>
                      <h5 className="text-center ">{item.Name}</h5>
                    </Col>
                    <Col xs={2}></Col>
                  </Row>
                  <Row>
                    <Col xs={2}></Col>
                    <Col xs={8}>
                      <h4 className=" text-danger text-center">
                        <span className="text-black ">Price : &#8377; </span>
                        {item.Price}
                      </h4>
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
      <Footer />
    </>
  );
}
