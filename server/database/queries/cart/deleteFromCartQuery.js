import connection from '../../config/connection.js';

const deleteFromCartQuery = (userID, productID) => new Promise((resolve, reject) => {
  connection.query(
    'DELETE FROM CartItems WHERE userID = $1 AND productID = $2',
    [userID, productID],
    (err, results) => {
      if (err) {
        reject(err);
      }
      resolve(results);
    },
  );
});

export default deleteFromCartQuery;
