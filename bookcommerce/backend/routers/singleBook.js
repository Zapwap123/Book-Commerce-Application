const router = require("express").Router();
const Book = require("../models/book");

router.get("/:id", async function (req, res) {
  const _id = req.params.id;
  console.log(JSON.stringify(req.params.id));
  // let response = await Book.find().toArray();
  // res.json({ status: "ok", data: response });
  await Book.findOne({ _id }, (err, data) => {
    if (err) {
      console.log("Book Error:  " + err);
      res.json({ status: "error", error: err });
    } else {
      res.json({ status: "ok", data: data });
    }
  });
});

module.exports = router;
