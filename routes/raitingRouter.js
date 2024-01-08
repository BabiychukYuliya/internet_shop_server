const Router = require("express");
const router = new Router();
const RaitingController = require("../controllers/raitingController");

router.post("/", RaitingController.createRaiting);
// router.get("/", RaitingController.getAll);
router.patch("/:id", RaitingController.updateRaiting);
// router.delete("/:id", RaitingController.remove);

module.exports = router;
