const Router = require("express");
const router = new Router();
const BrandController = require("../controllers/brandController");

router.post("/", BrandController.createBrand);
router.get("/", BrandController.getAllBrands);
router.delete("/:id", BrandController.removeBrand);

module.exports = router;
