const mongoose = require("mongoose");
const config = require("../config/config");
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
    },
    password: {
      type: String,
      require: true,
    },
    role: {
      type: String,
      require: true,
      enum: ["admin", "user", "super"],
    },
  },
  {
    timestamps: true,
  }
);

// Registr JWT
// userSchema.methods.getSignedJWT = function () {
//   return JWT.sign({ id: this._id }, config.JWT_SECRET, {
//     expiresIn: config.JWT_EXPIRE,
//   });
// };

module.exports = mongoose.model("User", userSchema);
