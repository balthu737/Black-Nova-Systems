const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

console.log("usu");
router.get("/", (req, res)=>{
    res.json({function:"funciona"});
});
router.post("/login", userController.login);
router.post("/create", userController.create);
router.post("/edit", userController.edit);
router.post("/delete", userController.delete);
router.post("/ban", userController.ban);
router.post("/getAll", userController.getAll);
router.post("/getById", userController.getById);
router.post("/getByName", userController.getByName);

module.exports = router;
