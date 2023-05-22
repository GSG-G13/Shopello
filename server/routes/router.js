import express from 'express';
import {
  getCartItems,
  addToCart,
  removeFromCart,
} from '../controllers/cart/cart';
import getSearchProducts from '../controllers/getSearchProducts.js';

const router = express.Router();

router.post('/search/:product', getSearchProducts);

// Cart Routes
router.get('/cart', getCartItems);
router.post('/addToCart/:itemId', addToCart);
router.delete('/cart/:itemId', removeFromCart);

export default router;
