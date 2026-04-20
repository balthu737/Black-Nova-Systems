const express = require("express");
const router = express.Router();
const appsController = require("../controllers/appsController");

router.post("/view", appsController.view);/*alejo sos un come pitos anda a entrenar*/
router.post("/view", appsController.redirect);
router.post("/validateUser", appsController.validateUser);
router.post("/filter", appsController.filter);
router.post("/maintenanceOn", appsController.performMaintenance);
router.post("/maintenanceOff", appsController.finalizeMaintenence);

module.exports = router;