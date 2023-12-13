const { Sequelize } = require("sequelize");

module.exports = new Sequelize(
  process.env.DB_NAME, //Назва БД в Постгрес
  process.env.DB_USER, // username in postgres database
  process.env.DB_PASSWORD, // password in postgres database

  {
    dialect: "postgres",
    host: process.env.DB_HOST,
    port: process.env.DB_PORT, // порт за замовчуванням в постгрес
  }
);
