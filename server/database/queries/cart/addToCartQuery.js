const connection = require('../../config/connection.js');

const addToCartQuery = (productId, quantity) => new Promise((resolve, reject) => {
  connection.query(
    'INSERT INTO CartItems (productId, quantity) VALUES ($1, $2)',
    [productId, quantity],
    (err, results) => {
      if (err) {
        reject(err);
      }
      resolve(results);
    },
  );
});

module.exports = addToCartQuery;
