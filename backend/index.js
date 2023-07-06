const express = require("express");
const connectDb = require("./config/ConnectDB");
const app = express();
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
require("dotenv").config();

connectDb();
app.use(express.json());
app.use("/api/user", userRoute);
app.use("/api/auth", authRoute);

app.listen(process.env.PORT || 5000, () => {
  console.log(`Your server is running on ${process.env.PORT}`);
});
