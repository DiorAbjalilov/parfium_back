const product = require("../models/product");
// get products all
const getProductAll = async (res, req) => {
  try {
    const products = await product.find();
    res
      .status(200)
      .json({ success: true, data: products, message: "get all products" });
  } catch (error) {
    res.status(404).json({
      success: false,
      data: [],
      message: error,
    });
  }
};

// post add new product
const addNewProduct = async (res, req) => {
  try {
    const { name, price, title, bassic_store, description, product_img_1 } =
      req.body;
    if (name && price && title && bassic_store && product_img_1) {
      const newProduct = new product({
        name,
        price,
        title,
        bassic_store,
        description,
        product_img_1,
      });
      res
        .status(200)
        .json({ success: true, data: newProduct, message: "add new product" });
    }
    res
      .status(400)
      .json({ success: false, data: [], message: "add new product falide" });
  } catch (error) {
    res.status(404).json({
      success: false,
      data: [],
      message: error,
    });
  }
};

// get one products
const getOneProduct = async (res, req) => {
  try {
    const { id } = req.params;
    const product = await product.findById(id);
    if (!product) {
      res
        .status(404)
        .json({ success: false, data: [], message: "product not found" });
    }
    res
      .status(200)
      .json({ success: true, data: product, message: "get one product" });
  } catch (error) {
    res.status(404).json({
      success: false,
      data: [],
      message: error,
    });
  }
};

// update one product
const putOneProduct = async (res, req) => {
  try {
    const { id } = req.params;
    const product = await product.findById(id);
    if (product) {
      Object.assign(product, req.body);
      await product
        .save()
        .then(() => {
          res
            .status(200)
            .json({ success: true, data: product, message: "update product" });
        })
        .catch((error) => {
          res.status(400).json({ success: false, data: [], message: error });
        });
    }
    res.status(200).json({ success: true, data: "update one product" });
  } catch (error) {
    res.status(404).json({ success: false, data: [], message: error });
  }
};

// delete one product
const deleteOneProduct = async (res, req) => {
  try {
    const { id } = req.params;
    const product = await product.findById(id);
    if (product) {
      await product
        .remove()
        .then(() => {
          res
            .status(200)
            .json({ success: true, data: product, message: "delete product" });
        })
        .catch((error) => {
          res.status(400).json({ success: false, data: [], message: error });
        });
    }
    res
      .status(200)
      .json({ success: false, data: [], message: "product not found" });
  } catch (error) {
    res.status(404).json({ success: false, data: [], message: error });
  }
};

module.exports = {
  getProductAll,
  getOneProduct,
  addNewProduct,
  putOneProduct,
  deleteOneProduct,
};
