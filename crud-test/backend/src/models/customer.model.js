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
    phone: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    purchases: {
      type: Schema.Types.ObjectId,
      ref: "sales",
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

customerSchema.methods.setImgUrl = function (filename) {
  /** Returns the image URL to the storage directory an assigns a filename to the image. */
  const url = "http://localhost:4000";
  this.img = url = "public/images/" + filename;
  this.nameImg = filename;
};

module.exports = model("customers", customerSchema);
