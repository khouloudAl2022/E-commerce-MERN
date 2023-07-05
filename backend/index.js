const express = require("express");
const app = express();
require("dotenv").config();
app.listen(process.env.PORT, () => {
  console.log(`Your server is running on ${process.env.PORT}`);
});
