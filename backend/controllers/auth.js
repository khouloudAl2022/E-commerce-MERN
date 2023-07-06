const User = require("../models/User");
const CryptoJS = require("crypto-js");
exports.RegisterUser = async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASS_SECRET
    ).toString(),
  });
  try {
    const savedUser = await newUser.save();
    res.status(201).send(savedUser);
  } catch (error) {
    res.status(500).send(error);
  }
};
