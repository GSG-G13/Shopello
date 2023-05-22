/* eslint-disable no-console */
import Sequelize from 'sequelize';
import db from '../config/connection';
import userModel from './user';
import cartItemsModel from './cart';
import productModel from './products';

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

export {
  User,
  CartItems,
  Product,
};
