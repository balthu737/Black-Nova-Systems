const express = require("express");
const router = express.Router();
const userController = require("../controllers/appsController");

router.post("/view", appsController.view);/*alejo sos un come pitos anda a entrenar*/
router.post("/view", appsController.redirect);

module.exports = router;