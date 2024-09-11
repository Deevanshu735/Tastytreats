import React, { useState } from "react";
import { Button, Container, Nav, Navbar, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import { Cart } from "react-bootstrap-icons";

const styles = {
  navbar: {
    fontSize: "1.25rem",
    backgroundColor: "#f8f9fa",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  },
  brand: {
    color: "#dc3545",
    marginLeft: "2rem",
    marginRight: "10vh",
  },
  nav: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    flexGrow: 1,
  },
  navLink: {
    margin: "0 0.3rem",
  },
  button: {
    margin: "0 0.5rem",
    borderRadius: "0.25rem",
    backgroundColor: "transparent",
    color: "#dc3545",
  },
  userButton: {
    backgroundColor: "transparent",
    border: "none",
    marginLeft: "0.5rem",
  },
  userIcon: {
    color: "#dc3545",
    fontSize: "1.5rem",
  },
  buttonContainer: {
    display: "flex",
    alignItems: "center",
    marginLeft: "auto",
  },
  toggle: {
    borderColor: "#dc3545",
  },
  toggleIcon: {
    color: "#dc3545",
    IconColor: "#DC3545",
  },
};

const CartIcon = () => {
  const [cartCount, setCartCount] = useState(0);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        position: "relative",
        cursor: "pointer",
      }}
    >
      <Cart size={40} color="#DC3545" /> {/* Red cart icon */}
      <Badge
        pill
        bg="transparent"
        text="danger"
        style={{
          position: "absolute",
          top: "8px",
          right: "12px",
          fontSize: "14px",
          padding: "4px",
        }}
      >
        {cartCount}
      </Badge>
    </div>
  );
};

export function Navigation() {
  return (
    <Navbar expand="lg" style={styles.navbar}>
      <Container fluid>
        <Navbar.Brand className="cursive-font fs-1" style={styles.brand}>
          Tasty Treats
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" style={styles.toggle}>
          <span className="navbar-toggler-icon" style={styles.toggleIcon} />
        </Navbar.Toggle>

        <Navbar.Collapse id="navbarScroll">
          <Nav className="d-flex align-items-center" style={styles.nav}>
            <Nav.Link as={Link} to={"/"} style={styles.navLink}>
              Home
            </Nav.Link>

            <Nav.Link as={Link} to={"/menu"} style={styles.navLink}>
              Menu
            </Nav.Link>
            <Nav.Link as={Link} to={"/reservation"} style={styles.navLink}>
              Reservation
            </Nav.Link>
            <Nav.Link as={Link} to={"/about"} style={styles.navLink}>
              About
            </Nav.Link>
            <Nav.Link as={Link} to={"/contact"} style={styles.navLink}>
              Contact
            </Nav.Link>

            <Button
              className="btn-hvr2 "
              as={Link}
              to="/login"
              style={styles.button}
              variant="none"
            >
              Login/Register
            </Button>
            <Button style={styles.userButton}>
              <FaRegUser style={styles.userIcon} />
            </Button>

            <CartIcon />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
