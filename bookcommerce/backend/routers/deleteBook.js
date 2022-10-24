const router = require("express").Router();
const Book = require("../models/book");
const jwt = require("jsonwebtoken");

router.post("/", async (req, res) => {
  const { book_id } = req.body;

  const authorization = req.headers.Authorization || req.headers.authorization;
  if (!authorization) {
    return res.json({
      status: "error",
      error: "Not Allowed",
    });
  }

  const token = authorization.split(" ")[1];

  const user = jwt.verify(token, process.env.JWT_SECRET);

  const { role } = user;

  if (role !== "admin") {
    return res.json({ status: "error", error: "Not Authorized" });
  }

  console.log("Book ID:  " + JSON.stringify(req.body));
  await Book.deleteOne({ _id: book_id }, (err, data) => {
    if (err) {
      console.log("Book Error:  " + err);
      res.json({ status: "error", error: "Not Authorized" });
    } else {
      console.log("Book deleted successfully: ", data);

      res.json({ status: "ok", data: data });
    }
  });
});
module.exports = router;
