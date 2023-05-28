const getProductsQuery = require('./products/getProductsQuery.js');
const getProductsByCategoryQuery = require('./products/getProductsByCategoryQuery.js');
const getUserByEmailQuery = require('./users/getUserByEmailQuery.js');
const addUserQuery = require('./users/addUserQuery.js');
const addToCartQuery = require('./cart/addToCartQuery.js');
const deleteFromCartQuery = require('./cart/deleteFromCartQuery.js');
const getProductFromCartQuery = require('./cart/getProductFromCartQuery.js');
const deleteAllFromCartQuery = require('./cart/deleteAllFromCartQuery.js');
const updateCartQuery = require('./cart/updateCartQuery.js');
const getProductsByIdQuery = require('./products/getProductbyId.js');

module.exports = {
  getProductsQuery,
  getProductsByCategoryQuery,
  getUserByEmailQuery,
  addUserQuery,
  addToCartQuery,
  deleteFromCartQuery,
  getProductFromCartQuery,
  deleteAllFromCartQuery,
  updateCartQuery,
  getProductsByIdQuery,
};
