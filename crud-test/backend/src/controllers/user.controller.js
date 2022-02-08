const userCtrl = {};
const userModel = require("../models/user.model");
const { generalMessage } = require("../helpers/messages.helper");
const jsw = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const auth = require("../helpers/auth.helper");
const deleteImg = require("../helpers/deleteImageCtrl.helper");

const secret = "Antaeus";

userCtrl.listUsers = async (req, res, next) => {
  /** Returns all users in database. This method is available only for admin users */
  try {
    const users = await userModel.find({});
    generalMessage(res, 200, users, true, "Data found");
  } catch (error) {
    generalMessage(res, 500, "", false, error.message);
  }
};

userCtrl.listUserById = async (req, res) => {
  /** Returns an user by ID an returns the user data. */
  try {
    const id = req.params.id;
    const user = await userModel.findById({ id });
    if (!user) {
      return generalMessage(res, 404, data, false, "User not found");
    }
    generalMessage(res, 200, data, true, "User found.");
  } catch (error) {
    generalMessage(res, 500, "", false, error.message);
  }
};

userCtrl.registerUser = async (req, res) => {
  /** Adds a new user to database and hash the password. */
  try {
    const { name, lastname, email, password, phone } = req.body;
    /** User existence validation */
    const user = await userModel.findOne({ email });
    if (user) {
      return generalMessage(
        res,
        409,
        "",
        false,
        `User with ${email} already exists.`
      );
    }
    /** Creates and saves the user based in the user model database. */
    const newUser = new userModel({
      name,
      lastname,
      email,
      password,
      phone,
    });
    const { filename } = req.file;
    newUser.setImgUrl(filename);
    console.log("newUser");
    await newUser.save();
    /** Returns user token. */
    token = jsw.sign({ _id: newUser._id }, secret, { expiresIn: "1h" });
    generalMessage(
      res,
      201,
      token,
      true,
      `User account successfully created. Welcome ${newUser.name}`
    );
  } catch (error) {
    generalMessage(res, 500, "", false, error.message);
  }
};

userCtrl.login = async (req, res) => {
  /** Login user. Returns token if user credetials are valid. */
  try {
    /** Verify is user exists. */
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });
    if (!user) {
      return generalMessage(
        res,
        404,
        "",
        false,
        `User with ${email} was not found.`
      );
    }
    const response = bcrypt.compareSync(password, user.password);
    if (response) {
      const token = jsw.sign({ _id: user._id }, secret, { expiresIn: "1h" });
      return generalMessage(
        res,
        201,
        { id: user._id, name: user.name, token },
        true,
        `Welcome ${user.name}`
      );
    }
    generalMessage(res, 400, "", false, "Wrong pasword. Please, try again.");
  } catch (error) {
    generalMessage(res, 500, "", false, error.message);
  }
};

userCtrl.updateUser = async (req, res) => {
  /** Updates user data. Need id to locate user in database.*/
  try {
    const { id } = req.params;
    user = await userModel.findOne({ id });
    if (!user) {
      return generalMessage(res, 404, "", false, "User not found");
    }
    const name = req.body.name || user.name;
    const lastName = req.body.lastname || user.lastname;
    const email = req.body.email || user.email;
    const password = req.body.password || user.password;
    const phone = req.body.phone || user.phone;
    if (req.file) {
      if (user.nameImg) {
        deleteImg(user.nameImg);
      }
      const { filename } = req.file;
      user.setImgUrl(filename);
      await user.save();
    }
    const nameImg = user.nameImg;
    const img = product.img;
    const updatedProduct = {
      name,
      lastname,
      email,
      password,
      phone,
      nameImg,
      img,
    };
    await product.update(updatedProduct);
    generalMessage(
      res,
      200,
      updatedProduct,
      ok,
      `${user.name} ${lastname} was updated.`
    );
  } catch (error) {
    generalMessage(res, 500, "", false, error.message);
  }
};

userCtrl.deleteUser = async (req, res) => {
  /** Deletes user from database if a user id is provided.*/
  try {
    const { idUser } = req.params;
    const user = await userModel.findById({ idUser });
    if (!user) {
      return generalMessage(res, 404, "", false, "User not found.");
    }
    if (user.nameImg) {
      deleteImg(user.nameImg);
    }
    await userModel.deleteOne({ idUser });
    generalMessage(res, 200, "", true, "User deleted.");
  } catch (error) {
    generalMessage(res, 500, "", false, error.message);
  }
};

module.exports = userCtrl;
