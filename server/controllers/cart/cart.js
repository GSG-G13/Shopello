import customError from '../../utils/helper';

import { CartItems } from '../../database/models';

const getCartItems = (req, res, next) => {
  CartItems.findAll()
    .then((cartItems) => {
      res.json(cartItems);
    })
    .catch((err) => {
      next(err);
    });
};

const addToCart = (req, res, next) => {
  const { productId } = req.body;

  CartItems.create({ productId })
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
  const { itemId } = req.params;

  CartItems.destroy({ where: { id: itemId } })
    .then((numDeleted) => {
      if (numDeleted === 0) {
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

export { getCartItems, addToCart, removeFromCart };
