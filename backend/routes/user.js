const Router = require("express").Router();

Router.get("/usertest", (req, res) => {
  res.send("test success");
});
Router.post("/posttest", (req, res) => {
  const username = req.body.username;
  res.send(`your user name is ${username}`);
});
module.exports = Router;
