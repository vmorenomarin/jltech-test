const productModel = require("../models/product.model");
products.map(async (order, total) => {
  let product_price = await productModel.findOne(
    { _id: order.product },
    { price: 1 }
  );
  let { price } = product_price;
  total += price * order.amount;
  console.log(total);
  return total;
});

module.exports = totalSale;
