const mongoose = require("mongoose");

const CartHistorySchema = new mongoose.Schema(
  {
    username: { type: String, required: true },
    cart_id: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String },
    picture: { type: String },
    total_quantity: { type: Number, required: true },
  },
  {
    collection: "cart_history",
  }
);

const model = mongoose.model("CartHistorySchema", CartHistorySchema);

module.exports = model;
