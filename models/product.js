const mongoose = require("mongoose");
// const config = require("../config/config");
const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    price: {
      type: String,
      require: true,
    },
    title: {
      type: String,
      require: true,
    },
    bassic_store: {
      type: String,
      require: true,
    },
    description: {
      type: String,
    },
    product_img_1: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Product", productSchema);
