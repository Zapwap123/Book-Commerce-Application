const router = require("express").Router();
const jwt = require("jsonwebtoken");

router.post("/", (req, res) => {
  const { token } = req.body;
  const user = jwt.verify(token, process.env.JWT_SECRET);

  if (!user) {
    return res.json({ status: "error", error: "Invalid username/password" });
  }

  if (user.role === "admin" || user.role === "user") {
    const newToken = null;

    res.json({ status: "ok", data: newToken });
  }
  res.json({ status: "error", error: "Invalid username/password" });
});

module.exports = router;
