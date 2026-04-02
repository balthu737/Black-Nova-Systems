const express = require("express");
const router = express.Router();
const userController = require("../controllers/appsController");

router.post("/view", appsController.login);/*alejo sos un come pitos anda a entrenar*/


module.exports = router;