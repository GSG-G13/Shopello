const { DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

const User = () => {
  sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id',
    },
    username: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'username',
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'password',
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'email',
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
      field: 'createdAt',
    },
  });
};

module.exports = User;
