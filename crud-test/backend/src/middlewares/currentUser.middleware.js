const { generalMessage } = require("../helpers/messages.helper");

const currentUser = (req, res, next) => {
  if (req.id === req.params.id || req.role === "Admin") {
    return next();
  }
  return generalMessage(res, 401, "", false, "Not allowed.");
};

module.exports = currentUser;
