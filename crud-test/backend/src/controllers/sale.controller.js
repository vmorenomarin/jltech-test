const saleCtrl = {};
const saleModel = require("../models/sale.model");
const productModel = require("../models/product.model");
const { generalMessage } = require("../helpers/messages.helper");

saleCtrl.listSales = async (req, res) => {
  /** Returns all sales in database. This metrhod is available only for admin users */
  try {
    const sales = await saleModel
      .find({})
      .populate("user", {
        password: 0,
        phone: 0,
      })
      .populate("products");
    generalMessage(res, 201, sales, true, "Data found.");
  } catch (error) {
    generalMessage(res, 500, "", false, error.message);
  }
};

saleCtrl.listById = async (req, res) => {
  try {
    const { id } = req.params;
    const sale = await saleModel.findById({ _id: id });
    if (!sale) {
      return generalMessage(res, 404, "", false, "Sale not found");
    }
    generalMessage(res, 200, sale, true, "");
  } catch (error) {
    generalMessage(res, 500, "", false, error.message);
  }
};

saleCtrl.listByCustomer = async (req, res) => {
  try {
    const { id } = req.params;
    salesCustomer = await saleModel
      .find({ customer: id })
      .populate("user", { password: 0, phone: 0 });
    if (!salesCustomer) {
      return generalMessage(res, 404, "", false, "User not found.");
    }
    generalMessage(res, 200, salesCustomer, true, "");
  } catch (error) {
    sto;
    generalMessage(res, 500, "", false, error.message);
  }
};

saleCtrl.registerSale = async (req, res) => {
  try {
    const { products } = req.body;
    const countSales = await saleModel.count();
    const number = countSales + 1;
    for (var order in products) {
      let product_price = await productModel.find({ _id: order.product });
      console.log(order);
      total += product_price * order.amount;
    }
    // console.log(total);
    const newSale = new saleModel({
      number,
      date,
      // customer,
      products,
      total,
    });
    await newSale.save();
    generalMessage(res, 201, newSale, true, "Sale successfully saved.");
  } catch (error) {
    generalMessage(res, 500, "", false, error.message);
  }
};

module.exports = saleCtrl;
