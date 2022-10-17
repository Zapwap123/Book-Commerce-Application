const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    picture: { type: String },
    quantity: { type: Number, required: true },
  },
  {
    collection: "books",
  }
);

const model = mongoose.model("BookSchema", BookSchema);

module.exports = model;
