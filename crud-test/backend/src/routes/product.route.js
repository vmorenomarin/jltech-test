const { Router } = require("express");
const route = Router();
const productCtrl = require("../controllers/product.controller");
const upload = require("../middlewares/imgUploader.middleware");
const verifyUser = require("../middlewares/verifyUser.middleware");
const roles = require("../helpers/roles.helper");

route.get("/", verifyUser(roles[0]), productCtrl.listProducts);
route.get(
  "/p/:id",
  verifyUser([roles[0], roles[1]]),
  productCtrl.listProductById
);
route.post(
  "/",
  verifyUser([roles[0], roles[1]]),
  upload.single("img"),
  productCtrl.addProduct
);
route.put(
  "/:id",
  verifyUser([roles[0], roles[1]]),
  upload.single("img"),
  productCtrl.updateProduct
);
route.delete("/:id", verifyUser(roles[0]), productCtrl.deleteProduct);

module.exports = route;
