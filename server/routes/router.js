import express from 'express';
import {
  getCartItems,
  addToCart,
  removeFromCart,
} from '../controllers/cart/cart.js';
import getSearchProducts from '../controllers/search/getSearchProducts.js';

const router = express.Router();

router.post('/search/:product', getSearchProducts);

// Cart Routes
router.get('/cart', getCartItems);
router.post('/addToCart/:itemId', addToCart);
router.delete('/cart/:itemId', removeFromCart);

router.get("/getCategories", getCategories);

export default router;
