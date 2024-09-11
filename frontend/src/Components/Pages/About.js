import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Image } from "react-bootstrap";
import { FaCheckCircle } from "react-icons/fa";
import { Navigation } from "../Resuable/Navigation";
import rest from "../../assests/images/Restaurenty3.png";
import Footer from "../Resuable/Footer";

export default function About() {
  return (
    <>
      <Navigation />
      <h2 className="text-center my-3  cursive-font">
        <span className="text-danger fs-1">ABOUT US</span>
      </h2>
      <Container>
        <Row lg={12}>
          <Col lg={6}>
            <Image
              style={{
                width: "100%",
                height: "350px",
                boxShadow: " 0 8px 8px #D3D3D3",
              }}
              src={rest}
            />
            <Row
              className="ms-1 my-4 "
              style={{
                border: "1.5px solid black",
                padding: "4px",
                width: "100%",
              }}
            >
              <h2 className="text-center">Book a Table</h2>
              <br />
              <h3 className="text-center text-danger"> +155895548833</h3>
            </Row>
          </Col>
          <Col lg={1}></Col>
          <Col lg={5}>
            <Container fluid>
              <h5>
                Lorem ipsum dolor sit amet, consectetur elit. Sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation
              </h5>
              <h5>
                <Row className="my-4">
                  <Col lg={1}>
                    {" "}
                    <FaCheckCircle className="fs-5 text-danger" />
                  </Col>
                  <Col
                    style={{
                      textAlign: "start",
                      fontSize: "1rem",
                    }}
                  >
                    Lorem ipsum dolor sit amet, consect adipiscing elit. Integer
                    nec odio. Praesent libero.
                  </Col>
                </Row>
              </h5>
              <h5>
                <Row>
                  <Col lg={1}>
                    {" "}
                    <FaCheckCircle className="fs-5 text-danger" />
                  </Col>
                  <Col style={{ textAlign: "start", fontSize: "1rem" }}>
                    Lorem ipsum dolor sit amet, consect adipiscing elit. Integer
                    nec odio. Praesent libero.
                  </Col>
                </Row>
              </h5>
              <h5>
                <Row>
                  <Col lg={1}>
                    {" "}
                    <FaCheckCircle className="fs-5 text-danger" />
                  </Col>
                  <Col style={{ textAlign: "start", fontSize: "1rem" }}>
                    Aenean vel gravida elit, non vestibulum sem. Vivamus
                    malesuada erat nec libero faucibus varius.
                  </Col>
                </Row>
              </h5>
            </Container>
            <h5 className="mt-5 ms-2" style={{ textAlign: "start" }}>
              Ullamco laboris nisi ut aliquip ex eacomm odo consequat. Duis aute
              irure dolor in reprehenderit in voluptate velit esse cillum dolore
              eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident
            </h5>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}
