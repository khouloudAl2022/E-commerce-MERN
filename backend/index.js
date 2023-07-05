const express = require("express");
const connectDb = require("./config/ConnectDB");
const app = express();
require("dotenv").config();

connectDb();
app.listen(process.env.PORT || 5000, () => {
  console.log(`Your server is running on ${process.env.PORT}`);
});
