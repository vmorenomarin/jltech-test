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

saleCtrl.listSalesByCustomer = async (req, res) => {
  try {
    const { idCustomer } = req.params;
    salesCustomer = await saleModel
      .find({ customer: idCustomer })
      .populate("user", { password: 0, phone: 0 });
    if (!salesCustomer) {
      return generalMessage(res, 404, "", false, "User not found.");
    }
    generalMessage(res, 200, salesCustomer, true, "");
  } catch (error) {
    generalMessage(res, 500, "", false, error.message);
  }
};

saleCtrl.registerSale = async (req, res) => {
  try {
    const { date, customer, products} = req.body;
    const countSales = await saleModel.sales.count();
    const number = countSales + 1;
    const newSale = new saleModel({})
  } catch (error) {
    generalMessage(res, 500, "", false, error.message);
  }
};

module.exports = saleCtrl;
