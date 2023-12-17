const { Brand } = require("../models/models");

const createBrand = async (req, res) => {
  const { name } = req.body;
  const brand = await Brand.create({ name });
  return res.json(brand);
};

const getAllBrands = async (req, res) => {
  const brands = await Brand.findAll();
  return res.json(brands);
};

const removeBrand = async (req, res) => {
  const id = req.params.id;
  const brandDel = await Brand.destroy({ where: { id: id } });
  return res.json({ message: "Бренд успішно видалено" });
};

module.exports = {
  createBrand,
  getAllBrands,
  removeBrand,
};
