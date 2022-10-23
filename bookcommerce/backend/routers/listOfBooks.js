const router = require("express").Router();
const Book = require("../models/book");

router.get("/", async function (req, res) {
  // let response = await Book.find().toArray();
  // res.json({ status: "ok", data: response });
  await Book.find((err, data) => {
    if (err) {
      console.log("Booklist Error:  " + err);
      res.json({ status: "error", error: err });
    } else {
      res.json({ status: "ok", data: data });
    }
  });
});

module.exports = router;
