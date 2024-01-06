const Router = require("express");
const router = new Router();
const BasketController = require("../controllers/basketController");

router.post("/", BasketController.createBasket);
router.get("/", BasketController.getAllBaskets);
router.patch("/:id", BasketController.updateBasket);

module.exports = router;
