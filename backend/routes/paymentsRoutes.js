const express = require("express");
const router = express.Router();

const paymentsController = require("../controllers/paymentsController");

router.post("/payment", paymentsController.payment);
router.get("/getKey", paymentsController.payment);
