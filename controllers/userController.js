const HttpError = require("../helpers/httpError");

const register = async (req, res) => {};

const login = async (req, res) => {};

const check = async (req, res, next) => {
  const { id } = req.query;
  if (!id) {
    return next(HttpError(404, "ID is required"));
  }
  res.json(id);
};

module.exports = {
  register,
  login,
  check,
};
