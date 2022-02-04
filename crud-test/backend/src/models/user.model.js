const mongoose = require("mongoose");

const { Schema, model } = mongoose;

/** Returns an user schema.
 * Role could be seller, admin, warehouser, or HR.
 */
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
      default: "Seller",
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
  /** Returns the image URL to the storage directory an assigns a filename to the image. */
  const url = "http://localhost:4000/";
  this.img = url + "public/imgs/users" + filename;
  this.nameImg = filename;
};

module.exports = model("users", userSchema);
