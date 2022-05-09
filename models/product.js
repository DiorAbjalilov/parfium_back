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
    description: {
      type: String,
    },
    product_img_1: {
      type: String,
      require: true,
    },
    // product_img_2: {
    //   type: String,
    // },
    // product_img_3: {
    //   type: String,
    // },
    // product_img_4: {
    //   type: String,
    // },
    // product_img_5: {
    //   type: String,
    // },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Product", productSchema);
