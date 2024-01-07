const { Basket } = require("../models/models");

const createBasket = async (req, res) => {
  try {
    const basket = await Basket.create(req.body);
    res.status(201).json(basket);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
};

const getAllBaskets = async (req, res) => {
  try {
    const baskets = await Basket.findAll();
    res.json(baskets);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch baskets" });
  }
};

const removeBasket = async (req, res) => {
  const { id } = req.params;
  try {
    const deleteBasket = await Basket.destroy({ where: { id: id } });
    return res.json({ message: "Кошик успішно видалено" });
  } catch (err) {}
};
module.exports = { createBasket, getAllBaskets, removeBasket };
