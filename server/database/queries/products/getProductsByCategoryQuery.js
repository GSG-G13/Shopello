import connection from '../../config/connection.js';

const getProductsByCategoryQuery = (category) => new Promise((resolve, reject) => {
  connection.query(
    'SELECT * FROM Products WHERE category = $1',
    [category],
    (err, results) => {
      if (err) {
        reject(err);
      }
      resolve(results);
    },
  );
});

export default getProductsByCategoryQuery;
