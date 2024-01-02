const uuid = require("uuid");
const path = require("path");
const { Device } = require("../models/models");
const httpError = require("../helpers/httpError");

const createDevice = async (req, res, next) => {
  try {
    const { name, price, brandId, typeId, info } = req.body;
    const { img } = req.files;
    let fileName = uuid.v4() + ".jpg";
    img.mv(path.resolve(__dirname, "..", "static", fileName)); //пересуває файл до папки static

    const device = await Device.create({
      name,
      price,
      brandId,
      typeId,
      img: fileName,
    });

    return res.json(device);
  } catch (err) {
    next(httpError(err.message));
  }
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
