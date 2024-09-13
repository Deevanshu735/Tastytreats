import React from "react";
import { Container } from "react-bootstrap";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import { Card } from "react-bootstrap";

const PaymentSuccess = () => {
  const navigate = useNavigate();
  const searchQuery = useSearchParams()[0];
  const referenceNum = searchQuery.get("reference");
  const handleHome = () => {
    navigate("/");
  };
  return (
    <>
      <Container>
        <Row xs={12}>
          <Col xs={2}></Col>
          <Col xs={8}>
            <Card style={{ boxShadow: "1px 1px  15px " }} className="mt-5 ">
              <Card.Body>
                <Card.Title>Payment Details</Card.Title>
                <h1>Payment Successful</h1>
                <h1>Reference No. : {referenceNum}</h1>
                <p>
                  Thank you for your purchase. Your order will be processed
                  shortly.
                </p>
                <button onClick={handleHome} className="btn btn-danger">
                  Go to Home
                </button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={2}></Col>
        </Row>
      </Container>
    </>
  );
};

export default PaymentSuccess;
