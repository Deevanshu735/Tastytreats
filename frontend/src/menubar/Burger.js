import React from "react";
import { Container, Row, Nav, Card } from "react-bootstrap"; // Combined import

import B1 from "./project/B1.png";
import B2 from "./project/b2.png";
import B3 from "./project/b3.png";
import B4 from "./project/b4.png";
import B5 from "./project/b5.png";
import B6 from "./project/b6.png";
import { Navigation } from "./Navigation";
import { Link } from "react-router-dom";
import { Col } from "react-bootstrap";
import { Button } from "react-bootstrap";
import Footer from "./Footer";

export default function Burger() {
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
      Image: B1,
      Name: "Aloo Tikki",
      Price: "40/-",
    },
    {
      Image: B2,
      Name: "Veg Burger",
      Price: "50/-",
    },
    {
      Image: B3,
      Name: "Paneer Burger",
      Price: "55/-",
    },
    {
      Image: B4,
      Name: "Cheese Burger",
      Price: "60/-",
    },
    {
      Image: B5,
      Name: "Paneer Jalpeno",
      Price: "80/-",
    },
    {
      Image: B6,
      Name: "Maharaja Burger",
      Price: "100/-",
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
                <Card.Body className="  position-relative pt-1">
                  <Row xs={12}>
                    <Col xs={2}></Col>
                    <Col xs={8}>
                      {" "}
                      <img
                        style={{ borderRadius: "50%", marginTop: "0px" }}
                        className="img-fluid w-100 h-100"
                        src={item.Image}
                        alt={item.Name}
                      />
                    </Col>
                    <Col xs={2}></Col>
                  </Row>
                  <Row>
                    <Col xs={2}></Col>
                    <Col xs={8}>
                      <h5 className="text-center">{item.Name}</h5>
                    </Col>
                    <Col xs={2}></Col>
                  </Row>
                  <Row>
                    <Col xs={2}></Col>
                    <Col xs={8}>
                      <h4 className=" text-danger  text-center ">
                        <span className="text-black">Price : &#8377; </span>
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
