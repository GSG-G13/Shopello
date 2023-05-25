import connection from '../../config/connection.js';

const getProductFromCartQuery = (userId) => new Promise((resolve, reject) => {
  connection.query(
    'SELECT * FROM CartItems WHERE userId = $1 ',
    [userId],
    (err, results) => {
      if (err) {
        reject(err);
      }
      resolve(results);
    },
  );
});

export default getProductFromCartQuery;
