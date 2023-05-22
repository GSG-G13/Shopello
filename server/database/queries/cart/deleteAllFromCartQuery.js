import connection from '../../config/connection';

const deleteAllFromCartQuery = (userID) => new Promise((resolve, reject) => {
  connection.query(
    'DELETE FROM CartItems WHERE userID = $1',
    [userID],
    (err, results) => {
      if (err) {
        reject(err);
      }
      resolve(results);
    },
  );
});

export default deleteAllFromCartQuery;
