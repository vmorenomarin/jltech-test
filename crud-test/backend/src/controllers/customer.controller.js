const customerCtrl = {};
const customerModel = require("../models/customer.model");
const { generalMessage } = require("../helpers/messages.helper");
const jsw = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const auth = require("../helpers/auth.helper");
const { deleteImg } = require("../helpers/deleteImageCtrl.helper");
require("dotenv").config(); // Next line will be delete. This is for test purposes.

const secret = process.env.SECRET;

customerCtrl.listCustomers = async (req, res) => {
  /** Returns all customers in database. This method is available only for admin users */
  try {
    const customers = await customerModel.find({});
    generalMessage(res, 200, customers, true, "Data found.");
  } catch (error) {
    generalMessage(res, 500, "", false, error.message);
  }
};

customerCtrl.listCustomerById = async (req, res) => {
  try {
    const { id } = req.params;
    const customer = await customerModel.aggregate([
      {
        $lookup: {
          from: "sales",
          localField: id,
          foreignField: "customer._id",
          as: "customer_purchases",
        },
      },
    ]);
    if (!customer) {
      return generalMessage(res, 404, "", false, "No customer found.");
    }
    generalMessage(res, 200, customer, true, "Data found.");
  } catch (error) {
    generalMessage(res, 500, "", false, error.message);
  }
};

customerCtrl.addCustomer = async (req, res) => {
  try {
    const { name, lastname, phone, password, email, document } = req.body;
    /** Customer existence validation */
    const customer = await customerModel.findOne({ email });
    if (customer) {
      return generalMessage(res, 409, "", false, "User already exists.");
    }
    /** Creates and saves the customer based in the customer model database. */
    const newCustomer = new customerModel({
      name,
      lastname,
      phone,
      email,
      document,
      password: auth.encryptPassword(password),
    });
    const { filename } = req.file;
    newCustomer.setImgUrl(filename);
    await newCustomer.save();
    /** Returns user token. */
    const token = jsw.sign({ _id: newCustomer._id }, secret, {
      expiresIn: "1h",
    });
    generalMessage(
      res,
      201,
      token,
      true,
      `User account created. Welcome ${newCustomer.name}`
    );
  } catch (error) {
    generalMessage(res, 500, "", false, error.message);
  }
};

customerCtrl.login = async (req, res) => {
  /** Login user. Returns token if user credetials are valid. */
  try {
    const { email, password } = req.body;
    const customer = await customerModel.findOne({ email });
    if (!customer) {
      return generalMessage(
        res,
        404,
        "",
        false,
        `User with ${email} not found.`
      );
    }
    const response = bcrypt.compareSync(password, customer.password);
    if (response) {
      const token = jsw.sign({ _id: customer._id }, secret, {
        expiresIn: "1h",
      });
      return generalMessage(res, 201, token, true, `Welcome ${customer.name}.`);
    }
    generalMessage(
      res,
      400,
      "",
      false,
      `${customer.name}, wrong password. Please try again.`
    );
  } catch (error) {
    generalMessage(res, 500, "", false, error.message);
  }
};

customerCtrl.updateCustomer = async (req, res) => {
  /** Updates customer data. Need to locate customer in database.*/
  try {
    const { id } = req.params;
    const customer = await customerModel.findById({ _id: id });
    if (!customer) {
      return generalMessage(res, 404, "", false, "User not found.");
    }
    const name = req.body.name || customer.name;
    const lastname = req.body.lastname || customer.lastname;
    const email = req.body.email || customer.email;
    const phone = req.body.phone || customer.phone;
    const password = req.body.password || customer.password;
    const document = req.body.document || customer.document;
    if (req.file) {
      if (customer.nameImg) {
        deleteImg(customer.nameImg);
      }
      const { filename } = req.file;
      customer.setImgUrl(filename);
      await customer.save();
    }
    const nameImg = customer.nameImg;
    const img = customer.img;
    const updatedCustomer = {
      name,
      lastname,
      password: auth.encryptPassword(password),
      phone,
      email,
      nameImg,
      img,
    };
    await customer.updateOne(updatedCustomer);
    generalMessage(
      res,
      200,
      updatedCustomer,
      true,
      `${name} ${lastname} info was updated.`
    );
  } catch (error) {
    generalMessage(res, 500, "", false, error.message);
  }
};

customerCtrl.deleteCustomer = async (req, res) => {
  /** Deletes customer from database if a customer id is provided.*/
  try {
    const { id } = req.params;
    const customer = await customerModel.findById({ _id: id });
    if (!customer) {
      return generalMessage(res, 404, "", false, "User not found.");
    }
    await customerModel.deleteOne({ _id: id });
    generalMessage(res, 200, "", true, "User deleted.");
  } catch (error) {
    generalMessage(res, 500, "", false, error.message);
  }
};

module.exports = customerCtrl;
