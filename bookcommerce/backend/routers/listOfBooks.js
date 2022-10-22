const router = require("express").Router();
const Book = require("../models/book");

router.get("/", async (req, res) => {
  try {
    response = await Book.find().toArray();

    console.log("List of all books successfully retrived: ", response);
    res.json({ status: "ok", data: response });
  } catch (error) {
    res.json({ status: "error", error: "Unable to retrive data" });
  }
});

module.exports = router;
