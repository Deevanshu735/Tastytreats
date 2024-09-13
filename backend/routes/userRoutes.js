const userController = require("../controllers/userController.js");
const express = require("express");
const upload = require("../middleware/multer.js");
const router = express.Router();

router.post("/register", upload.single("avatar"), userController.register);
router.post("/login", userController.login);
router.get("/all", userController.getAllUsers);
router.post("/verifyotp", userController.verifyOTP);

module.exports = router;
