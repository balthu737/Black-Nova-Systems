const express = require("express");
const router = express.Router();
const userController = require("../controllers/appsController");

router.post("/view", appsController.view);
router.post("/view", appsController.redirect);

module.exports = router;