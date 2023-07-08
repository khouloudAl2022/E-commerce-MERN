const { RegisterProduct } = require("../controllers/product");

const router = require("express").Router();

router.post("/", RegisterProduct);

module.exports = router;
