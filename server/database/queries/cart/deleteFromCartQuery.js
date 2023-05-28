const connection = require('../../config/connection.js');

const deleteFromCartQuery = (productId) => new Promise((resolve, reject) => {
  connection.query(
    'DELETE FROM CartItems WHERE productID = $1',
    [productId],
    (err, results) => {
      if (err) {
        reject(err);
      }
      resolve(results);
    },
  );
});

module.exports = deleteFromCartQuery;
