import connection from '../../config/connection.js';

const searchProducts = (product) => new Promise((resolve, reject) => {
  connection.query('SELECT * FROM Products WHERE name LIKE $1', [`%${product}%`], (error, results) => {
    if (error) {
      reject(error);
    } else {
      resolve(results.rows);
    }
  });
});

export default searchProducts;
