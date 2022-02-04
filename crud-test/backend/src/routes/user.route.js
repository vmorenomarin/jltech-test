const { Router } = require("express");
const route = Router();
const userCtrl = require("../controllers/user.controller");

route.get("/", userCtrl.listUsers);
route.get("/:id", userCtrl.listUserById);
route.put("/register", userCtrl.registerUser);
route.put("/login", userCtrl.login);
route.delete("/:id", userCtrl.deleteUser);

module.exports = route;
