import express from 'express';

import {
  getProductFromCart,
  addToCart,
  removeFromCart,
  updateCart,
  clearCart,
} from '../controllers/cart/cart.js';

import getSearchProducts from '../controllers/search/getSearchProducts.js';

const router = express.Router();

// router.get('/', (req, res) => res.send('hello'));

router.get('/search/:product', getSearchProducts);

// Cart Routes
router.get('/cart/:userID/:productID', getProductFromCart);
router.post('/cart', addToCart);
router.delete('/cart/:userID/:productID', removeFromCart);
router.put('/cart', updateCart);
router.delete('/cart/:userID', clearCart);

export default router;
