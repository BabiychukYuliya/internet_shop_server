const HttpError = require("../helpers/httpError");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { User, Bascet } = require("../models/models");

const register = async (req, res, next) => {
  const { email, password, role } = req.body;

  if (!email || !password) {
    return next(HttpError(400, "Invalid email or password"));
  }
  const candidate = await User.findOne({ where: { email } });

  if (candidate) {
    return next(HttpError(400, "User already registered"));
  }

  const hashPassword = await bcrypt.hash(password, 10);

  const user = await User.create({ email, role, password: hashPassword });
  const basket = await Bascet.create({ userId: user.id });
  const jwt = jwt.sign({ id: user.id, email, role });
};

const login = async (req, res) => {};

const check = async (req, res, next) => {
  const { id } = req.query;
  if (!id) {
    return next(HttpError(404, "ID не заданий"));
  }
  res.json(id);
};

module.exports = {
  register,
  login,
  check,
};
