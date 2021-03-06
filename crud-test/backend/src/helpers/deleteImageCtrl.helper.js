const deleteImageCtrl = {};
const path = require("path");
const fs = require("fs");
const { promisify } = require("util");

/** Delete a image from the backend generated by any controller
 */

deleteImageCtrl.deleteImg = async (nameImg) => {
  promisify(fs.unlink);
  path.resolve(__dirname, "../storage/imgs", nameImg);
};

module.exports = deleteImageCtrl;
