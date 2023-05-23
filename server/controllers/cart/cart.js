import customError from '../../utils/helper/index.js';

import {
  addToCartQuery,
  deleteFromCartQuery,
  getProductFromCartQuery,
  deleteAllFromCartQuery, updateCartQuery,
} from '../../database/queries';

const getProductFromCart = (req, res, next) => {
  const { userID, productID } = req.params;

  getProductFromCartQuery(userID, productID)
    .then((results) => {
      res.json(results);
    })
    .catch((err) => {
      next(err);
    });
};

const addToCart = (req, res, next) => {
  const { userID, productID, quantity } = req.body;

  addToCartQuery(userID, productID, quantity)
    .then(() => {
      res.json({
        success: true,
        message: 'Product added to cart',
      });
    })
    .catch((err) => {
      next(err);
    });
};

const removeFromCart = (req, res, next) => {
  const { userID, productID } = req.params;

  deleteFromCartQuery(userID, productID)
    .then((result) => {
      if (result.rowCount === 0) {
        throw customError(404, { message: 'Item not found in cart' });
      }

      res.json({
        success: true,
        message: 'Item removed from cart',
      });
    })
    .catch((err) => {
      next(err);
    });
};
const updateCart = (req, res, next) => {
  const { userId, productId, quantity } = req.body;
  updateCartQuery(userId, productId, quantity)
    .then((result) => {
      if (result.rowCount === 0) {
        throw customError(404, { message: 'Item not found in cart' });
      }

      res.json({
        success: true,
        message: 'Cart updated',
      });
    })
    .catch((err) => {
      next(err);
    });
};
const clearCart = (req, res, next) => {
  const { userID } = req.params;

  deleteAllFromCartQuery(userID)
    .then((results) => {
      if (results.rowCount === 0) {
        throw customError(404, { message: 'No items found in cart' });
      }

      res.json({
        success: true,
        message: 'Cart cleared',
      });
    })
    .catch((err) => {
      next(err);
    });
};

export {
  getProductFromCart,
  addToCart,
  removeFromCart,
  updateCart,
  clearCart,
};
