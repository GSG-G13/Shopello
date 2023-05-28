const connection = require('../../config/connection.js');

const getProductFromCartQuery = () => connection.query(`SELECT *
FROM products
WHERE id IN (
  SELECT productId
  FROM cartItems
)
`);

module.exports = getProductFromCartQuery;
