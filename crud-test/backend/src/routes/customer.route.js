const { Router } = require("express");
const route = Router();
const customerCtrl = require("../controllers/customer.controller");
const upload = require("../middlewares/imgUploader.middleware");
const verifyToken = require("../middlewares/verifyUser.middleware");

route.get("/", verifyToken, customerCtrl.listCustomers);
route.get("/c/:id", verifyToken, customerCtrl.listCustomerById);
route.post("/", upload.single("img"), customerCtrl.addCustomer);
route.post("/login", customerCtrl.login);
route.put("/:id", verifyToken, customerCtrl.updateCustomer);
route.delete("/:id", verifyToken, customerCtrl.deleteCustomer);

module.exports = route;