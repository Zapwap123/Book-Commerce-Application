const router = require("express").Router();
const Book = require("../models/book");
const jwt = require("jsonwebtoken");
const farmhash = require("farmhash");

router.post("/", async (req, res) => {
  const { title, description, quantity } = req.body;

  // name of the Picture input is sampleFile
  let samplePicture = req.files.file;

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

  const allowdTypes = ["image/jpeg", "image/jpg", "image/png"];
  if (!allowdTypes.includes(samplePicture.mimetype)) {
    return res.json({
      status: "error",
      error: `Image file must be "jpeg", "jpg" or "png" `,
    });
  }

  try {
    const dateTime = new Date();
    const Unique = farmhash.hash64(
      new Buffer.from(title + samplePicture.name + dateTime)
    );

    samplePicture.mv(
      `${__dirname}/uploads/${Unique}-${samplePicture.name}`,
      async function (err) {
        if (err) {
          console.log("Image Error: " + err);
          return res.json({
            status: "error",
            error: "Image not Uploaded",
          });
          // return res.status(500).send({ msg: "Error occured" });
        }
      }
    );

    let picture = `/${Unique}-${samplePicture.name}`;

    await Book.create({
      title,
      description,
      picture,
      quantity,
    })
      .catch((err) => {
        console.log(err);
        res.json({ status: "error", error: "Unable to add book" });
      })
      .then((data) => {
        res.send(data);
      });
  } catch (error) {
    res.json({ status: "error", error: "Unable to add book" });
  }

  res.json({ status: "ok" });
});

module.exports = router;
