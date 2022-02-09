const { Router } = require("express");
const route = Router();
const productCtrl = require("../controllers/product.controller");
const upload = require("../middlewares/imgUploader.middleware");
const verifyToken = require("../middlewares/verifyUser.middleware");

route.get("/", productCtrl.listProducts);
route.get("/p/:id", productCtrl.listProductById);
route.post("/", verifyToken, upload.single("img"), productCtrl.addProduct);
// route.put("/:id", verifyToken, upload.single("img"), productCtrl.updateProduct);
// route.delete("/:id", verifyToken, productCtrl.deleteProduct);

module.exports = route;