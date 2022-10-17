const router = require("express").Router();
const jwt = require("jsonwebtoken");

router.post("/", async (req, res) => {
  const user = jwt.verify(token, process.env.JWT_SECRET);

  if (!user) {
    return res.json({ status: "error", error: "Invalid username/password" });
  }

  if (user.role === "admin" || user.role === "user") {
    const token = null;

    res.json({ status: "ok", data: token });
  }
  res.json({ status: "error", error: "Invalid username/password" });
});

module.exports = router;
