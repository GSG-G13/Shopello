import express from 'express';

import {
  getProductFromCart,
  addToCart,
  removeFromCart,
  updateCart,
  clearCart,
} from '../controllers/cart/cart.js';
import getCategories from '../controllers/filter/getCategories.js';

import getSearchProducts from '../controllers/search/getSearchProducts.js';
import signupController from '../controllers/user/signup.js';
import login from '../controllers/user/login.js';
import getAllProducts from '../controllers/filter/getAllProducts.js';

const router = express.Router();

// router.get('/', (req, res) => res.send('hello'));
router.get('/', getAllProducts);

router.get('/search/:product', getSearchProducts);

// Cart Routes
router.get('/cart/:userID/:productID', getProductFromCart);
router.post('/cart', addToCart);
router.delete('/cart/:userID/:productID', removeFromCart);
router.put('/cart', updateCart);
router.delete('/cart/:userID', clearCart);
router.post('/singup', signupController);
router.post('/login', login);

router.get('/getCategories', getCategories);
// router.get('/getAllProducts', getAllProducts);

export default router;
