const router = require("express").Router();
const Book = require("../models/book");

router.get("/", async function (req, res) {
  const book_id = req.params.id;
  // let response = await Book.find().toArray();
  // res.json({ status: "ok", data: response });
  await Book.findOne({ _id: book_id }, (err, data) => {
    if (err) {
      console.log("Book Error:  " + err);
      res.json({ status: "error", error: err });
    } else {
      res.json({ status: "ok", data: data });
    }
  });
});

module.exports = router;
