const Jwt = require('jsonwebtoken');
require('dotenv/config');

const signToken = (user) => {
  const payload = {
    email: user.email,
    username: user.username,
    password: user.password,
  };
  return new Promise((resolve, reject) => {
    Jwt.sign(payload, process.env.JWT_SECRET, (err, token) => {
      if (err) {
        reject(err);
      }
      resolve(token);
    });
  });
};

module.exports = signToken;
