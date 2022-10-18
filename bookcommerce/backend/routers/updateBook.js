const router = require("express").Router();
const Book = require("../models/book");
const jwt = require("jsonwebtoken");

router.post("/", async (req, res) => {
  const { title, description, quantity, book_id, token } = req.body;
  const user = jwt.verify(token, process.env.JWT_SECRET);

  // name of the Picture input is sampleFile
  let samplePicture = req.files.file;

  if (user.role === "admin") {
    try {
      samplePicture.mv(
        `${__dirname}/uploads/${title}-${samplePicture.name}`,
        async function (err) {
          if (err) {
            console.log(err);
            return res.status(500).send({ msg: "Error occured" });
          }
        }
      );

      let picture = `/${title}-${samplePicture.name}`;

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
