const { Router } = require("express");
const { verify } = require("jsonwebtoken");
const route = Router();
const userCtrl = require("../controllers/user.controller");
const upload = require("../middlewares/imgUploader.middleware");
const verifyToken = require("../middlewares/verifyUser.middleware");

route.get("/", verifyToken, userCtrl.listUsers);
route.get("/:id", verifyToken, userCtrl.listUserById);
route.put(
  "/register",
  verifyToken,
  upload("users").single("img"),
  userCtrl.registerUser
);
route.put("/login", verifyToken, userCtrl.login);
route.delete("/:id", verifyToken, userCtrl.deleteUser);

module.exports = route;
