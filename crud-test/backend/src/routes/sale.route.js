const { Router } = require("express");
const route = Router();
const saleCtrl = require("../controllers/sale.controller");
const verifyToken = require("../middlewares/verifyUser.middleware");

route.get("/", saleCtrl.listSales);

module.exports = route;
