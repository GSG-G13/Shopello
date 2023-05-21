/* eslint-disable no-console */
const Sequelize = require('sequelize');
const db = require('../config/connection');
const userModel = require('./user');
const cartItemsModel = require('./cartItems');

const User = userModel(db, Sequelize);
const CartItems = cartItemsModel(db, Sequelize);

db.sync({ force: false })
  .then(() => {
    console.log('Database & tables created!');
  })
  .catch((err) => {
    console.err(err);
  });

module.exports = {
  User,
  CartItems,
};
