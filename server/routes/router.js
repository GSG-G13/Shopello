import express from 'express';
import {
  getProductFromCart,
  addToCart,
  removeFromCart,
  updateCart,
  clearCart,
} from '../controllers/cart/cart';

const router = express.Router();

// Cart Routes
router.get('/cart/:userID/:productID', getProductFromCart);
router.post('/cart', addToCart);
router.delete('/cart/:userID/:productID', removeFromCart);
router.put('/cart', updateCart);
router.delete('/cart/:userID', clearCart);

export default router;
