const { DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

const Product = sequelize.define('Product', {
  id: {
    type: DataTypes.INTEGER(11),
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    field: 'id',
  },
  name: {
    type: DataTypes.STRING(255),
    allowNull: false,
    field: 'name',
  },
  description: {
    type: DataTypes.STRING(255),
    allowNull: false,
    field: 'description',
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
    field: 'price',
  },
  category: {
    type: DataTypes.STRING(255),
    allowNull: false,
    field: 'category',
  },
  image: {
    type: DataTypes.STRING(255),
    allowNull: false,
    field: 'image',
  },
  count: {
    type: DataTypes.INTEGER(11),
    allowNull: false,
    field: 'count',
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
    field: 'createdAt',
  },
});

module.exports = Product;
