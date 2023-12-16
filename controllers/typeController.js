const { Type } = require("../models/models");
const HttpError = require("../helpers/httpError");

const createType = async (req, res) => {
  const { name } = req.body;
  const type = await Type.create({ name });
  return res.json(type);
};

const getAllTypes = async (req, res) => {
  const types = await Type.findAll();
  return res.json(types);
};
const removeType = async (req, res) => {
  const id = req.params.id;
  const typeDel = await Type.destroy({ where: { id: id } });
  return res.json({ message: "Тип успішно видалено" });
};

module.exports = {
  createType,
  getAllTypes,
  removeType,
};
