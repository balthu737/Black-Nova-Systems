const express = require("express");
const router = express.Router();
const appsController = require("../controllers/appsController");

router.get("/", (req, res)=>{
    res.send("apps func");
});
router.post("/view", appsController.view);
router.post("/validateUser", appsController.validateUser);
router.post("/filter", appsController.filter);
router.post("/maintenanceOn", appsController.performMaintenance);
router.post("/maintenanceOff", appsController.finalizeMaintenence);

module.exports = router;