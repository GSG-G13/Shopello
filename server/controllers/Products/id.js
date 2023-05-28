const { getProductsByIdQuery } = require('../../database/queries');
const CustomizeError = require('../../utils/helper/customError');

const getProductbyId = (req, res, next) => {
  getProductsByIdQuery()
    .then((data) => res.json(data.rows))
    .catch((err) => next(new CustomizeError(500, err.message)));
};

module.exports = getProductbyId;
