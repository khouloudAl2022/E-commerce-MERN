const { EditUSer } = require("../controllers/user");
const { verifyTokenAndAuth } = require("../middlewars/verifyToken");

const router = require("express").Router();

router.put("/edit/:id", verifyTokenAndAuth, EditUSer);

module.exports = router;
