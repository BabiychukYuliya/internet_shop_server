const Router = require("express");
const {
  createDevice,
  getAllDevice,
  getOneDevice,
  removeDevice,
} = require("../controllers/deviceController");
const router = new Router();

router.post("/", createDevice);
router.get("/", getAllDevice);
router.get("/:id", getOneDevice);
router.delete("/:id", removeDevice);

module.exports = router;
