const express = require("express");
const {
  getProductAll,
  getOneProduct,
  addNewProduct,
  putOneProduct,
  deleteOneProduct,
} = require("../controllers/products");
const {
  getUserId,
  postLoginUser,
  postSignUpUser,
  putOneUser,
  deleteOneUser,
} = require("../controllers/user");
const router = express.Router();

// users api connect
router.post("/user/signup", postSignUpUser);
router.post("/user/login", postLoginUser);
// router.get("/user/me/:id", getUserId);
// router.put("/user/me/:id", putOneUser);
// router.delete("/user/me/:id", deleteOneUser);

// // products api connect
// router.get("/product/all", getProductAll);
// router.post("/product/add", addNewProduct);
// router.get("/product/one/:id", getOneProduct);
// router.put("/product/one/:id", putOneProduct);
// router.delete("/product/one/:id", deleteOneProduct);

module.exports = router;
