const router = require("express").Router();
const Book = require("../models/book");
const jwt = require("jsonwebtoken");

router.get("/", async (req, res) => {
  try {
    await Book.find().toArray(function (err, response) {
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
