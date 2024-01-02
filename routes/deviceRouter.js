const Router = require("express");
const router = new Router();
const DeviceController = require("../controllers/deviceController");

router.post("/", DeviceController.createDevice);
router.get("/", DeviceController.getAllDevice);
router.get("/:id", DeviceController.getOneDevice);
router.delete("/:id", DeviceController.removeDevice);

module.exports = router;
