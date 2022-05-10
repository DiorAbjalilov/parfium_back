// get one user
const getUserId = async (res, req) => {
  try {
    res.status(200).json({ success: true, data: "get user" });
  } catch (error) {
    res.status(404).json({ success: false, data: [] });
  }
};

// post user login
const postLoginUser = async (res, req) => {
  try {
    res.status(200).json({ success: true, data: "post login user" });
  } catch (error) {
    res.status(404).json({ success: false, data: [] });
  }
};

// post user sigin
const postSiginUser = async (res, req) => {
  try {
    res.status(200).json({ success: true, data: "post sigin user" });
  } catch (error) {
    res.status(404).json({ success: false, data: [] });
  }
};

// put user id
const putOneUser = async (res, req) => {
  try {
    res.status(200).json({ success: true, data: "update one user" });
  } catch (error) {
    res.status(404).json({ success: false, data: [] });
  }
};

// delete user id
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
  postSiginUser,
  putOneUser,
  deleteOneUser,
};
