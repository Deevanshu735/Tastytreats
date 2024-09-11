const mongoose = require("mongoose");
const validator = require("validator");

const reservationSchema = new mongoose.Schema({
  // user: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "User", // Reference to the User model
  //   required: true,
  // },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    validate: [validator.isEmail, "Please enter a valid email"],
    required: true,
    unique: [true, "Email already exist"],
    trim: true,
    lowercase: true,
  },
  phone: {
    type: Number,
    required: true,
    trim: true,
  },
  date: {
    type: Date,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  people: {
    type: Number,
    required: true,
    min: 1,
    // max: 25,
  },
  message: {
    type: String,
    maxlength: 500,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Create the Reservation model
const Reservation = mongoose.model("Reservation", reservationSchema);

module.exports = Reservation;
