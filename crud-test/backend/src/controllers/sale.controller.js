const mongoose = require("mongoose");

const { Schema, model } = mongoose;

/** Returns a sales schema.
 */

const saleSchema = new Schema({
  number: { type: Number, required: true },
  date: { type: Date, required: true },
  customer: { type: Schema.Types.ObjectId, ref: "customers", required: true },
  products: [
    {
      product: { type: Schema.Types.ObjectId, ref: "products", required: true },
      mount: { type: Number, required: true },
    },
  ],
  total: { type: Number, required: true },
});

module.exports = model("sales", saleSchema);
