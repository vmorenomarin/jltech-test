const saleCtrl = {};
const saleModel = require("../models/sale.model");
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
  } catch (error) {sto
    generalMessage(res, 500, "", false, error.message);
  }
};

saleCtrl.registerSale = async (req, res) => {
  try {
    const { date, customer, products } = req.body;
    const countSales = await saleModel.count();
    console.log(countSales)
    const number = countSales + 1;
    let total = 0;
    products.map(async (order) => {
      let price = await saleModel.findOne(order.product)["price"];
      total += price * order.amount;
    });
    const newSale = new saleModel({
      number,
      date,
      customer,
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
