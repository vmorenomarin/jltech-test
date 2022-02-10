const mongoose = require("mongoose");

const { Schema, model } = mongoose;

/** Returns an user schema.
 * Category: According to the stora type.
 * Code: Refers to an unique product identifier.\
 * User: User company who did upload the product.
 */

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    code: {
      type: String,
      required: true,
      unique: true,
    },
    price: {
      type: Number,
      required: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
    stock: {
      type: Number,
      required: true,
      default: 0,
    },
    category: {
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

productSchema.methods.setImgUrl = function (filename) {
  /** Returns the image URL to the storage directory an assigns a filename to the image. */
  const url = "http://localhost:4000/";
  this.img = url + "public/imgs/" + filename;
  this.nameImg = filename;
};

module.exports = model("products", productSchema);
