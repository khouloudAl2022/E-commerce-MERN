const { EditUSer, DeleteUser, GetUser } = require("../controllers/user");
const {
  verifyTokenAndAuth,
  verifyTokenAndAdmin,
} = require("../middlewars/verifyToken");

const router = require("express").Router();
//edit
router.put("/:id", verifyTokenAndAuth, EditUSer);
router.delete("delete/id", verifyTokenAndAuth, DeleteUser);
router.get("/find/:id", verifyTokenAndAdmin, GetUser);
module.exports = router;
