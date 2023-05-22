import connection from '../../config/connection.js';

const updateCartQuery = (userId, productId, quantity) => {
  const query = `
    UPDATE cart
    SET quantity = $1
    WHERE user_id = $2 AND product_id = $3
    RETURNING *;
  `;

  const values = [quantity, userId, productId];

  return connection.query(query, values);
};

export default updateCartQuery;
