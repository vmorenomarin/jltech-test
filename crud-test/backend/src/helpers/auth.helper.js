const bcrypt = require("bcrypt");
const { generalMessage } = require("./messages.helper");

const auth = {};

auth.encryptPassword = (password) => {
  /** Returns the user password hashed. */
  try {
    /** Adds some random characters to the user password. */
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    return hash;
  } catch (error) {
    generalMessage(res, 500, "", false, error.message);
  }
};

module.exports = auth;
