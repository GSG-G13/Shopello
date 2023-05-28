const connection = require('../../config/connection.js');

const deleteAllFromCartQuery = () => new Promise((resolve, reject) => {
  connection.query(
    'DELETE * FROM CartItems',
    (err, results) => {
      if (err) {
        reject(err);
      }
      resolve(results);
    },
  );
});

module.exports = deleteAllFromCartQuery;
