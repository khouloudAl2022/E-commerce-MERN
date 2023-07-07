const {
  EditUSer,
  DeleteUser,
  GetUser,
  GetAllUser,
} = require("../controllers/user");
const {
  verifyTokenAndAuth,
  verifyTokenAndAdmin,
} = require("../middlewars/verifyToken");

const router = require("express").Router();
//edit
router.put("/:id", verifyTokenAndAuth, EditUSer);
router.delete("delete/id", verifyTokenAndAuth, DeleteUser);
router.get("/find/:id", verifyTokenAndAdmin, GetUser);
router.get("/", GetAllUser);

module.exports = router;
