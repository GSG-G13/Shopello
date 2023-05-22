import express from 'express';

import {
  getCartItems,
  addToCart,
  removeFromCart,
} from '../controllers/cart/cart';

const router = express.Router();


// Cart Routes
router.get('/cart', getCartItems);
router.post('/addToCart/:itemId', addToCart);
router.delete('/cart/:itemId', removeFromCart);

export default router;
