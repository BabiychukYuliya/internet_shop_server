const Router = require("express");
const router = new Router();
const RaitingController = require("../controllers/raitingController");

router.post("/", RaitingController.createRaiting);
router.get("/", RaitingController.getAllRaiting);
router.get("/:id", RaitingController.getRaitingById);
router.patch("/:id", RaitingController.updateRaiting);
router.delete("/:id", RaitingController.removeRaiting);

module.exports = router;
