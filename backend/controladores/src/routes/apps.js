const express = require("express");
const router = express.Router();
const userController = require("../controllers/appsController");

router.post("/view", appsController.login);


module.exports = router;