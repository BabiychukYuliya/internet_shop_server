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

const updateBasket = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedBasket = await Basket.update(req.body, { where: { id: id } });
    res.json(updatedBasket);
  } catch (err) {
    res.status(500).json({ error: "Failed to update basket" });
  }
};

module.exports = { createBasket, getAllBaskets, updateBasket };

//   // Update a basket by ID
//   const updateBasket = async (req, res) => {
//     const { id } = req.params;
//     try {
//       const [updated] = await Basket.update(req.body, {
//         where: { id: id }
//       });
//       if (updated) {
//         const updatedBasket = await Basket.findOne({ where: { id: id } });
//         res.json(updatedBasket);
//       } else {
//         res.status(404).json({ error: 'Basket not found' });
//       }
//     } catch (error) {
//       res.status(500).json({ error: 'Failed to update basket' });
//     }
//   };

//   // Delete a basket by ID
//   const deleteBasket = async (req, res) => {
//     const { id } = req.params;
//     try {
//       const deleted = await Basket.destroy({
//         where: { id: id }
//       });
//       if (deleted) {
//         res.json({ message: 'Basket deleted' });
//       } else {
//         res.status(404).json({ error: 'Basket not found' });
//       }
//     } catch (error) {
//       res.status(500).json({ error: 'Failed to delete basket' });
//     }
//   };
