const createDevice = async (req, res) => {
  const { name, price, brandId, typeId, info } = req.body;
  const { img } = req.files;
};
const getAll = async (req, res) => {};
const getOne = async (req, res) => {};
const remove = async (req, res) => {};

module.exports = {
  createDevice,
  getAll,
  getOne,
  remove,
};
