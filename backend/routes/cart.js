const {
  CreateCart,
  EditCart,
  DeleteCart,
  GetUserCart,
} = require("../controllers/cart");
const {
  verifyTokenAndAuth,
  verifyToken,
} = require("../middlewars/verifyToken");

const router = require("express").Router();
//CREATE
router.post("/", verifyToken, CreateCart);
router.put("/:id", verifyTokenAndAuth, EditCart);
router.delete("/:id", verifyTokenAndAuth, DeleteCart);
router.get("/find/:userId", verifyTokenAndAuth, GetUserCart);
// router.get("/", GetAllProduct);

module.exports = router;
