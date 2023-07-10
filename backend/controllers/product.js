const Product = require("../models/Product");
// REGISTER
exports.RegisterProduct = async (req, res) => {
  const newProduct = new Product(req.body);
  try {
    const savedProduct = await newProduct.save();
    res.status(200).send(savedProduct);
  } catch (error) {
    res.status(500).send(error);
  }
};
//UPADATE
exports.EditProduct = async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).send(updatedProduct);
  } catch (err) {
    res.status(500).send(err);
  }
};
//DELETE
exports.DeleteProduct = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).send("Product has been deleted ...");
  } catch (error) {
    res.status(500).send("server error");
  }
};
//GET PRODUCT
exports.GetProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).send(product);
  } catch (error) {
    res.status(500).send("server error");
  }
};
//GET ALL PRODUCTS
exports.GetAllProduct = async (req, res) => {
  const qNew = req.query.new;
  const qCategory = req.query.category;

  try {
    let products;
    if (qNew) {
      products = await Product.find().sort({ createdAt: -1 }).limit(1);
    } else if (qCategory) {
      products = await Product.find({ categories: { $in: [qCategory] } });
    } else {
      products = await Product.find();
    }
    res.status(200).send(products);
  } catch (error) {
    res.status(500).send("server error");
  }
};
//   //GET USER STATS
//   exports.GetStats = async (req, res) => {
//     const date = new Date();
//     const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));
//     const pipeline = [
//       { $match: { createdAt: { $gt: lastYear } } },
//       { $project: { month: { $month: "$createdAt" } } },
//       { $group: { _id: "$month", total: { $sum: 1 } } },
//     ];
//     try {
//       const data = await User.aggregate(pipeline);
//       res.status(200).send(data);
//     } catch (error) {
//       res.status(500).send(error);
//     }
//   };
