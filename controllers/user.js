const user = require("../models/user");
const jwt = require("jsonwebtoken");
const config = require("../config/config");

// post user signup
const postSignUpUser = async (req, res) => {
  try {
    const { username, password, phone } = req.body;
    const isUser = await user.find({ phone });
    if (isUser.length) {
      res.status(401).json({ success: false, data: [], message: "user exist" });
    } else {
      const createNewUser = new user({
        username,
        password,
        phone,
      });
      const payload = { subject: createNewUser._id };
      const token = jwt.sign(payload, config.JWT_SECRET);
      await createNewUser.save();
      res.status(201).json({
        success: true,
        data: createNewUser,
        token: token,
        message: "user created",
      });
    }
  } catch (error) {
    res.status(400).json({ success: false, data: [], message: error });
    console.log(error);
  }
};

// post user login
const postLoginUser = async (req, res) => {
  const { password, phone } = req.body;
  try {
    if (!phone || !password) {
      res.status(400).json({
        success: false,
        data: [],
        message: "phone or password is empty",
      });
    }
    const isUser = await user.find({ phone, password });
    if (!isUser.length) {
      res
        .status(404)
        .json({ success: true, data: [], message: "user not found" });
    } else {
      const payload = { subject: isUser._id };
      const token = jwt.sign(payload, config.JWT_SECRET);
      res.status(200).json({
        success: true,
        token: token,
        data: isUser,
        message: "user login",
      });
    }
  } catch (error) {
    res.status(400).json({ success: false, data: [], message: error });
  }
};

// get user info
const getUserId = async (req, res) => {
  try {
    const isUser = await user.findById({ _id: req.params.id });
    if (isUser.length) {
      res
        .status(404)
        .json({ success: true, data: [], message: "user not found" });
    } else {
      res.status(200).json({
        success: true,
        data: isUser,
        message: "user info",
      });
    }
  } catch (error) {
    res.status(401).json({ success: false, data: [], message: error });
  }
};

// put user info
const putOneUser = async (req, res) => {
  const { phone } = req.body;
  try {
    const isUser = await user.findById({ _id: req.params.id });
    console.log(isUser);
    if (isUser) {
      const isPhone = await user.find({ phone });
      console.log(Boolean(isPhone.length));
      if (!isPhone.length) {
        Object.assign(isUser, req.body);
        await isUser
          .save()
          .then(() => {
            res
              .status(200)
              .json({ success: true, data: isUser, message: "user updated" });
          })
          .catch((error) => {
            res.status(400).json({ success: false, data: [], message: error });
          });
      }
    }
    res
      .status(404)
      .json({ success: false, data: [], message: "user not found" });
  } catch (error) {
    res.status(401).json({ success: false, data: [], message: error });
  }
};

// delete user one
const deleteOneUser = async (req, res) => {
  try {
    if (req.params.id === req.user.id) {
      const isUser = await user.findByIdAndDelete({ _id: req.params.id });
      if (isUser) {
        res
          .status(200)
          .json({ success: true, data: [], message: "user deleted" });
      }
    }
    res
      .status(401)
      .json({ success: false, data: [], message: "user not found" });
    res.status(200).json({ success: true, data: [], message: "user deleted" });
  } catch (error) {
    res.status(404).json({ success: false, data: [], message: error });
  }
};

module.exports = {
  getUserId,
  postLoginUser,
  postSignUpUser,
  putOneUser,
  deleteOneUser,
};
