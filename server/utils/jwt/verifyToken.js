import Jwt from 'jsonwebtoken';
import {} from 'dotenv/config';

const verifyToken = (token) => new Promise((resolve, reject) => {
  Jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      reject(err);
    }
    resolve(decoded);
  });
});
export default verifyToken;
