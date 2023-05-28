const express = require('express');

const {
  getProductFromCart,
  addToCart,
  removeFromCart,
  updateCart,
  clearCart,
} = require('../controllers/cart/cart');

const getSearchProducts = require('../controllers/search/getSearchProducts');
const signupController = require('../controllers/user/signup');
const login = require('../controllers/user/login');
const { getProducts } = require('../controllers/index');
const { getProductFromId } = require('../controllers/cart/cart');

const router = express.Router();

// router.get('/', (req, res) => res.send('hello'));
router.get('/products', getProducts);
router.get('/search/:product', getSearchProducts);

router.get('/cart', getProductFromCart);
router.get('/product/:productId', getProductFromId);

router.use('/addCart', addToCart);
router.delete('/rmCart/:productId', removeFromCart);
router.put('/upCart/:productId', updateCart);
router.delete('/clearCart', clearCart);
router.post('/signup', signupController);
router.post('/login', login);

module.exports = router;
