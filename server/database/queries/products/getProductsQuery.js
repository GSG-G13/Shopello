import connection from '../../config/connection.js';

const getProductsQuery = () => new Promise((resolve, reject) => {
  connection.query('SELECT * FROM Products', (error, results) => {
    if (error) {
      reject(error);
    } else {
      resolve(results.rows);
    }
  });
});

export default getProductsQuery;
