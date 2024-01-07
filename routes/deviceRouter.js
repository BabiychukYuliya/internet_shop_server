const Router = require("express");
const router = new Router();
const DeviceController = require("../controllers/deviceController");
const checkRole = require("../middlewears/checkRoleMiddlewear");

router.post("/", checkRole("ADMIN"), DeviceController.createDevice);
router.get("/", DeviceController.getAllDevice);
router.get("/:id", DeviceController.getOneDevice);
router.delete("/:id", DeviceController.removeDevice);

module.exports = router;
