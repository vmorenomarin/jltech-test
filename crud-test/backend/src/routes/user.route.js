const { Router } = require("express");
const route = Router();
const userCtrl = require("../controllers/user.controller");
const upload = require("../middlewares/imgUploader.middleware");
const verifyUser = require("../middlewares/verifyUser.middleware");

route.get("/", verifyUser(["admin"]), userCtrl.listUsers);
route.get("/u/:id", userCtrl.listUserById);
route.post("/", upload.single("img"), userCtrl.registerUser);
route.post("/login", userCtrl.login);
route.put("/:id", verifyUser, upload.single("img"), userCtrl.updateUser);
route.delete("/:id", verifyUser, userCtrl.deleteUser);

module.exports = route;
