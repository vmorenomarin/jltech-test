const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
    },
    rol: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    nameImg: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

userSchema.methods.setImgUrl = function (filename) {
  const url = "http://localhost:4000/";
  this.img = url + "public/imgs/users" + filename;
  this.nameImg = filename;
};

module.exports = model("users", userSchema);
