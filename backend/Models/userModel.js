const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter your name"],
    maxLength: [30, "Name should be less than 30"],
    minLength: [4, "Name should be more than 4 character"],
  },
  email: {
    type: String,
    required: [true, "Please Enter your email"],
    unique: [true, "Email already exist"],
    validate: [validator.isEmail, "Please enter a valid email"],
  },
  phone: {
    type: Number,
    required: [true, "Please Enter your Phone Number"],
    minLength: [10, "Enter a correct number"],
  },
  password: {
    type: String,
    required: [true, "Please Enter your Password"],
    minLength: [8, "Password should be more than 8 characters"],
  },
  avatar: {
    type: String,
    default: "https://res.cloudinary.com/dtcgg2i4a/image/upload/v1725442969/hfrujqjsdk0dsmllg0cc.jpg",
  },
  role: {
    type: String,
    default: "user",
  },
  resetPasswordToken: String,
  resetPasswordExpire: Date,
});

// password hash
userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 10);
  }

  next();
});

module.exports = mongoose.model("User", userSchema);
