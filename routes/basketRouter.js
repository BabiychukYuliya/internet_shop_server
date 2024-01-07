const Router = require("express");
const router = new Router();
const BasketController = require("../controllers/basketController");

router.post("/", BasketController.createBasket);
router.get("/", BasketController.getAllBaskets);
router.delete("/:id", BasketController.removeBasket);

module.exports = router;
