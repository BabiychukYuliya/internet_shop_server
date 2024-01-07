const Router = require("express");
const router = new Router();
const TypeController = require("../controllers/typeController");
const checkRole = require("../middlewears/checkRoleMiddlewear");

router.post("/", checkRole("ADMIN"), TypeController.createType);
router.get("/", TypeController.getAllTypes);
router.delete("/:id", TypeController.removeType);

module.exports = router;
