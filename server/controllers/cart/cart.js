const customError = require('../../utils/helper/index.js');
const {
  addToCartQuery,
  deleteFromCartQuery,
  getProductFromCartQuery,
  deleteAllFromCartQuery,
  updateCartQuery,
  getProductsByIdQuery,
} = require('../../database/queries/index.js');

const getProductFromCart = (req, res, next) => {
  getProductFromCartQuery()
    .then((results) => {
      res.json(results);
    })
    .catch((err) => {
      next(err);
    });
};
const getProductFromId = (req, res, next) => {
  getProductsByIdQuery()
    .then((results) => {
      res.json(results);
    })
    .catch((err) => {
      next(err);
    });
};

const addToCart = (req, res, next) => {
  const { productId, quantity } = req.body;

  addToCartQuery(productId, quantity)
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
  const { productID } = req.params;

  deleteFromCartQuery(productID)
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
  const { productId, quantity } = req.body;
  updateCartQuery(productId, quantity)
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
  deleteAllFromCartQuery()
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

module.exports = {
  getProductFromCart,
  addToCart,
  removeFromCart,
  updateCart,
  clearCart,
  getProductFromId,
};
