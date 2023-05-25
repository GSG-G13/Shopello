import { getProductsQuery } from '../../database/queries/index.js';
import customError from '../../utils/helper/customError.js';

const getAllProducts = (req, res, next) => {
  getProductsQuery()
    .then((result) => {
      res.json(result);
    })
    .catch(() => next(customError(500, 'Internal Server Error')));
};

export default getAllProducts;
