const Reservation = require("../Models/reservationModel.js");

// Create a Reservation
exports.createReservation = async (req, res) => {
  try {
    // const loggedInUser = req.user;
    const { name, email, phone, date, time, people, message } = req.body;

    const reservationDateTime = new Date(`${date} T${time}`);

    // Check if the reservation date is in the past
    if (reservationDateTime < Date.now()) {
      return res
        .status(400)
        .json({ error: "Reservation date cannot be in the past." });
    }

    // Check if the reservation time is at least 4 hours from now
    const fourHoursFromNow = new Date(Date.now() + 4 * 60 * 60 * 1000);
    if (reservationDateTime < fourHoursFromNow) {
      return res
        .status(400)
        .json({ error: "Reservation time must be at least 4 hours from now." });
    }

    const newReservation = await Reservation.create({
      // user: loggedInUser._id,
      // name: loggedInUser.name,
      // email: loggedInUser.email,
      // phone: loggedInUser.phone,
      name,
      email,
      phone,
      date,
      time,
      people,
      message,
    });

    res.status(201).json({
      message: "Reservation created successfully!",
      reservation: newReservation,
    });
  } catch (error) {
    res.status(500).json({ message: "Reservation Failed", error });
  }
};

// Get All Reservations for Admin
exports.getReservations = async (req, res) => {
  try {
    const reservations = await Reservation.find();

    res.status(200).json({ reservations });
  } catch (error) {
    res.status(500).json({ message: "Get Reservation Failed", error });
  }
};

// Get a Single Reservation by ID
exports.getReservationById = async (req, res) => {
  try {
    const reservation = await Reservation.findById(req.params.id);

    if (!reservation) {
      return res.status(404).json({ error: "Reservation not found" });
    }

    res.status(200).json({ reservation });
  } catch (error) {
    res.status(500).json({ error: "Server error: " + error.message });
  }
};

// Delete a Reservation
exports.deleteReservation = async (req, res) => {
  try {
    const reservation = await Reservation.findByIdAndDelete(req.params.id);

    if (!reservation) {
      return res.status(404).json({ error: "Reservation not found" });
    }

    res.status(200).json({ message: "Reservation deleted successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Server error: " + error.message });
  }
};
