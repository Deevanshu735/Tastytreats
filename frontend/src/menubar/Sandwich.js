import React from "react";
import { Container, Row, Nav, Card } from "react-bootstrap"; // Combined import

import s1 from "./project/s1.png";
import s2 from "./project/s2.png";
import s3 from "./project/s3.png";
// import s4 from "./project/s4,.png";
import { Navigation } from "./Navigation";
import { Link } from "react-router-dom";
import { Col } from "react-bootstrap";
import { Button } from "react-bootstrap";
import Footer from "./Footer";

export default function Sandwich() {
  const menustyle = {
    textDecoration: "none",
    color: "black",
    textAlign: "center",
    marginLeft: "5px",
  };
  const cardStyle = {
    marginTop: "20px",
    width: "24rem",
    height: "20rem",
    border: "1px solid white",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
  };

  const ContentImage = [
    {
      Image: s1,
      Name: "Veg Grilled",
      Price: "50/-",
    },
    {
      Image: s2,
      Name: "Grilled corn",
      Price: "60/-",
    },
    {
      Image: s3,
      Name: "Paneer jalpeno",
      Price: "75/-",
    },
    {
      Image: s2,
      Name: "Cheesy Grilled",
      Price: "90/-",
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
          <Row className="d-flex justify-content-around  pt-1">
            {ContentImage.map((item, index) => (
              <Card
                key={index} // Unique key for each item
                style={cardStyle}
              >
                <Card.Body className="position-relative">
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
                      <h5 className="text-center w-100 text-center">
                        {item.Name}
                      </h5>
                    </Col>
                    <Col xs={2}></Col>
                  </Row>
                  <Row>
                    <Col xs={2}></Col>
                    <Col xs={8}>
                      <h4 className=" w-100 text-danger text-center">
                        <span className="text-black ">Price : &#8377;</span>
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
