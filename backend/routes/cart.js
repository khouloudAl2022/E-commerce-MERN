const {
  CreateCart,
  EditCart,
  DeleteCart,
  GetUserCart,
  GetAllCart,
} = require("../controllers/cart");
const {
  verifyTokenAndAuth,
  verifyToken,
  verifyTokenAndAdmin,
} = require("../middlewars/verifyToken");

const router = require("express").Router();

router.post("/", verifyToken, CreateCart);
router.put("/:id", EditCart);
router.delete("/:id", DeleteCart);
router.get("/find/:userId", GetUserCart);
router.get("/", GetAllCart);

module.exports = router;
