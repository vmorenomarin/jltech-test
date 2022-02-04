const multer = require("multer");
const path = require("path");
const { v4: uuidv4 } = require("uuid");

const imageCategoryStorage = (category) => {
  /** Returns the storage for the given category
   * Categories: user, product
   */
  const storage = multer.diskStorage({
    destination: path.join(__dirname, `..storage/imgs/${category}`),
    filename: (req, file, cb) => {
      cb(null, uuidv4 + path.extname(file.originalname.toLocaleLowerCase()));
    },
  });

  return storage;
};

const upload = (category) => {
  return multer({
    storage: imageCategoryStorage(category),
    fileFilter: (req, file, cb) => {
      const fileTypes = /jpg|png|svg|jpeg|JPG|PNG|SVG|JPEG/;
      const mimetype = fileTypes.test(file.mimetype);
      const extname = fileTypes.test(path.extname(file.originalname));
      if (mimetype && extname) {
        return cb(null, true);
      }
      cb("Error: file must has jpg|jpeg|JPG|JPEG|PNG|png|svg|SVG extension.");
    },
  });
};

module.exports = upload;
