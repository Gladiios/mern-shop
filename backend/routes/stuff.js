const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth");
const isAdmin = require("../middleware/isAdmin");
const multer = require("../multer-config");

const stuffCtrl = require("../controllers/stuff");

router.get("/", auth, stuffCtrl.getAllProducts);
router.post("/", atuh, isAdmin, multer, stuffCtrl.createProduct);
router.get("/:id", auth, stuffCtrl.getOneProduct);
router.put("/:id", auth, multer, isAdmin, stuffCtrl.modifyProduct);
router.delete("/:id", auth, stuffCtrl.deleteProduct);

module.exports = router;
