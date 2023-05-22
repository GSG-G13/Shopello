const { DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

const CartItems = () => {
  sequelize.define('CartItems', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id',
    },
    userID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      field: 'userID',
    },
    productID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      field: 'productID',
    },
    quantity: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      field: 'quantity',
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
      field: 'createdAt',
    },
  });
};

module.exports = CartItems;
