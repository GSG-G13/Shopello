import getProductsQuery from './products/getProductsQuery.js';
import getProductsByCategoryQuery from './products/getProductsByCategoryQuery.js';
import getCategoriesQuery from './products/getCategoriesQuery.js';
import getUserByEmailQuery from './users/getUserByEmailQuery.js';
import addUserQuery from './users/addUserQuery.js';
import addToCartQuery from './cart/addToCartQuery.js';
import deleteFromCartQuery from './cart/deleteFromCartQuery.js';
import getProductFromCartQuery from './cart/getProductFromCartQuery.js';
import deleteAllFromCartQuery from './cart/deleteAllFromCartQuery.js';
import updateCartQuery from './cart/updateCartQuery.js';

export {
  getProductsQuery,
  getProductsByCategoryQuery,
  getUserByEmailQuery,
  addUserQuery,
  addToCartQuery,
  deleteFromCartQuery,
  getProductFromCartQuery,
  deleteAllFromCartQuery,
  updateCartQuery,
  getCategoriesQuery,
};
