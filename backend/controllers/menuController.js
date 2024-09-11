const MenuItem = require("../Models/menuModel.js");
const uploadOnCloudinary = require("../utils/cloudinary.js");

// Create a new menu item
exports.createMenuItem = async (req, res) => {
  try {
    const { foodName, foodPrice, foodCategory } = req.body;
    // console.log(req.body);

    const foodImage = req.file;
    const foodImageCloud = await uploadOnCloudinary(foodImage.path, "menu");

    const newMenuItem = await MenuItem.create({
      foodName,
      foodPrice,
      foodCategory,
      foodImage: foodImageCloud.eager[0].url,
    });

    res.status(201).json({
      message: "Menu item created successfully!",
      newMenuItem,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all menu items
exports.getAllMenuItems = async (req, res) => {
  try {
    const menuItems = await MenuItem.find();
    res.status(200).json(menuItems);
  } catch (error) {
    res.status(500).json({ error: "Server error: " + error.message });
  }
};

// Get a single menu item by ID
exports.getMenuItemById = async (req, res) => {
  try {
    const { id } = req.params;
    const menuItem = await MenuItem.find({ foodCategory: id });

    if (!menuItem) {
      return res.status(404).json({ message: "Menu item not found" });
    }

    res.status(200).json(menuItem);
  } catch (error) {
    res.status(500).json({ error: "Server error: " + error.message });
  }
};

// Update a menu item by ID
exports.updateMenuItem = async (req, res) => {
  try {
    const { id } = req.params;
    const { itemName, itemPrice, foodCategory, imageUrl, cloudinaryId } =
      req.body;

    const updatedMenuItem = await MenuItem.findByIdAndUpdate(
      id,
      {
        itemName,
        itemPrice,
        foodCategory,
        imageUrl,
        cloudinaryId,
      },
      { new: true }
    );

    if (!updatedMenuItem) {
      return res.status(404).json({ message: "Menu item not found" });
    }

    res.status(200).json({
      message: "Menu item updated successfully!",
      menuItem: updatedMenuItem,
    });
  } catch (error) {
    res.status(500).json({ error: "Server error: " + error.message });
  }
};

// Delete a menu item by ID
exports.deleteMenuItem = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedMenuItem = await MenuItem.findByIdAndDelete(id);

    if (!deletedMenuItem) {
      return res.status(404).json({ message: "Menu item not found" });
    }

    res.status(200).json({
      message: "Menu item deleted successfully!",
      menuItem: deletedMenuItem,
    });
  } catch (error) {
    res.status(500).json({ error: "Server error: " + error.message });
  }
};
