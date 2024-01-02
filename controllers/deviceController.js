const createDevice = async (req, res) => {
  const { name, price, brandId, typeId, info } = req.body;
  const { img } = req.files;
};

const getAllDevice = async (req, res) => {};
const getOneDevice = async (req, res) => {};
const removeDevice = async (req, res) => {};

module.exports = {
  createDevice,
  getAllDevice,
  getOneDevice,
  removeDevice,
};
