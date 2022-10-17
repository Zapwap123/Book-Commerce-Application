const User = require("../models/user");
const Book = require("../models/book");
const jwt = require("jsonwebtoken");

router.post("/", async (req, res) => {
  const { title, description, picture, quantity, book_id, token } = req.body;
  const user = jwt.verify(token, process.env.JWT_SECRET);

  if (user.role === "admin") {
    try {
      const response = await Book.updateOne(
        { book_id },
        {
          $set: { title, description, picture, quantity },
        }
      );

      console.log("Book updated successfully: ", response);
    } catch (error) {
      res.json({ status: "error", error: "Not Authorized" });
    }
  } else {
    res.json({ status: "error", error: "Not Authorized" });
  }

  res.json({ status: "ok" });
});

module.exports = router;
