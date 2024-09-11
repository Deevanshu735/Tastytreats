import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import OTPModal from "../Resuable/OTPModal"; // Make sure the OTPModal component exists and works as expected
import { useNavigate } from "react-router-dom";

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

  // OTP modal state
  const navigate = useNavigate();
  const [showOtpModal, setShowOtpModal] = useState(false);
  const [otpToken, setOtpToken] = useState("");

  // Input handlers
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
      setEmailError("Please enter a valid email ");
    } else {
      setEmailError("");
    }
  };

  const handlePhone = (e) => {
    const value = e.target.value;
    setPhone(value);
    if (!/^\d{10}$/.test(value)) {
      setPhoneError("Please enter a valid number");
    } else {
      setPhoneError("");
    }
  };

  const handlePassword = (e) => {
    const value = e.target.value;
    setPassword(value);
    const trimmedValue = value.trim();
    if (trimmedValue.length < 8) {
      setPasswordError("Password must be at least 8 characters long");
    } else if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[a-zA-Z\d\W_]+$/.test(
        trimmedValue
      )
    ) {
      setPasswordError(
        "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
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

  // // Handle registration form submit
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   // Reset error messages
  //   setNameError("");
  //   setEmailError("");
  //   setPhoneError("");
  //   setPasswordError("");
  //   setConfirmPasswordError("");

  //   // Basic validation checks
  //   if (
  //     !name ||
  //     nameError ||
  //     !email ||
  //     emailError ||
  //     !phone ||
  //     phoneError ||
  //     !password ||
  //     passwordError ||
  //     !avatar
  //   ) {
  //     alert("Please fill in all the fields correctly.");
  //     return;
  //   }

  //   try {
  //     const response = await axios.post(`/api/users/register`, { email });
  //     if (response.status === 200 && response.data.status) {
  //       setOtpToken(response.data.token);
  //       setShowOtpModal(true); // Show OTP modal
  //     }
  //   } catch (error) {
  //     console.error("Error:", error);
  //     setEmailError("Please check your email and try again.");
  //   }
  // };

  // // Handle OTP verification and complete registration
  // const saveUser = async () => {
  //   try {
  //     const formData = new FormData();
  //     formData.append("name", name);
  //     formData.append("email", email);
  //     formData.append("phone", phone);
  //     formData.append("password", password);
  //     formData.append("avatar", avatar);

  //     const response = await axios.post(
  //       "/api/users/register/complete",
  //       formData,
  //       {
  //         headers: {
  //           "Content-Type": "multipart/form-data",
  //         },
  //       }
  //     );

  //     if (response.status === 200 && response.data.status) {
  //       navigate("/"); // Redirect on successful registration
  //     } else {
  //       alert(
  //         response.data.message || "Registration failed. Please try again."
  //       );
  //     }
  //   } catch (error) {
  //     console.error("Error:", error);
  //     alert("An error occurred during registration. Please try again.");
  //   }

  // Handle registration form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Reset error messages
    setNameError("");
    setEmailError("");
    setPhoneError("");
    setPasswordError("");
    setConfirmPasswordError("");

    // Basic validation checks
    if (
      !name ||
      nameError ||
      !email ||
      emailError ||
      !phone ||
      phoneError ||
      !password ||
      passwordError ||
      !avatar
    ) {
      alert("Please fill in all the fields correctly.");
      return;
    }

    try {
      const response = await axios.post(`/api/users/register`, {
        email,
        name,
        phone,
        password,
      });
      if (response.status === 200 && response.data.status) {
        setOtpToken(response.data.token); // Store OTP token
        setShowOtpModal(true); // Show OTP modal
      }
    } catch (error) {
      console.error("Error:", error);
      setEmailError("Please check your email and try again.");
    }
  };

  // Handle OTP verification and final registration
  const handleOtpSubmit = async (otp) => {
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
      formData.append("phone", phone);
      formData.append("password", password);
      formData.append("avatar", avatar); // Include avatar file
      formData.append("otp", otp);
      formData.append("token", otpToken); // The token returned after OTP request

      const response = await axios.post(
        "/api/users/register/complete", // The URL where final registration happens
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 200 && response.data.status) {
        navigate("/"); // Redirect on successful registration
      } else {
        alert(
          response.data.message || "Registration failed. Please try again."
        );
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred during registration. Please try again.");
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
            value={name}
            onChange={handleName}
            required
          />
          <span className="text-danger">{nameError}</span>
        </Form.Group>

        <Form.Group controlId="formEmail" className="w-100 mb-3">
          <Form.Control
            className="custom-input"
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={handleEmail}
            required
          />
          <span className="text-danger">{emailError}</span>
        </Form.Group>

        <Form.Group controlId="formPhone" className="w-100 mb-3">
          <Form.Control
            className="custom-input"
            type="tel"
            placeholder="Phone Number"
            value={phone}
            onChange={handlePhone}
            required
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

        <Button
          type="submit"
          variant="danger"
          className="w-100 mt-2"
          onClick={handleSubmit}
        >
          Register
        </Button>
      </Form>

      {/* OTP Modal */}
      {showOtpModal && (
        <OTPModal
          show={showOtpModal}
          setShow={setShowOtpModal}
          token={otpToken}
          saveUser={handleOtpSubmit}
        />
      )}
    </>
  );
}

export default RegisterForm;
