import express from 'express';
// import getSearchProducts from './../controllers/search/getSearchProducts';
import {
  getProductFromCart,
  addToCart,
  removeFromCart,
  updateCart,
  clearCart,
} from '../controllers/cart/cart.js';

const router = express.Router();

// router.post('/search/:product', getSearchProducts);

// Cart Routes
router.get('/cart/:userID/:productID', getProductFromCart);
router.post('/cart', addToCart);
router.delete('/cart/:userID/:productID', removeFromCart);
router.put('/cart', updateCart);
router.delete('/cart/:userID', clearCart);

export default router;
