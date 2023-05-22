import { verifyToken } from '../utils/jwt';

const checkAuth = (req, res, next) => {
  const { token } = req.cookies;
  if (!token) {
    return res.json({
      status: 401,
      message: 'UnAuthenticate',
    });
  }
  return verifyToken(token)
    .then((decoded) => {
      req.user = decoded;
      next();
    })
    .catch((err) => {
      res.clearCookie('token');
      next(err);
    });
};

export default checkAuth;
