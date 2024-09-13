const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const connectDatabase = require("./config/db.js");
const userRoutes = require("./routes/userRoutes.js");
const reservationRoutes = require("./routes/reservationRoutes.js");
const foodCategoryRoutes = require("./routes/foodCategoryRoutes.js");
const menuRoutes = require("./routes/menuRoutes.js");
const paymentRoutes = require("./routes/paymentsRoutes.js")
const cloudinary = require("cloudinary");
const session = require("express-session");

app.use(
  session({
    secret: "Zampa singh",
    resave: false,
    saveUninitialized: false,
    // cookie: { maxAge: 600000 } // Session expires after 10 minutes
  })
);

// Configure Cloudinary
cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

connectDatabase();
app.use(cors());
app.use(express.json({ limit: "2mb" }));
app.use(express.urlencoded({ limit: "2mb", extended: true }));

app.get("/", (req, res) => {
  res.send("Hello, World!");
});
app.use("/api/users", userRoutes);
app.use("/api/reservations", reservationRoutes);

app.use("/api/foods", foodCategoryRoutes);
app.use("/api/foods", menuRoutes);

app.use("/api/payments", paymentRoutes);
{
  try {
    app.listen(5000, () => {
      console.log("Server is running on port 5000");
    });
  } catch (error) {
    console.log(error.message);
  }
}
