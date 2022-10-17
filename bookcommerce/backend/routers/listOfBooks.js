const router = require("express").Router();
const Book = require("../models/book");
const jwt = require("jsonwebtoken");

router.post("/", async (req, res) => {
  try {
    const response = await Book.find().toArray(function (err, result) {
      if (err) throw err;
      console.log("List of all books successfully retrived: ", response);
      res.json({ status: "ok", data: response });
    });
  } catch (error) {
    res.json({ status: "error", error: "Unable to retrive data" });
  }

  res.json({ status: "ok" });
});

module.exports = router;
