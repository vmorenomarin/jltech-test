const { Router } = require("express");
const route = Router();
const customerCtrl = require("../controllers/customer.controller");
const upload = require("../middlewares/imgUploader.middleware");
const verifyUser = require("../middlewares/verifyUser.middleware");
const currentUser = require("../middlewares/currentUser.middleware");
const roles = require("../helpers/roles.helper");

route.get("/", verifyUser(roles[0]), customerCtrl.listCustomers);
route.get(
  "/c/:id",
  verifyUser([roles[0], roles[4]]),
  currentUser,
  customerCtrl.listCustomerById
);
route.post("/", customerCtrl.addCustomer);
route.post("/login", customerCtrl.login);
route.put(
  "/:id",
  verifyUser,
  upload.single("img"),
  customerCtrl.updateCustomer
);
route.delete("/:id", verifyUser(roles[0]), customerCtrl.deleteCustomer);

module.exports = route;
