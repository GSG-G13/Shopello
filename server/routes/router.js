import express from 'express';
// import getSearchProducts from './../controllers/search/getSearchProducts';
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
router.get('/cart/:userId', getProductFromCart);
router.post('/addCart/:userId/:productId', addToCart);
router.delete('/rmCart/:userId/:productId', removeFromCart);
router.put('/upCart/:userId/:productId', updateCart);
router.delete('/clearCart/:userId', clearCart);

export default router;
