const user = require("../models/user");
const jwt = require("jsonwebtoken");
const config = require("../config/config");

// post user signup
const postSignUpUser = async (req, res) => {
  try {
    const { username, password, phone } = req.body;
    const isUser = await user.find({ phone });
    if (isUser.length) {
      res.status(401).json({ success: false, data: "Such a user exists" });
    } else {
      const createNewUser = new user({
        username,
        password,
        phone,
      });
      const payload = { subject: createNewUser._id };
      const token = jwt.sign(payload, config.JWT_SECRET);
      await createNewUser.save();
      res
        .status(201)
        .json({ success: true, data: createNewUser, token: token });
    }
  } catch (error) {
    res.status(400).json({ success: false, data: [] });
    console.log(error);
  }
};

// post user login
const postLoginUser = async (req, res) => {
  const { password, phone } = req.body;
  try {
    if (!phone || !password) {
      res
        .status(400)
        .json({ success: false, data: "Please provide email and password" });
    }
    const isUser = await user.find({ phone, password });
    if (!isUser.length) {
      res
        .status(404)
        .json({ success: true, data: "No such information is available" });
    } else {
      const payload = { subject: isUser._id };
      const token = jwt.sign(payload, config.JWT_SECRET);
      res.status(200).json({
        token: token,
      });
    }
  } catch (error) {
    res.status(400).json({ success: false, data: [] });
  }
};

// get user info
const getUserId = async (req, res) => {
  try {
    res.status(200).json({ success: true, data: "get user info" });
  } catch (error) {
    res.status(401).json({ success: false, data: [] });
  }
};

// put user info
const putOneUser = async (req, res) => {
  try {
    res.status(200).json({ success: true, data: "update one user" });
  } catch (error) {
    res.status(404).json({ success: false, data: [] });
  }
};

// delete user one
const deleteOneUser = async (req, res) => {
  try {
    res.status(200).json({ success: true, data: "delete one user" });
  } catch (error) {
    res.status(404).json({ success: false, data: [] });
  }
};

module.exports = {
  getUserId,
  postLoginUser,
  postSignUpUser,
  putOneUser,
  deleteOneUser,
};
