import connection from '../../config/connection.js';

const addToCartQuery = (userId, productId, quantity) => new Promise((resolve, reject) => {
  connection.query(
    'INSERT INTO CartItems (userId, productId, quantity) VALUES ($1, $2, $3)',
    [userId, productId, quantity],
    (err, results) => {
      if (err) {
        reject(err);
      }
      resolve(results);
    },
  );
});

export default addToCartQuery;
