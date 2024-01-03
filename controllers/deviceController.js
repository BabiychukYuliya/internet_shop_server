const uuid = require("uuid");
const path = require("path");
const { Device, DeviceInfo } = require("../models/models");
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

    if (info) {
      info = JSON.parse(info);
      info.forEach((el) =>
        DeviceInfo.create({
          title: el.title,
          description: el.description,
          deviceId: device.id,
        })
      );
    }

    return res.json(device);
  } catch (err) {
    next(httpError(err.message));
  }
};

const getAllDevice = async (req, res) => {
  let { brandId, typeId, limit, page } = req.query;
  page = page || 1;
  limit = limit || 9; //кількість девайсів на одній сторінці
  let offset = page * limit - limit; // відступ кількості товарів

  let devices;

  if (!brandId && !typeId) {
    devices = await Device.findAndCountAll({ limit, offset });
  }

  if (!brandId && typeId) {
    devices = await Device.findAndCountAll({
      where: { typeId },
      limit,
      offset,
    });
  }

  if (brandId && !typeId) {
    devices = await Device.findAndCountAll({
      where: { brandId },
      limit,
      offset,
    });
  }

  if (brandId && typeId) {
    devices = await Device.findAndCountAll({
      where: { brandId, typeId },
      limit,
      offset,
    });
  }
  return res.json(devices);
};

const getOneDevice = async (req, res) => {
  const { id } = req.params;
  const device = await Device.findOne({
    where: { id },
    include: [{ model: DeviceInfo, as: "info" }],
  });
  return res.json(device);
};

const removeDevice = async (req, res) => {
  const { id } = req.params;
  const deviceDel = await Device.destroy({ where: { id: id } });
  return res.json({ message: "Пристрій успішно видалено" });
};

module.exports = {
  createDevice,
  getAllDevice,
  getOneDevice,
  removeDevice,
};
