const jwt = require("jsonwebtoken");
const { generalMessage } = require("../helpers/messages.helper");
const userModel = require("../models/user.model");

const secret = "Antaeus";

const verifyUser = (roles = []) => {
  return (req, res, next) => {
    if (!req.headers.authorization) {
      return generalMessage(res, 401, "", false, "Not authorizated0.");
    }
    const token = req.headers.authorization.split(" ")[1];
    if (token == null) {
      return generalMessage(res, 401, "", false, "Not authorizated1");
    }
    return jwt.verify(token, secret, async (error, payload) => {
      if (error) {
        return generalMessage(res, 401, "", false, "Not authorizated2.");
      }
      const { _id, role } = payload;
      const user = await userModel.findById({ _id });
      if (!user || (roles.length && !roles.includes(role))) {
        return generalMessage(res, 401, "", false, "Not authorizated3.");
      }

      req.iduser = payload._id;
      next();
    });
  };
};

module.exports = verifyUser;
