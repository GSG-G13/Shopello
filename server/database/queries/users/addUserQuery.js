import connection from '../../config/connection.js';

const addUserQuery = ({ username, email, password }) => new Promise((resolve, reject) => {
  connection.query(
    'INSERT INTO Users (username, email, password) VALUES ($1, $2, $3) RETURNING *',
    [username, email, password],
    (err, results) => {
      if (err) {
        reject(err);
      }
      resolve(results);
    },
  );
});

export default addUserQuery;
