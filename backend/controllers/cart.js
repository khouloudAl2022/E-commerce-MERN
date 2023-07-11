const Cart = require("../models/Cart");

// CREATE
exports.CreateCart = async (req, res) => {
  const newCart = new Cart(req.body);
  try {
    const savedCart = await newCart.save();
    res.status(200).send(savedCart);
  } catch (error) {
    res.status(500).send(error);
  }
};
//UPADATE
exports.EditCart = async (req, res) => {
  try {
    const updatedCart = await Cart.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).send(updatedCart);
  } catch (err) {
    res.status(500).send(err);
  }
};
// //DELETE
exports.DeleteCart = async (req, res) => {
  try {
    await Cart.findByIdAndDelete(req.params.id);
    res.status(200).send("Cart has been deleted ...");
  } catch (error) {
    res.status(500).send("server error");
  }
};
//GET USER CART
exports.GetUserCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.params.userId });
    res.status(200).send(cart);
  } catch (error) {
    res.status(500).send("server error");
  }
};
// //GET ALL PRODUCTS
// exports.GetAllProduct = async (req, res) => {
//   const qNew = req.query.new;
//   const qCategory = req.query.category;
//   try {
//     let products;

//     if (qNew) {
//       products = await Product.find().sort({ createdAt: -1 }).limit(1);
//     } else if (qCategory) {
//       products = await Product.find({
//         categories: {
//           $in: [qCategory],
//         },
//       });
//     } else {
//       products = await Product.find();
//     }

//     res.status(200).json(products);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// };
