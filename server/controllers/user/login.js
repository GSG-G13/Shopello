import { compare } from 'bcrypt';
import { loginSchema } from '../../utils/validation';
import { signToken } from '../../utils/jwt';
import customError from '../../utils/helper';
import { getUserByEmailQuery } from '../../database/queries';

const login = (req, res, next) => {
  const { email, password } = req.body;
  loginSchema.validateAsync({ email, password })
    .then(() => getUserByEmailQuery(email))
    .then((user) => {
      if (!user) {
        throw customError(404, { message: 'User not found' });
      }
      return compare(password, user.password);
    })
    .then((isMatch) => {
      if (!isMatch) {
        throw customError(400, { message: 'Password is incorrect' });
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
