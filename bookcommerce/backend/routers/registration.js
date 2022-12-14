const router = require("express").Router();
const User = require("../models/user");
const bcrypt = require("bcrypt");

router.post("/", async (req, res) => {
  const {
    username,
    password: plainPassword,
    password_confirm,
    role,
  } = req.body;

  if (!username || typeof username !== "string") {
    return res.json({ status: "error", error: "Invalid username" });
  }

  if (!plainPassword || typeof plainPassword !== "string") {
    return res.json({ status: "error", error: "Invalid password" });
  }

  if (plainPassword !== password_confirm) {
    return res.json({
      status: "error",
      error: "Passwords entered must be the same",
    });
  }

  if (plainPassword.length < 5) {
    return res.json({
      status: "error",
      error: "Password should be atleast 6 characters",
    });
  }

  const password = await bcrypt.hash(plainPassword, 13);

  try {
    const response = await User.create({
      username,
      password,
      role,
    });
    console.log("User created successfully: ", response);
  } catch (error) {
    if (error.code === 11000) {
      return res.json({ status: "error", error: "Username already in use" });
    }
    throw error;
  }

  res.json({ status: "ok" });
});

module.exports = router;
