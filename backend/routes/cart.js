const { CreateCart, EditCart, DeleteCart } = require("../controllers/cart");
const {
  verifyTokenAndAuth,
  verifyToken,
} = require("../middlewars/verifyToken");

const router = require("express").Router();
//CREATE
router.post("/", verifyToken, CreateCart);
router.put("/:id", verifyTokenAndAuth, EditCart);
router.delete("/:id", verifyTokenAndAuth, DeleteCart);
// router.get("/find/:id", GetUserCart);
// router.get("/", GetAllProduct);

module.exports = router;
