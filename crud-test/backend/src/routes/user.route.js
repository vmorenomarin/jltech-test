const { Router } = require("express");
const route = Router();
const userCtrl = require("../controllers/user.controller");
const upload = require("../middlewares/imgUploader.middleware");
const roles = require("../helpers/roles.helper");
const verifyUser = require("../middlewares/verifyUser.middleware");
const currentUser = require("../middlewares/currentUser.middleware");

route.get("/", verifyUser(roles[0]), userCtrl.listUsers);
route.post("/", verifyUser(roles[0]), upload.single("img"), userCtrl.registerUser);
route.get("/u/:id", verifyUser(roles), currentUser, userCtrl.listUserById);
route.post("/login", userCtrl.login);
route.put(
  "/:id",
  verifyUser(roles),
  currentUser,
  upload.single("nameImg"),
  userCtrl.updateUser
);
route.delete("/:id", verifyUser(roles[0]), userCtrl.deleteUser);

module.exports = route;
