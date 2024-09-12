import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import OTPModal from "../Resuable/OTPModal";

function RegisterForm() {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const [avatar, setAvatar] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  const [showOtpModal, setShowOtpModal] = useState(false);
  const [otpToken, setOtpToken] = useState("");

  const handleName = (e) => {
    const value = e.target.value.trim();
    setName(value);
    if (value.length < 3) {
      setNameError("Name should have at least 3 characters");
    } else if (!/^[a-zA-Z]+(\s[a-zA-Z]+)*$/.test(value)) {
      setNameError("Please enter a valid name");
    } else {
      setNameError("");
    }
  };

  const handleEmail = (e) => {
    const value = e.target.value.trim();
    setEmail(value);
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      setEmailError("Please enter a valid email");
    } else {
      setEmailError("");
    }
  };

  const handlePhone = (e) => {
    setPhone(e.target.value);
    if (!/^\d{10}$/.test(e.target.value)) {
      setPhoneError("Please enter a valid 10-digit phone number");
    } else {
      setPhoneError("");
    }
  };

  const handlePassword = (e) => {
    const value = e.target.value.trim();
    setPassword(value);
    if (value.length < 8) {
      setPasswordError("Password must be at least 8 characters long");
    } else if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[a-zA-Z\d\W_]+$/.test(value)
    ) {
      setPasswordError(
        "Password must include uppercase, lowercase, number, and special character"
      );
    } else {
      setPasswordError("");
    }
  };

  const handleRePassword = (e) => {
    const value = e.target.value.trim();
    setConfirmPassword(value);
    if (value !== password) {
      setConfirmPasswordError("Passwords do not match");
    } else {
      setConfirmPasswordError("");
    }
  };

  const handleAvatarChange = (e) => {
    setAvatar(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form data
    if (!name || !email || !phone || !password || !confirmPassword || !avatar) {
      return;
    }

    try {
      // Prepare form data to send to the backend
      const formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
      formData.append("phone", phone);
      formData.append("password", password);
      formData.append("avatar", avatar);

      // Send OTP request
      const response = await axios.post(`/api/users/register`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      // Set OTP token and show OTP modal
      setOtpToken(response.data.token);
      setShowOtpModal(true);
    } catch (error) {
      console.error("Error sending OTP", error);
      setEmailError("Failed to send OTP. Please check your email.");
    }
  };

  return (
    <>
      <Form className="p-3 w-100 mx-auto d-flex flex-column align-items-start form2">
        <Form.Group controlId="formName" className="w-100 mb-3">
          <Form.Control
            className="custom-input"
            type="text"
            placeholder="Name"
            required
            onChange={handleName}
            value={name}
          />
          <span className="text-danger">{nameError}</span>
        </Form.Group>

        <Form.Group controlId="formEmail" className="w-100 mb-3">
          <Form.Control
            className="custom-input"
            type="email"
            placeholder="Email"
            required
            onChange={handleEmail}
            value={email}
          />
          <span className="text-danger">{emailError}</span>
        </Form.Group>

        <Form.Group controlId="formPhone" className="w-100 mb-3">
          <Form.Control
            className="custom-input"
            type="tel"
            placeholder="Phone Number"
            required
            onChange={handlePhone}
            value={phone}
          />
          <span className="text-danger">{phoneError}</span>
        </Form.Group>

        <Form.Group controlId="formPassword" className="w-100 mb-3">
          <Form.Control
            className="custom-input"
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={handlePassword}
            required
          />
          <span className="text-danger">{passwordError}</span>
        </Form.Group>

        <Form.Group controlId="formConfirmPassword" className="w-100 mb-3">
          <Form.Control
            className="custom-input"
            type={showPassword ? "text" : "password"}
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={handleRePassword}
            required
          />
          <span className="text-danger">{confirmPasswordError}</span>
        </Form.Group>

        <Form.Group controlId="avatar" className="w-100 mb-3">
          <Form.Control
            className="custom-input"
            type="file"
            name="avatar"
            accept="image/*"
            onChange={handleAvatarChange}
          />
        </Form.Group>

        <Form.Group
          controlId="formTerms"
          className="d-flex align-items-center mb-2"
        >
          <Form.Check
            type="checkbox"
            id="terms"
            className="me-2 checkbox-form custom-input"
            checked={showPassword}
            onChange={() => setShowPassword(!showPassword)}
          />
          <Form.Label htmlFor="terms" className="mb-0">
            Show Password
          </Form.Label>
        </Form.Group>

        <Button variant="danger" className="w-100 mt-2" onClick={handleSubmit}>
          Register
        </Button>
      </Form>

      {showOtpModal && (
        <OTPModal
          show={showOtpModal}
          setShow={setShowOtpModal}
          token={otpToken}
        />
      )}
    </>
  );
}

export default RegisterForm;
