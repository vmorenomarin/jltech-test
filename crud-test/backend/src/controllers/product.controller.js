const productCtrl = {};
const productModel = require("../models/product.model");
const { generalMessage } = require("../helpers/messages.helper");
const { deleteImg } = require("../helpers/deleteImageCtrl.helper");

productCtrl.listProducts = async (req, res) => {
  /** Returns all users in database. This method is available only for admin users */
  try {
    const products = await productModel.find({});
    generalMessage(res, 200, products, true, "Data found");
  } catch (error) {
    generalMessage(res, 500, "", false, error.message);
  }
};

productCtrl.listProductById = async (req, res) => {
  /** Returns an user by ID an returns the user data. */
  try {
    const { id } = req.params;
    const product = await productModel.findById({ _id: id });
    if (!user) {
      return generalMessage(res, 404, "", false, "Product not found");
    }
    generalMessage(res, 200, product, true, "Product found");
  } catch (error) {
    generalMessage(res, 500, "", false, error.message);
  }
};

productCtrl.addProduct = async (req, res) => {
  /** Adds a new product to database. */
  try {
    const { name, code, price, upload_by, stock, category } = reb.body;
    const product = await productModel.findOne({ code });
    if (product) {
      return generalMessage(res, 409, "", false, "Product already exists.");
    }
    const newProduct = new productModel({
      name,
      code,
      price,
      user,
      stock,
      category,
    });
    const { filename } = req.file;
    newProduct.setImgUrl(filename);
    await productModel.save();
    generalMessage(
      res,
      201,
      newProduct,
      true,
      `Product with reference code ${code} was successfully created.`
    );
  } catch (error) {
    generalMessage(res, 500, "", false, error.message);
  }
};

module.exports = productCtrl;
