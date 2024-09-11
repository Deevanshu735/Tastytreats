import React, { useState } from "react";
import { Button, Container, Col, Card, Image, Row } from "react-bootstrap";
import { Navigation } from "../Resuable/Navigation";
import Wallpaper1 from "../../assests/images/Chef2.png";
import Wallpaper2 from "../../assests/images/Chef1.png";
import LoginForm from "./Loginform";
import RegisterForm from "./RegisterForm";

function Login() {
  const [loginTab, setLoginTab] = useState(true);

  return (
    <>
      <Navigation />
      <Container fluid className="d-flex align-items-center min-vh-100">
        <Row className="w-100 align-items-center">
          {/* Left side PNG */}
          <Col xs={12} md={4} className="d-none d-md-block">
            <Image
              src={Wallpaper2}
              alt="Chef illustration"
              fluid
              className="w-100"
              style={{ filter: "drop-shadow(2px 6px 8px)" }}
            />
          </Col>

          {/* Login/Register Card */}
          <Col xs={12} md={4} className="my-4">
            <Card className="shadow-lg border-0 rounded">
              <Card.Body className="p-4">
                {/* Toggle between Login and Register */}
                <div className="d-flex justify-content-around mb-3">
                  <Button
                    variant={loginTab ? "danger" : "outline-danger"}
                    onClick={() => setLoginTab(true)}
                  >
                    Log in
                  </Button>
                  <Button
                    variant={!loginTab ? "danger" : "outline-danger"}
                    onClick={() => setLoginTab(false)}
                  >
                    Register
                  </Button>
                </div>

                {/* Social icons */}
                <div className="d-flex justify-content-around mb-3">
                  <i className="fa-brands fa-google fs-4"></i>
                  <i className="fa-brands fa-apple fs-4"></i>
                  <i className="fa-brands fa-facebook-f fs-4"></i>
                  <i className="fa-brands fa-twitter fs-4"></i>
                </div>

                {/* Forms */}
                <div className="position-relative">
                  {loginTab ? <LoginForm /> : <RegisterForm />}
                </div>
              </Card.Body>
            </Card>
          </Col>

          {/* Right side PNG */}
          <Col xs={12} md={4} className="d-none d-md-block">
            <Image
              src={Wallpaper1}
              alt="Chef illustration"
              fluid
              className="w-100"
              style={{ filter: "drop-shadow(2px 6px 8px)" }}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Login;
