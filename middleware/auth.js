const JWT = require("jsonwebtoken");
const user = require("../models/user");
// const ErrorResponse = require("../utils/errorResponse");
const config = require("../config/config");
const authToken = async (req, res, next) => {
  let token;
  if (req.headers.authorization) {
    token = req.headers.authorization;
  }
  if (!token) {
    return next(new ErrorResponse("No authorize to access this route", 401));
  }
  try {
    const decoded = JWT.verify(token, config.JWT_SECRET);
    req.user = await user.findById(decoded.subject);
    next();
  } catch (err) {
    return next(new ErrorResponse("No authorize to access this route", 401));
  }
};

// exports.user = function (req, res, next) {
//   if (req.user.role !== "moderator") {
//     return next(
//       new ErrorResponse(
//         `user role ${req.user.role} is not authorized to access this route`,
//         403
//       )
//     );
//   }
//   next();
// };

const superadmin = function (req, res, next) {
  if (req.user.role !== "admin") {
    return next(
      new ErrorResponse(
        `user role ${req.user.role} is not authorized to access this route`,
        403
      )
    );
  }
  next();
};
// exports.admin = function (req, res, next) {
//   if (req.user.role !== "moderator") {
//     return next(
//       new ErrorResponse(
//         `user role ${req.user.role} is not authorized to access this route`,
//         403
//       )
//     );
//   }
//   next();
// };

module.exports = { authToken, admin };
