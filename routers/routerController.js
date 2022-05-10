const express = require("express");
const router = express.Router();

// users api connect
router.get("/user/me/:id");
router.post("/user/login");
router.post("/user/sigin");
router.put("/user/me/:id");
router.delete("/user/me/:id");

// products api connect
router.get("/product/all");
router.post("/product/add");
router.put("/product/one/:id");
router.delete("/product/one/:id");

module.exports = router;
