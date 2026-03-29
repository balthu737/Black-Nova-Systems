const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.post("/login", userController.login);
router.post("/create", userController.create);
router.post("/edit", userController.edit);

module.exports = router;
