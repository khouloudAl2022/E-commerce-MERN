const {
  RegisterProduct,
  EditProduct,
  DeleteProduct,
  GetProduct,
  GetAllProduct,
} = require("../controllers/product");

const router = require("express").Router();

router.post("/", RegisterProduct);
router.put("/:id", EditProduct);
router.delete("/:id", DeleteProduct);
router.get("/find/:id", GetProduct);
router.get("/", GetAllProduct);

module.exports = router;
