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

const sendEmail = require("./mailer"); // Import the email function
const User = require("../Models/userModel.js");
const bcrypt = require("bcryptjs");
const uploadOnCloudinary = require("../utils/cloudinary.js");
const path = require("path");
const crypto = require("crypto");
const stripe = require("stripe")(
  "sk_test_51PrC84Rpo9MfeTbXLz2sYNuH8zt1KM7SVE9UyPYTKBEoAnyT3MTukKyoQ6VCHMveykkWfWqvJYuMgqlCXbl0B3Uz00VXewiOGl"
);
const session = require("express-session");
let otpStore = {};

// Register User and send OTP
exports.register = async (req, res) => {
  try {
    const { name, email, phone, password } = req.body;
    const avatar = req.file;
    //new line
    if (!avatar) {
      return res.status(400).json({ message: "Avatar file is required." });
    }

    // Generate OTP
    const otp = crypto.randomInt(100000, 999999).toString();

    // Send OTP to user's email
    const result = await sendEmail(
      email,
      "Your One-Time Password (OTP) Code",
      "Your One-Time Password (OTP) Code",
      `
        <p style="color: #000;">Dear ${name},</p>

        <p style="color: #000;">Your One-Time Password (OTP) is:
       <strong style="color: #1a73e8; font-size:3rem">${otp}</strong></p>

        <p style="color: #000;">Please use this OTP to proceed with your registration. The code is valid for the next 10 minutes.</p>

        <p style="color: #000;">If you did not request this OTP, please ignore this email or contact our support team for assistance.</p>

        <p style="color: #000;">Best regards,<br>
        <strong>Tasty Treats Team</strong></p>`
    );

    // Generate a unique token to store the OTP
    const id = crypto.randomUUID();
    console.log(`id is ${id}`);

    otpStore[id] = { otp, name, email, phone, password, avatar }; // Save user details with OTP
    console.log(`OTPStore: ${otpStore}`);
    console.log(`OTPStore[id]: ${otpStore[id]}`);
    setTimeout(() => {
      delete otpStore[id]; // Delete OTP after 10 minutes
    }, 10 * 60 * 1000);

    // Return OTP token to frontend to use for verification
    return res
      .status(200)
      .json({ status: true, message: "OTP sent successfully", token: id });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error during registration", error });
  }
};

exports.verifyOTP = async (req, res) => {
  console.log("verify otp runs successfully");
  const { token, otp } = req.body;
  // console.log('token and otp',token,otp)
  // Debugging: log token and otpStore
  console.log("Received token:", token);
  // console.log("Received otp:", otp);
  console.log("otpStore:", otpStore);

  const storedData = otpStore;
  console.log("Stored Data: ", storedData);

  if (!storedData) {
    console.log("Invalid OTP - storedData not found");
    return res.status(401).json({ status: false, message: "Invalid OTP" });
  }

  if (storedData.otp !== otp.toString()) {
    console.log("Incorrect OTP - OTP does not match");
    return res.status(401).json({ status: false, message: "Incorrect OTP" });
  }

  // If OTP is correct, continue with registration
  const { name, email, phone, password, avatar } = storedData;

  try {
    // Upload avatar to Cloudinary
    const avatarCloud = await uploadOnCloudinary(avatar.path, "avatars");

    // Create the user in the database
    const newUser = await User.create({
      name,
      email,
      phone,
      password,
      avatar: avatarCloud.url,
    });

    // Delete the OTP data after successful registration
    delete otpStore[token];

    // Send welcome email
    await sendEmail(
      email,
      "Welcome to Tasty Treats!",
      `Hi ${name},\n\nThank you for registering at Tasty Treats!\nWe’re excited to have you on board.\n\nBest regards,\nTasty Treats Team`,
      `<p>Hi ${name},</p><p>Thank you for registering at Tasty Treats!</p><p>We’re excited to have you on board.</p><p>Best regards,<br>Tasty Treats Team</p>`
    );

    return res.status(201).json({
      message: "User registered successfully after OTP verification!",
      user: newUser,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Registration Failed", error });
  }
};

// Login User
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if the user exists
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ error: "User not found" });
    }

    // Compare the password
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ error: "Incorrect password" });
    }

    // res.status(200).json({ message: "Login successful", user });
    res.status(200).json({
      message: "Login successful",
      user: {
        name: user.name,
        email: user.email,
        role: user.role, // Add role here
      },
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to Login" + error });
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    // const totalUsers = users.length;
    res.status(200).json({ users });
  } catch (error) {
    res.status(500).json({ message: "Failed to get Users", error });
  }
};

exports.payment = async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: "Sampann",
            },
            unit_amount: 20220,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: "http://192.168.3.240:3000",
      cancel_url: "http://192.168.3.240:3000",
    });
    res.redirect(session.url);
  } catch (error) {
    console.error("Error creating checkout session:", error);
    res.status(500).send("Internal Server Error");
  }
};
