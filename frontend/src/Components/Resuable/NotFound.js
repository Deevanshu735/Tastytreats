import React from "react";
import { Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { Nav } from "react-bootstrap";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <h1>404 - Page Not Found</h1>
      <p>The page you're looking for doesn't exist.</p>
      <Nav.Link as={Link} to={navigate(-1)}>
        Go Back
      </Nav.Link>
    </Container>
  );
};

export default NotFound;
