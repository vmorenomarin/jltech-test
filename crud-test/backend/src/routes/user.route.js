const { Router } = require("express");
const { verify } = require("jsonwebtoken");
const route = Router();
const userCtrl = require("../controllers/user.controller");
const upload = require("../middlewares/imgUploader.middleware");
const verifyToken = require("../middlewares/verifyUser.middleware");

route.get("/", userCtrl.listUsers);
route.get("/u/:id", userCtrl.listUserById);
route.post("/register", upload.single("img"), userCtrl.registerUser);
route.post("/login", verifyToken, userCtrl.login);
route.put("/:id", verifyToken, userCtrl.updateUser);
route.delete("/:id", verifyToken, userCtrl.deleteUser);

module.exports = route;