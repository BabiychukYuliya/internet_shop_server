const HttpError = require("../helpers/httpError");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { User, Basket } = require("../models/models");

const generateJwt = (id, email, role) => {
  return jwt.sign({ id, email, role }, process.env.SECRET_KEY, {
    expiresIn: "36h",
  });
};

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
  const basket = await Basket.create({ userId: user.id });
  const token = generateJwt(user.id, user.email, user.role);
  return res.json({ token });
};

const login = async (req, res, next) => {
  const { email, password } = req.body;
  const user = await User.findOne({ where: { email } });
  if (!user) {
    return next(HttpError(400, "User don't found"));
  }
  const comparePassword = await bcrypt.compareSync(password, user.password); //To check a password
  if (!comparePassword) {
    return next(HttpError(400, "Password don't match"));
  }
  const token = generateJwt(user.id, user.email, user.role);
  return res.json({ token });
};

const check = async (req, res, next) => {
  const token = generateJwt(req.user.id, req.user.email, req.user.role);
  return res.json({ token });
};

module.exports = {
  register,
  login,
  check,
};
