const { Router } = require("express");
const route = Router();
const saleCtrl = require("../controllers/sale.controller");
const verifyUser = require("../middlewares/verifyUser.middleware");
const currentUser = require("../middlewares/currentUser.middleware");
const roles = require("../helpers/roles.helper");

route.get("/", verifyUser(roles[0]), saleCtrl.listSales);
route.get("/s/:id", verifyUser(roles.slice(0, 3)), saleCtrl.listById);
route.get(
  "/s/u/:id",
  verifyUser([roles[0], roles[4]]),
  currentUser,
  saleCtrl.listByCustomer
);
route.post("/", verifyUser(roles[4]), saleCtrl.registerSale);

module.exports = route;
