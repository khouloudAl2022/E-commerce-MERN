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
//CREATE
router.post("/", verifyToken, CreateCart);
router.put("/:id", verifyTokenAndAuth, EditCart);
router.delete("/:id", verifyTokenAndAuth, DeleteCart);
router.get("/find/:userId", verifyTokenAndAuth, GetUserCart);
router.get("/", verifyTokenAndAdmin, GetAllCart);

module.exports = router;
