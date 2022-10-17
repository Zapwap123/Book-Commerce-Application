const Book = require("../models/book");
const jwt = require("jsonwebtoken");
// const multer = require("multer");

router.post("/", async (req, res) => {
  const { title, description, quantity, token } = req.body;

  // name of the Picture input is sampleFile
  let samplePicture = req.files.file;

  const user = jwt.verify(token, process.env.JWT_SECRET);

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

      const response = await Book.create({
        title,
        description,
        picture,
        quantity,
      });

      console.log("New book created successfully: ", response);
    } catch (error) {
      res.json({ status: "error", error: "Not Authorized" });
    }
  } else {
    res.json({ status: "error", error: "Not Authorized" });
  }

  res.json({ status: "ok" });
});

module.exports = router;
