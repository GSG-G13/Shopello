const connection = require('../../config/connection.js');

const getCategoriesQuery = () => new Promise((resolve, reject) => {
  connection.query(
    'SELECT distinct category FROM Products',
    (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results.rows);
      }
    },
  );
});

module.exports = getCategoriesQuery;
