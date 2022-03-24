const jwt = require("jsonwebtoken");
const { generalMessage } = require("../helpers/messages.helper");
const userModel = require("../models/user.model");

const secret = "Antaeus";

const verifyUser = (roles = []) => {
  /** Verifies token and user role.*/
  return (req, res, next) => {
    if (!req.headers.authorization) {
      return generalMessage(res, 401, "", false, "Not authorizated.");
    }
    const token = req.headers.authorization.split(" ")[1];
    if (token == null) {
      return generalMessage(res, 401, "", false, "Not authorizated1");
    }
    return jwt.verify(token, secret, async (error, payload) => {
      if (error) {
        return generalMessage(res, 401, "", false, "Not authorizated2.");
      }
      const { _id } = payload;
      const user = await userModel.findById({ _id });
      if (!roles.includes(user.role)) {
        return generalMessage(res, 401, "", false, "Not authorizated3");
      }
      req.id = payload._id;
      req.role = payload.role;
      next();
    });
  };
};

module.exports = verifyUser;
