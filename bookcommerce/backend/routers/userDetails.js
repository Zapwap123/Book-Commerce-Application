const router = require("express").Router();
const User = require("../models/user");
const jwt = require("jsonwebtoken");

router.get("/", async (req, res) => {
  try {
    const authorization =
      req.headers.Authorization || req.headers.authorization;
    if (!authorization) {
      return res.json({
        status: "error",
        error: "There is no bearer token in the headers",
      });
    }

    const token = authorization.split(" ")[1];
    const jwtUser = jwt.verify(token, process.env.JWT_SECRET);

    const { username } = jwtUser;

    const user = await User.findOne({ username }).lean();
    if (!user) {
      return res.json({
        status: "error",
        error: "User not found",
      });
    }

    res.json({
      status: "ok",
      user: {
        userId: user._id,
        username: user.username,
        role: user.role,
      },
    });
  } catch (error) {
    console.log("UNAUTHORIZED");
    res.json({ status: "error", error: "UNAUTHORIZED" });
  }
});

module.exports = router;
