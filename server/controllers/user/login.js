/* eslint-disable consistent-return */
import bcrypt from 'bcrypt';
import { loginSchema } from '../../utils/validation/index.js';
import { signToken } from '../../utils/jwt/index.js';
import customError from '../../utils/helper/index.js';
import { getUserByEmailQuery } from '../../database/queries/index.js';

const login = (req, res, next) => {
  const { email, password } = req.body;
  // console.log(email, password);
  loginSchema.validateAsync({ email, password })
    .then(() => getUserByEmailQuery(email))
    .then((user) => {
      // eslint-disable-next-line prefer-destructuring
      req.user = user.rows[0];
      if (!user.rows[0]) {
        return customError(404, 'User not found');
      }
      return bcrypt.compare(password, user.rows[0].password);
    })
    .then((isMatch) => {
      if (!isMatch) {
        throw customError(400, 'Password is incorrect');
      }
      return signToken(req.user);
    })
    .then((token) => {
      res.cookie('token', token, { httpOnly: true });
      res.json({
        status: 200,
        message: 'Login successfully',
      });
    })
    .catch((err) => {
      next(err);
    });
};

export default login;
