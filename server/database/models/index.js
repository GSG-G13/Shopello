/* eslint-disable no-console */
const Sequelize = require('sequelize');
const db = require('../config/connection');
const userModel = require('./user');
const cartItemsModel = require('./cart');
const productModel = require('./products');

const User = userModel(db, Sequelize);
const CartItems = cartItemsModel(db, Sequelize);
const Product = productModel(db, Sequelize);

User.hasMany(CartItems, { foreignKey: 'userID' });
CartItems.belongsTo(User, { foreignKey: 'userID' });

CartItems.hasMany(Product, { foreignKey: 'productID' });
Product.belongsTo(CartItems, { foreignKey: 'productID' });

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
  Product,
};
