const mongoose = require("mongoose");

const { Schema, model } = mongoose;

/** Returns a customer schema. */

const customerSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    document: {
      type: Number,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      default: "Customer",
    },
    img: {
      type: String,
      required: false,
    },
    nameImg: {
      type: String,
      required: false,
    },
    rate: {
      type: Number,
      required: true,
      min: 0,
      max: 5,
      default: 0,
    },
  },
  { timestamps: true }
);

customerSchema.methods.setImgUrl = function (filename) {
  /** Returns the image URL to the storage directory an assigns a filename to the image. */
  const url = "http://localhost:4000";
  this.img = url + "public/images/" + filename;
  this.nameImg = filename;
};

module.exports = model("customers", customerSchema);
