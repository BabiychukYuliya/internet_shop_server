const sequelize = require("../db");

const { DataType } = require("sequelize");

const User = sequelize.define("User", {
  id: { type: DataType.INTEGER, primaryKey: true, autoIncrement: true },
  email: { type: DataType.STRING, unique: true },
  password: { type: DataType.STRING },
  role: { type: DataType.STRING, defaultValue: "USER" },
});
