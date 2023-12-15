const HttpError = require("../helpers/httpError");

module.exports = function (err, req, res, next) {
  if (err && typeof err === "object" && err.status) {
    return res.status(err.status).json({ message: err.message });
  }
  return res.status(500).json({ message: "Непередбачена помилка" });
};
