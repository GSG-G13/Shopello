const {
  getProductFromCart,
  addToCart,
  removeFromCart,
  updateCart,
  clearCart,
} = require('./cart/cart');

const getProducts = require('./Products');
const getSearchProducts = require('./search/getSearchProducts');
const login = require('./user/login');
const signup = require('./user/signup');

module.exports = {
  getProductFromCart,
  addToCart,
  removeFromCart,
  updateCart,
  clearCart,
  getProducts,
  getSearchProducts,
  login,
  signup,
};
