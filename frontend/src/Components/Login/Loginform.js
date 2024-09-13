import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";
import { BACKEND_BASE_URL } from "../../constant";
import { useDispatch } from "react-redux";
import { login } from "../../slices/authSlice"; // Import login action from Redux slice

function LoginForm() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch(); // Initialize useDispatch hook for dispatching Redux actions

  function handleEmailChange(e) {
    const value = e.target.value;
    setEmail(value);
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      setEmailError("Enter a valid Email ");
    } else if (value.length === 0) {
      setEmailError(" Please Enter Email");
    } else {
      setEmailError("");
    }
  }

  function handlePasswordChange(e) {
    const value = e.target.value;
    setPassword(value);
    const trimmedValue = value.trim();

    if (trimmedValue.length < 8) {
      setPasswordError("Password must be at least 8 characters long");
    } else if (value.length !== trimmedValue.length) {
      setPasswordError("Password should not have leading or trailing spaces");
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
  }

  const handleLogin = async (e) => {
    e.preventDefault();

    if (email === "") {
      setEmailError("Email cannot be empty");
    }
    if (password.trim() === "") {
      setPasswordError("Password cannot be empty");
    }
    if (email === "" || password === "") {
      return;
    }

    try {
      const loginData = { email, password };
      const res = await axios.post(
        `${BACKEND_BASE_URL}/api/users/login`,
        loginData
      );

      if (res.status === 200) {
        const { user } = res.data; // Extract user from response
        dispatch(login(user)); // Dispatch login action with user data

        alert(`Welcome back, ${user.name}`);

        // Check user role and navigate accordingly
        if (user.role === "admin") {
          navigate("/admin"); // Redirect to the admin dashboard
        } else {
          navigate("/"); // Redirect to the home page for regular users
        }
      } else {
        console.error("Login failed:", res.data.message);
        alert("Login failed");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred during login");
    }
  };

  return (
    <Form
      className="p-3 h-100 w-100 mx-auto mt-2 d-flex flex-column align-items-start"
      onSubmit={(e) => {
        handleLogin(e);
      }}
    >
      <Form.Group controlId="formEmail" className="w-100 mb-3">
        <Form.Control
          className="custom-input"
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={handleEmailChange}
          required
        />
      </Form.Group>
      <span className="text-danger">{emailError}</span>
      <Form.Group controlId="formPassword" className="w-100 mb-3">
        <Form.Control
          className="custom-input"
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
          required
        />
      </Form.Group>
      <span className="text-danger">{passwordError}</span>
      <Form.Group
        controlId="formRememberMe"
        className="d-flex align-items-center mb-3"
      >
        <Form.Check
          type="checkbox"
          id="remember"
          className="me-2 checkbox-form  custom-input"
          checked={showPassword}
          onChange={() => setShowPassword(!showPassword)}
        />
        <Form.Label htmlFor="remember" className="mb-0 ">
          Show password
        </Form.Label>
      </Form.Group>

      <Nav.Link
        id="forget"
        className="d-flex align-items-center ms-4 "
        as={Link}
        to={"/forgetPassword"}
      >
        Forgot Password?
      </Nav.Link>

      <Button
        type="submit"
        variant="danger"
        className="w-100 mt-4"
        onClick={handleLogin}
      >
        Log in
      </Button>
    </Form>
  );
}

export default LoginForm;
