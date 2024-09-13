const instance = require("../utils/payment.js");

exports.payment = async (req, res) => {
  try {
    const { } = req.body;
    console.log(totalPrice);
    const options = {
      amount: Number(amount * 100),
      currency: "INR",
      description: "Tasty Treats order Payments",
      customer: {
        name,
        contact: phone,
        email: email,
      },
    };
  } catch (error) {
    console.error("Error creating checkout session:", error);
    res.status(500).send("Internal Server Error");
  }
};
