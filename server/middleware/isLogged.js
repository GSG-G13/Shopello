const { verifyToken } = require('../utils/jwt');

const isLogged = (req, res, next) => {
  const { token } = req.cookies;
  if (!token) {
    next();
  }
  verifyToken(token)
    .then((decoded) => {
      req.user = decoded;
      next();
    })
    .catch((err) => {
      res.clearCookie('token');
      next(err);
    });
};

module.exports = isLogged;
