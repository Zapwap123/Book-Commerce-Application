const router = require("express").Router();
const Book = require("../models/book");
const jwt = require("jsonwebtoken");

router.post("/", async (req, res) => {
  const { title, description, quantity, book_id } = req.body;

  // name of the Picture input is sampleFile
  // let samplePicture = req.files.file;
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

  try {
    // const dateTime = new Date();

    // samplePicture.mv(
    //   `${__dirname}/uploads/${title}-${samplePicture.name}-${dateTime}`,
    //   async function (err) {
    //     if (err) {
    //       // console.log(err);
    //       return res.json({
    //         status: "error",
    //         error: "Image not Uploaded",
    //       });
    //     }
    //   }
    // );

    // let picture = `/${title}-${samplePicture.name}-${dateTime}`;

    const response = await Book.updateOne(
      { _id: book_id },
      {
        $set: { title, description, quantity },
      }
    );

    console.log("Book updated successfully: ", response);
  } catch (error) {
    res.json({ status: "error", error: "Not Authorized" });
  }

  res.json({ status: "ok" });
});

module.exports = router;
