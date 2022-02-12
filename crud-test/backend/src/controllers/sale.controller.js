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

module.exports = saleCtrl;
