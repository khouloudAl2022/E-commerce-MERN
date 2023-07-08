const Product = require("../models/Product");

exports.RegisterProduct = async (req, res) => {
  const newProduct = new Product(req.body);
  try {
    const savedProduct = await newProduct.save();
    res.status(200).send("succes add products", savedProduct);
  } catch (error) {
    res.status(500).send(error);
  }
};
