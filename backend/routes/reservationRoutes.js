const express = require("express");
const router = express.Router();
const reservationController = require("../controllers/reservationController");

router.get("/getreservations", reservationController.getReservations);
router.get("/getreservation/:id", reservationController.getReservationById);
router.post("/reserve", reservationController.createReservation);
router.delete("/deletereservation", reservationController.deleteReservation);

module.exports = router;
