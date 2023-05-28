const connection = require('../../config/connection.js');

const updateCartQuery = (productId, quantity) => {
  const query = `
    UPDATE cart
    SET quantity = $1
    WHERE productId = $2
    RETURNING *;
  `;

  const values = [quantity, productId];

  return connection.query(query, values);
};

module.exports = updateCartQuery;
