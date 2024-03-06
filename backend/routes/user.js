const express = require("express");
const router = express.Router();

const userCtrl = require("../controllers/user");
const isAdmin = require("../middleware/isAdmin");

router.post("/signup", userCtrl.signup);
router.post("/login", userCtrl.login);
router.post("/admin/addproduct", isAdmin);

module.exports = router;
