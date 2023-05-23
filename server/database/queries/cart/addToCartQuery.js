import connection from '../../config/connection.js';

const addToCartQuery = (userID, productID, quantity) => new Promise((resolve, reject) => {
  connection.query(
    'INSERT INTO CartItems (userID, productID, quantity) VALUES ($1, $2, $3)',
    [userID, productID, quantity],
    (err, results) => {
      if (err) {
        reject(err);
      }
      resolve(results);
    },
  );
});

export default addToCartQuery;
