const express = require("express");
const db = require("./database/config/connection");
const { User, CartItems } = require("./database/models/index");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/*
  CURD operations are here
*/

db.authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

app.listen(3000, () => {
  console.log("Server is running on http://127.0.0.1:3000");
});
