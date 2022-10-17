const router = require("express").Router();
const Book = require("../models/book");
const jwt = require("jsonwebtoken");

router.post("/", async (req, res) => {
  const { book_id, token } = req.body;
  const user = jwt.verify(token, process.env.JWT_SECRET);

  if (user.role === "admin") {
    try {
      const response = await Book.deleteOne({ book_id });

      console.log("Book deleted successfully: ", response);
    } catch (error) {
      res.json({ status: "error", error: "Not Authorized" });
    }
  } else {
    res.json({ status: "error", error: "Not Authorized" });
  }

  res.json({ status: "ok" });
});

module.exports = router;
