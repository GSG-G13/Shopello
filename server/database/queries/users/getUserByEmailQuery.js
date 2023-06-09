import connection from '../../config/connection.js';

const getUserByEmailQuery = (email) => new Promise((resolve, reject) => {
  connection.query(
    'SELECT * FROM Users WHERE email = $1',
    [email],
    (err, results) => {
      if (err) {
        reject(err);
      }
      resolve(results);
    },
  );
});

export default getUserByEmailQuery;
