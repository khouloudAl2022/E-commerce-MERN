const { RegisterUser } = require("../controllers/auth");

const router = require("express").Router();

//Register user

router.post("/register", RegisterUser);

module.exports = router;
