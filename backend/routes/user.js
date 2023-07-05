const userRoutes = require("express").Router();

userRoutes.get("/testuser", (req, res) => {
  console.log("test success");
});
