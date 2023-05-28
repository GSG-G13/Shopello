const { getProductsQuery } = require('../../database/queries');
const CustomizeError = require('../../utils/helper/customError');

const getProducts = (req, res, next) => {
  getProductsQuery()
    .then((data) => res.json(data.rows))
    .catch((err) => next(new CustomizeError(500, err.message)));
};

module.exports = getProducts;
