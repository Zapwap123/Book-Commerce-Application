const router = require("express").Router();
const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

router.post("/", async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username }).lean();

    if (!user) {
      return res.json({ status: "error", error: "Invalid username/password" });
    }

    if (await bcrypt.compare(password, user.password)) {
      const token = jwt.sign(
        { id: user._id, username: user.username, role: user.role },
        process.env.JWT_SECRET
      );

      res.json({ status: "ok", data: token });
    }
  } catch (error) {
    console.log(error);
    res.json({ status: "error", error: "Invalid username/password" });
  }

  res.json({ status: "error", error: "Invalid username/password" });
});

module.exports = router;
