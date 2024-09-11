import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { IoLocationOutline } from "react-icons/io5";
import {
  FaRegClock,
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";

export default function Footer() {
  const iconStyle = {
    color: "red",
    fontSize: "30px",
  };

  return (
    <Container fluid className="bg-dark text-light">
      <Container>
        <Row className="p-3">
          <Col xs={12} md={6} lg={3} className="mb-3 mb-md-0">
            <Row>
              <Col xs={2} style={iconStyle}>
                <IoLocationOutline />
              </Col>
              <Col xs={10}>
                <h6>Address</h6>
                <p>A108 Adam Street New York, NY 535022</p>
              </Col>
            </Row>
          </Col>

          <Col xs={12} md={6} lg={3} className="mb-3 mb-md-0">
            <Row>
              <Col xs={2} style={iconStyle}>
                <FiPhoneCall />
              </Col>
              <Col xs={10}>
                <h6>Contact</h6>
                <p>Phone: +1 5589 55488 55 Email: in@example.com</p>
              </Col>
            </Row>
          </Col>

          <Col xs={12} md={6} lg={3} className="mb-3 mb-md-0">
            <Row>
              <Col xs={2} style={iconStyle}>
                <FaRegClock />
              </Col>
              <Col xs={10}>
                <h6>Opening Hours</h6>
                <p>Mon-Sat: 11AM - 11PM Sunday: Closed</p>
              </Col>
            </Row>
          </Col>

          <Col xs={12} md={6} lg={3}>
            <Row xs={12}>
              <Col xs={2}></Col>
              <Col xs={8}>
                <h6 style={{}}>Follow Us</h6>
              </Col>
              <Col xs={2}></Col>
            </Row>

            <Row className="justify-content-center">
              <Col xs="auto" className="d-flex justify-content-center mb-2">
                <a
                  href="https://twitter.com"
                  className="text-danger"
                  aria-label="Twitter"
                >
                  <FaTwitter className="fs-4" />
                </a>
              </Col>
              <Col xs="auto" className="d-flex justify-content-center mb-2">
                <a
                  href="https://facebook.com"
                  className="text-danger"
                  aria-label="Facebook"
                >
                  <FaFacebookF className="fs-4" />
                </a>
              </Col>
              <Col xs="auto" className="d-flex justify-content-center mb-2">
                <a
                  href="https://instagram.com"
                  className="text-danger"
                  aria-label="Instagram"
                >
                  <FaInstagram className="fs-4" />
                </a>
              </Col>
              <Col xs="auto" className="d-flex justify-content-center mb-2">
                <a
                  href="https://linkedin.com"
                  className="text-danger"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn className="fs-4" />
                </a>
              </Col>
            </Row>
          </Col>
        </Row>
        <hr />
      </Container>
      <Row className="bg-dark py-2">
        <Col className="text-center">
          <p className="mb-0">© Copyright Tasty Treats All Rights Reserved</p>
        </Col>
      </Row>
    </Container>
  );
}
