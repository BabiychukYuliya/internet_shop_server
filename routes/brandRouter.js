const Router = require("express");
const router = new Router();
const BrandController = require("../controllers/brandController");
const checkRole = require("../middlewears/checkRoleMiddlewear");

router.post("/", checkRole("ADMIN"), BrandController.createBrand);
router.get("/", BrandController.getAllBrands);
router.delete("/:id", BrandController.removeBrand);

module.exports = router;
