import React from "react";
import { Col, Container, Row, Image, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Navigation } from "../Resuable/Navigation";
import "../Styles/Home.css";
import pizza from "../../assests/images/pizzas1.png";
import Footer from "../Resuable/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <Container style={{ backgroundColor: "#f2f2f2" }} fluid>
        <Row lg={12}>
          <Col lg={6}>
            <p className="mt-5 ms-5 pt-5 text-secondary cursive-font homep speedy ">
              <i style={{ fontSize: "10vh" }}>
                “Speedy Flavor"{" "}
                <span className="text-danger">"Anytime, Anywhere"</span>
              </i>
            </p>
            <Row className="mt-4 ms-5">
              <Button
                as={Link}
                to={"/reservation"}
                className="btn-hvr2"
                style={{
                  alignItems: "center",
                  border: "1px solid #DC3545",
                  height: "7vh",
                  width: "9rem",
                  marginLeft: "5vh",
                  marginBottom: "3vh",
                  color: "#DC3545",
                  backgroundColor: "white",
                  boxShadow: "0px 2px 2px grey",
                }}
              >
                Book a Table
              </Button>
            </Row>
          </Col>
          <Col lg={5} className="d-none d-lg-block">
            {" "}
            {/* Image hidden on mobile */}
            <Image
              style={{ width: "100%" }}
              className="logo-animation image1"
              src={pizza}
              rounded
            />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}
