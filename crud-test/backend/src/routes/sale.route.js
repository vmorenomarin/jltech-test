const { Router } = require("express");
const route = Router();
const saleCtrl = require("../controllers/sale.controller");
const verifyToken = require("../middlewares/verifyUser.middleware");

route.get("/", saleCtrl.listSales);
route.get("/s/:id", saleCtrl.listById);
route.get("/s/u/:id", saleCtrl.listByCustomer);
route.post("/", saleCtrl.registerSale);

module.exports = route;
