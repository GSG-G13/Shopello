const connection = require('../../config/connection.js');

const getProductsByIdQuery = (id) => new Promise((resolve, reject) => {
  connection.query(
    'SELECT * FROM Products WHERE id = $1',
    [id],
    (err, results) => {
      if (err) {
        reject(err);
      }
      resolve(results);
    },
  );
});

module.exports = getProductsByIdQuery;
