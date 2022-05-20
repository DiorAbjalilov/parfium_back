// post user signup
const postSignUpUser = async (res, req) => {
  try {
    res.status(201).json({ success: true, data: "post sigin user" });
  } catch (error) {
    res.status(400).json({ success: false, data: [] });
  }
};

// post user login
const postLoginUser = async (res, req) => {
  try {
    res.status(200).json({ success: true, data: "post login user" });
    // mijoz ro'yxatdan o'tmagan
    res.status(401).json({ success: false, data: [] });
    // so'ralgan ma'lumotlar yo'q serverda
    res.status(404).json({ success: false, data: "Not Found" });
  } catch (error) {
    res.status(400).json({ success: false, data: [] });
  }
};

// get user info
const getUserId = async (res, req) => {
  try {
    res.status(200).json({ success: true, data: "get user info" });
  } catch (error) {
    res.status(401).json({ success: false, data: [] });
  }
};

// put user info
const putOneUser = async (res, req) => {
  try {
    res.status(200).json({ success: true, data: "update one user" });
  } catch (error) {
    res.status(404).json({ success: false, data: [] });
  }
};

// delete user one
const deleteOneUser = async (res, req) => {
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
