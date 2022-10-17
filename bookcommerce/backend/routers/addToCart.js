const Cart = require("../models/cartHistory");
const jwt = require("jsonwebtoken");
const farmhash = require("farmhash");

router.post("/", async (req, res) => {
  var cartData = [];
  cartData = req.body.cartData;
  const { token } = req.body;
  const user = jwt.verify(token, process.env.JWT_SECRET);

  if (user.role === "admin" || user.role === "user") {
    try {
      var date_now = new Date();
      const items_of_same_cart_id = farmhash.hash64(
        new Buffer.from(user.username + cartData.length + date_now)
      );
      for (i = 0; i < cartData.length; ++i) {
        const username = user.username;
        const cart_id = items_of_same_cart_id;
        const title = cartData[i].title;
        const description = cartData[i].description;
        const picture = cartData[i].picture;
        const total_quantity = cartData[i].total_quantity;

        await Cart.create({
          username,
          cart_id,
          title,
          description,
          picture,
          total_quantity,
        });
      }

      console.log("Cart created successfully");
    } catch (error) {
      res.json({ status: "error", error: "Not Authorized" });
    }
  } else {
    res.json({ status: "error", error: "Not Authorized" });
  }

  res.json({ status: "ok" });
});

module.exports = router;
