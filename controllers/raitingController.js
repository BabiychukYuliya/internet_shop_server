const { Raiting } = require("../models/models");

const createRaiting = async (req, res) => {
  try {
    const raiting = await Raiting.create(req.body);
    res.status(200).json(raiting);
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
};

const updateRaiting = async (req, res) => {
  try {
    const raiting = await Raiting.update(
      { rate: req.body.rate },
      { where: { id: req.params.id } }
    );
    res.json(raiting);
  } catch (e) {
    return res.status(400).json({ message: e.message });
  }
};

const getRaitingById = async (req, res) => {
  try {
    const raiting = await Raiting.findByPk(req.params.id);
    if (raiting) {
      return res.json(raiting);
    } else {
      res.status(404).json({ message: "Raiting not found" });
    }
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
};

const getAllRaiting = async (req, res) => {
  try {
    const raitings = await Raiting.findAll();
    return res.json(raitings);
  } catch (e) {
    return res.status(400).json({ message: e.message });
  }
};

const removeRaiting = async (req, res) => {
  try {
    const raiting = await Raiting.findByPk(req.params.id);
    if (raiting) {
      await raiting.destroy();
      res.json({ message: "Raiting deleted" });
    } else {
      res.status(404).json({ message: "Raiting not found" });
    }
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

module.exports = {
  createRaiting,
  updateRaiting,
  getRaitingById,
  getAllRaiting,
  removeRaiting,
};

//   // GET a single raiting by ID
//   router.get('/:id', async (req, res) => {
//     try {
//       const raiting = await Rating.findByPk(req.params.id);
//       if (raiting) {
//         res.json(raiting);
//       } else {
//         res.status(404).json({ message: 'Raiting not found' });
//       }
//     } catch (error) {
//       res.status(500).json({ message: error.message });
//     }
//   });
