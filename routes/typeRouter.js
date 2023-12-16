const Router = require("express");
const router = new Router();
const TypeController = require("../controllers/typeController");

router.post("/", TypeController.createType);
router.get("/", TypeController.getAllTypes);
router.delete("/:id", TypeController.removeType);

module.exports = router;
