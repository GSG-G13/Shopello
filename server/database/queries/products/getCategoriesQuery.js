import connection from '../../config/connection.js';

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

export default getCategoriesQuery;
