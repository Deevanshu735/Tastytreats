const instance = require("../utils/payment.js");
const Payment = require("../Models/paymentModel.js");
const crypto = require("crypto");

exports.getKey = async (req, res) => {
  res.status(200).json({ key: process.env.RAZORPAY_API_KEY });
};
exports.checkout = async (req, res) => {
  try {
    const { totalPrice } = req.body;
    const options = {
      amount: Number(totalPrice * 100),
      currency: "INR",
    };

    const order = await instance.orders.create(options);
    res.status(200).json({ order });
  } catch (error) {
    console.error("Error creating checkout session:", error);
    res.status(500).send("Internal Server Error");
  }
};

exports.paymentVerification = async (req, res) => {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
    req.body;

  const body = razorpay_order_id + "|" + razorpay_payment_id;
  const expectedSignature = crypto
    .createHmac("sha256", process.env.RAZORPAY_API_SECRET)
    .update(body.toString())
    .digest("hex");

  const isAuthentic = expectedSignature === razorpay_signature;

  if (isAuthentic) {
    const newPayment = await Payment.create({
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
    });

    console.log(newPayment);

    res.redirect(
      `http://localhost:3000/paymentsuccess?reference=${razorpay_payment_id}`
    );
  } else {
    res.status(400).json({
      success: false,
    });
  }
};
