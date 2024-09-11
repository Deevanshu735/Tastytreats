import {
  Container,
  Card,
  Row,
  Col,
  // Form,
  // Button,
} from "react-bootstrap";
import { MdLocationPin, MdEmail } from "react-icons/md";
import { FaPhoneAlt, FaClock } from "react-icons/fa";
import { Navigation } from "../Resuable/Navigation";
import Footer from "../Resuable/Footer";
// import { useState } from "react";

export default function Contact() {
  const cardStyle = {
    margin: "1rem",
    borderRadius: "0px",
    height: "5rem",
    marginTop: "2rem",
    boxShadow: "0px 1px 6px grey",
  };

  // const [name, setName] = useState("");
  // const [nameError, setNameError] = useState("");

  // const [email, setEmail] = useState("");
  // const [emailError, setEmailError] = useState("");

  // const [subject, setSubject] = useState("");
  // const [subjectError, setSubjectError] = useState("");

  // const [message, setMessage] = useState("");
  // const [messageError, setMessageError] = useState("");

  // function handleName(e) {
  //   const value = e.target.value;
  //   setName(value);
  //   if (value.length === 0) {
  //     setNameError("Name is required");
  //   } else if (value.length < 3) {
  //     setNameError("Name should be at least 3 characters long");
  //   } else {
  //     setNameError("");
  //   }
  // }

  // function handleEmail(e) {
  //   const value = e.target.value;
  //   setEmail(value);
  //   if (value.length === 0) {
  //     setEmailError("Email is required");
  //   } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
  //     setEmailError("Please enter a valid email address");
  //   } else {
  //     setEmailError("");
  //   }
  // }

  // function handleSubject(e) {
  //   const value = e.target.value;
  //   setSubject(value);
  //   if (value.length === 0) {
  //     setSubjectError("Subject is required");
  //   } else if (value.length < 3) {
  //     setSubjectError("Subject should be at least 3 characters long");
  //   } else {
  //     setSubjectError("");
  //   }
  // }

  // function handleMessage(e) {
  //   const value = e.target.value;
  //   setMessage(value);
  //   if (value.length === 0) {
  //     setMessageError("Message is required");
  //   } else if (value.length < 20) {
  //     setMessageError("Message should be at least 20 characters");
  //   } else {
  //     setMessageError("");
  //   }
  // }

  return (
    <>
      <Navigation />
      <h2 className="text-center my-2 cursive-font">
        <span className="text-danger fs-1">CONTACT US</span>
      </h2>

      <Container>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60897.103180352584!2d77.19052092828481!3d30.175971775771007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390efbee3dc0d0eb%3A0xf105c50233e747d2!2sJagadhri%2C%20Haryana!5e1!3m2!1sen!2sin!4v1723620850215!5m2!1sen!2sin"
          width="100%"
          height="350px"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Maps"
        ></iframe>
      </Container>
      <Container className="my-4">
        <Row className="gy-3">
          <Col xs={12} md={6}>
            <Card style={cardStyle}>
              <Card.Body className="pt-2">
                <Row className="d-flex align-items-center">
                  <Col xs={2}>
                    <MdLocationPin
                      style={{ marginTop: "-1rem" }}
                      size="3rem"
                      className="text-danger w-100"
                      aria-label="Location"
                    />
                  </Col>
                  <Col xs={10} className="text-muted my-2 align-items-center">
                    <p className="m-0 text-dark">Address</p>
                    <p style={{ fontSize: "0.9rem" }}>
                      A108 Adam Street, New York
                    </p>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} md={6}>
            <Card style={cardStyle}>
              <Card.Body className="pt-1">
                <Row className="d-flex align-items-center">
                  <Col xs={2}>
                    <FaPhoneAlt
                      style={{ marginTop: "-1rem" }}
                      size="2rem"
                      className="text-danger w-100"
                      aria-label="Phone"
                    />
                  </Col>
                  <Col xs={10} className="text-muted my-2">
                    <p className="m-0 text-dark">Call Us</p>
                    <p style={{ fontSize: "0.9rem" }}>+1 5589 55488 55</p>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="gy-3 mt-3">
          <Col xs={12} md={6}>
            <Card style={cardStyle}>
              <Card.Body className="pt-1">
                <Row className="d-flex align-items-center">
                  <Col xs={2}>
                    <MdEmail
                      style={{ marginTop: "-1rem" }}
                      size="2rem"
                      className="text-danger w-100"
                      aria-label="Email"
                    />
                  </Col>
                  <Col xs={10} className="text-muted my-2">
                    <p className="m-0 text-dark">Email</p>
                    <p style={{ fontSize: "0.9rem" }}>info@example.com</p>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} md={6}>
            <Card style={cardStyle}>
              <Card.Body className="pt-1">
                <Row className="d-flex align-items-center">
                  <Col xs={2}>
                    <FaClock
                      style={{ marginTop: "-1rem" }}
                      size="2rem"
                      className="text-danger w-100"
                      aria-label="Opening Time"
                    />
                  </Col>
                  <Col xs={10} className="text-muted my-2">
                    <p className="m-0 text-dark">Opening Hours</p>
                    <p style={{ fontSize: "0.9rem" }}>
                      Mon-Sat: 11AM - 11PM; Sunday: Closed
                    </p>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* <Container>
        <Row>
          <Form>
            <Row>
              <Col>
                <FormGroup className="m-2">
                  <Form.Control
                    className="form my-form"
                    type="text"
                    placeholder="Your Name"
                    onChange={handleName}
                    value={name}
                  />
                </FormGroup>
                <span className="text-danger">{nameError}</span>
              </Col>
              <Col>
                <FormGroup className="m-2">
                  <Form.Control
                    className="form"
                    type="email"
                    placeholder="Your Email"
                    onChange={handleEmail}
                    value={email}
                  />
                </FormGroup>
                <span className="text-danger">{emailError}</span>
              </Col>
            </Row>

            <FormGroup className="m-2">
              <Form.Control
                className="form"
                type="text"
                placeholder="Your Subject"
                onChange={handleSubject}
                value={subject}
              />
            </FormGroup>
            <span className="text-danger">{subjectError}</span>

            <FormGroup className="m-2">
              <Form.Control
                className="form"
                as="textarea"
                placeholder="Message"
                rows={3}
                onChange={handleMessage}
                value={message}
              />
            </FormGroup>
            <span className="text-danger">{messageError}</span>
            <FormGroup className="text-center">
              <Button variant="danger" className="b1 my-2" active>
                Send Message
              </Button>
            </FormGroup>
          </Form>
        </Row>
      </Container> */}
      <Footer />
    </>
  );
}
