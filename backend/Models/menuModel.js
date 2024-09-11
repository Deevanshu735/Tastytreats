const mongoose = require("mongoose");

// Define the MenuItem Schema
const menuItemSchema = new mongoose.Schema({
  foodName: {
    type: String,
    required: true,
    trim: true,
  },
  foodPrice: {
    type: Number,
    required: true,
    min: 0,
  },
  foodCategory: {
    type: Number,
    required: true,
  },
  foodImage: {
    type: String,
    default:
      "https://asset.cloudinary.com/dtcgg2i4a/f06849a417e02cff290fe3bf35d6b60b",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Create the MenuItem model
const MenuItem = mongoose.model("MenuItem", menuItemSchema);

module.exports = MenuItem;
