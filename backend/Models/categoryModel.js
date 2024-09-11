const mongoose = require("mongoose");

// Define the FoodCategory Schema
const foodCategorySchema = new mongoose.Schema({
  foodId: {
    type: Number,
    required: true,
    unique: true,
    trim: true,
  },
  foodCategory: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Create the FoodCategory model
const FoodCategory = mongoose.model("FoodCategory", foodCategorySchema);

module.exports = FoodCategory;
