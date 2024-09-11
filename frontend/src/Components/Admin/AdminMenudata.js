import React from "react";
import { Container, Row, Card, Col, Button } from "react-bootstrap"; // Combined import

const cardStyle = {
  marginTop: "20px",
  width: "100%",
  maxWidth: "20rem", // Match with MenuItems for consistency
  border: "1px solid white",
  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
};

const imageContainerStyle = {
  width: "100%",
  height: "200px", // Ensure height matches MenuItems
  overflow: "hidden",
};

const imageStyle = {
  objectFit: "contain", // Keep consistency with MenuItems image
  width: "100%",
  height: "100%",
};

const AdminMenuData = ({ selectedMenu }) => {
  return (
    <Container>
      <Row xs={12} className="d-flex justify-content-around">
        {selectedMenu.map((item, index) => (
          <Card key={index} style={cardStyle}>
            <Card.Body className="position-relative pt-1 w-100 h-100">
              <Row xs={12} className="h-60">
                <Col>
                  <div style={imageContainerStyle}>
                    <img
                      src={item.foodImage}
                      alt={item.foodName}
                      style={imageStyle}
                    />
                  </div>
                </Col>
              </Row>
              <Row xs={12}>
                <Col>
                  <h5 className="text-center">{item.foodName}</h5>
                </Col>
              </Row>
              <Row xs={12}>
                <Col>
                  <h5 className="text-center text-danger">
                    <span className="text-black">Price: &#8377;</span>
                    {item.foodPrice}
                  </h5>
                </Col>
              </Row>
              <Row xs={12} className="d-flex justify-content-center">
                <Col className="d-flex justify-content-center">
                  <Button
                    className="btn-hvr fs-5 me-2"
                    style={{
                      width: "40%",
                      height: "100%",
                      color: "black",
                      textAlign: "center",
                    }}
                    variant="outline-danger"
                  >
                    Edit
                  </Button>
                  <Button
                    className="btn-hvr"
                    style={{
                      width: "50%",
                      height: "100%",
                      color: "black",
                      textAlign: "center",
                    }}
                    variant="outline-danger"
                  >
                    Delete
                  </Button>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        ))}
      </Row>
    </Container>
  );
};

export default AdminMenuData;
