const express = require("express");
require("dotenv").config();
const sequelize = require("./db");

const app = express();

PORT = process.env.PORT || 3001;

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
