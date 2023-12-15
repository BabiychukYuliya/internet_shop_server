require("dotenv").config();
const express = require("express");
const sequelize = require("./db");
const models = require("./models/models");
const cors = require("cors");
const router = require("./routes/index");
const errorHandler = require("./middlewears/ErrorHandlingMiddlewear");

PORT = process.env.PORT || 3001;

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api", router);
app.use(errorHandler); //обробка помилок, остання мідлвара

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
