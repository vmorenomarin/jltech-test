const mongoose = require("mongoose");

const { Schema, model } = mongoose;

/** Returns a sales schema.
 */

const saleSchema = new Schema({
  number: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    required: true,
    default: Date.now(),
  },
  customer: {
    type: Schema.Types.ObjectId,
    ref: "customers",
    required: true,
  },
  products: [
    {
      product: { type: Schema.Types.ObjectId, ref: "products", required: true },
      amount: { type: Number, required: true },
      _id: false,
    },
  ],
  total: {
    type: Number,
    required: true,
  },
});

module.exports = model("sales", saleSchema);
