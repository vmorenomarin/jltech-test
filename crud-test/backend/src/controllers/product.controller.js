const productCtrl = {};
const productModel = require("../models/product.model");
const { generalMessage } = require("../helpers/messages.helper");
const { deleteImg } = require("../helpers/deleteImageCtrl.helper");

productCtrl.listProducts = async (req, res) => {
  /** Returns all products in database. This method is available only for admin users */
  try {
    const products = await productModel
      .find({})
      .populate("user", { password: 0, phone: 0 });
    generalMessage(res, 200, products, true, "Data found");
  } catch (error) {
    generalMessage(res, 500, "", false, error.message);
  }
};

productCtrl.listProductById = async (req, res) => {
  /** Returns a product by ID an returns the product data. */
  try {
    const { id } = req.params;
    const product = await productModel
      .findById({ _id: id })
      .populate("user", { password: 0, phone: 0 });
    if (!product) {
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
    const { name, code, price, user, stock, category } = req.body;
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
    await newProduct.save();
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

productCtrl.updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await productModel.findOne({ _id: id });
    if (!product) {
      return generalMessage(res, 404, "", false, "Product not found");
    }
    const name = req.body.name || product.name;
    const code = req.body.code || product.code;
    const price = req.body.price || product.price;
    const stock = req.body.stock || product.stock;
    const category = req.body.category || product.category;
    const user = req.body.user || product.user;
    if (req.file) {
      if (product.namaImg) {
        deleteImg(product.namaImg);
      }
      const { filename } = req.file;
      product.setImgUrl(filename);
      await product.save();
    }
    const nameImg = product.nameImg;
    const img = product.img;
    const updatedProduct = {
      name,
      code,
      price,
      stock,
      category,
      img,
      nameImg,
      user,
    };
    await product.updateOne(updatedProduct);
    generalMessage(res, 200, updatedProduct.name, true, "Product updated.");
  } catch (error) {
    generalMessage(res, 500, "", false, error.message);
  }
};

productCtrl.productsByUser = async (req, res) => {
  try {
    const { id } = req.params;
    const products = await productModel.find({ user: id });
    if (!products) {
      return generalMessage(res, 404, "", false, "User has not products.");
    }
    generalMessage(res, 200, products, true, "Products found.");
  } catch (error) {
    generalMessage(res, 500, "", false, error.message);
  }
};

productCtrl.deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await productModel.findOne({ _id: id });
    if (!product) {
      return generalMessage(res, 404, "", false, "Product not found");
    }
    if (product.namaImg) {
      deleteImg(product.namaImg);
    }
    await productModel.deleteOne({ _id: id });
    generalMessage(res, 200, "", false, "Product deleted");
  } catch (error) {
    generalMessage(res, 500, "", false, error.message);
  }
};

module.exports = productCtrl;
