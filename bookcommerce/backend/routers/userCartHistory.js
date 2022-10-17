const router = require("express").Router();
const Cart = require("../models/cartHistory");
const jwt = require("jsonwebtoken");
const farmhash = require("farmhash");

router.post("/", async (req, res) => {
  const { token } = req.body;
  const user = jwt.verify(token, process.env.JWT_SECRET);

  if (user.role === "admin") {
    try {
      const response = await Cart.findAll();

      console.log("Cart history successfully retrived");
      res.json({ status: "ok", data: response });
    } catch (error) {
      res.json({ status: "error", error: "Not Authorized" });
    }
  } else {
    res.json({ status: "error", error: "Not Authorized" });
  }

  res.json({ status: "ok" });
});

module.exports = router;
