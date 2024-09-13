const express = require("express");
const router = express.Router();

const paymentsController = require("../controllers/paymentsController");

router.get("/getKey", paymentsController.getKey);
router.post("/checkout", paymentsController.checkout);
router.post("/paymentverification", paymentsController.paymentVerification);

module.exports = router;
