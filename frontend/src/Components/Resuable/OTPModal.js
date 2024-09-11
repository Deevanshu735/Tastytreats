import axios from "axios";
import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

function OTPModal({ show, setShow, token, saveUser }) {
  const [otp, setOtp] = useState("");
  const [otpError, setOtpError] = useState("");
  console.log(token);

  const handleOtpSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/users/verifyotp", {
        token: token,
        otp: otp,
      });
      console.log(response);
      await saveUser();
      setShow(false);
    } catch (err) {
      console.log(err.response);
    }
  };

  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Enter OTP</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleOtpSubmit}>
          <Form.Group controlId="formOtp">
            <Form.Control
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
            <span className="text-danger">{otpError}</span>
          </Form.Group>
          <Button type="submit" variant="danger" className="mt-2">
            Verify OTP
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShow(false)}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default OTPModal;
