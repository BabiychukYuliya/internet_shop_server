require("dotenv").config();
const express = require("express");
const sequelize = require("./db");
const models = require("./models/models");

PORT = process.env.PORT || 3001;

const app = express();

// Функція для підключення БД
const start = async () => {
  try {
    await sequelize.authenticate(); //функція для аутентіфікації
    await sequelize.sync(); // функція звіряє стан БД із схемою БД
    app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
  } catch (err) {
    console.log(err);
  }
};

start();
