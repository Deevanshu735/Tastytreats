const express = require("express");
const router = express.Router();

const foodCategoryController = require("../controllers/foodCategoryController.js");
const menuController = require("../controllers/menuController.js");

router.get("/getfoodcategory", foodCategoryController.getFoodCategory);
router.get("/getfooditems/:id", menuController.getMenuItemById);

module.exports = router;
