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
    console.log(`OTPStore:`, otpStore);
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
  console.log("otp:", otp);
  console.log("Stored Data: ", otpStore);
  console.log(`OTPStore[token]:`, otpStore[`${token}`]);
  const storedData = otpStore[token];

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
  const { totalPrice } = req.body;
  console.log(totalPrice);
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: "Tastytreats",
            },
            unit_amount: totalPrice,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: "http://localhost:3000",
      cancel_url: "http://localhost:3000",
    });
    res.redirect(session.url);
  } catch (error) {
    console.error("Error creating checkout session:", error);
    res.status(500).send("Internal Server Error");
  }
};
