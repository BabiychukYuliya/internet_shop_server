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
  const { id } = req.params;
  const { rate } = req.body;
  try {
    const raiting = await Raiting.findByPk(id);

    if (!raiting) {
      return res.status(404).json({ message: "Raiting not found" });
    }

    raiting.rate = rate;
    return res.status(200).json({ message: "Raiting updated successfully" });
  } catch (e) {
    return res.status(400).json({ message: e.message });
  }
};

module.exports = { createRaiting, updateRaiting };

// DELETE a raiting
// router.delete('/:id', async (req, res) => {
//     try {
//       const raiting = await Rating.findByPk(req.params.id);
//       if (raiting) {
//         await raiting.destroy();
//         res.json({ message: 'Raiting deleted' });
//       } else {
//         res.status(404).json({ message: 'Raiting not found' });
//       }
//     } catch (error) {
//       res.status(500).json({ message: error.message });
//     }
//   });

// // GET all raitings
// router.get('/', async (req, res) => {
//     try {
//       const raitings = await Rating.findAll();
//       res.json(raitings);
//     } catch (error) {
//       res.status(500).json({ message: error.message });
//     }
//   });

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
