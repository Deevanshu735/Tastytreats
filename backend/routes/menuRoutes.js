const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer.js");

const menuController = require("../controllers/menuController.js");

router.post(
  "/menu-add",
  upload.single("foodImage"),
  menuController.createMenuItem
);
router.get("/menu", menuController.getAllMenuItems);
router.patch("/menu-update/:id", menuController.updateMenuItem);
router.delete("/menu-delete/:id", menuController.deleteMenuItem);

module.exports = router;
