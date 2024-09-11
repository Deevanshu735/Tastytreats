const mongoose = require("mongoose");
const FoodCategory = require("../Models/categoryModel.js");

exports.getFoodCategory = async (req, res) => {
  try {
    const categories = await FoodCategory.find();
    return res.status(200).json({ categories });
  } catch (error) {
    res.status(501).json({ error });
  }
};
