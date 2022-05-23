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
const { authToken } = require("../middleware/auth");
const router = express.Router();

// photo upload
const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/authPhoto");
  },
  filename: function async(req, file, cb) {
    cb(null, `${Date.now()}-${file.fieldname}`);
  },
});
const upload = multer({ storage: storage });

// users api connect
router.post("/user/signup", postSignUpUser);
router.post("/user/login", postLoginUser);
router.get("/user/me/:id", authToken, getUserId);
router.put("/user/me/:id", authToken, putOneUser);
router.delete("/user/me/:id", authToken, deleteOneUser);

// // products api connect
// router.get("/product/all", getProductAll);
// router.post("/product/add", addNewProduct);
// router.get("/product/one/:id", getOneProduct);
// router.put("/product/one/:id", putOneProduct);
// router.delete("/product/one/:id", deleteOneProduct);

module.exports = router;
