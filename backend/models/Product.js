const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  productName: { type: String, required: true },
  productPrice: { type: Number, required: true },
  imageUrl: { type: String, required: true },
  userId: { type: String, required: true },
});

module.exports = mongoose.model("Product", productSchema);
